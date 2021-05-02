import _ from "underscore";


const fetchContainerStats = async () => {
    const res = await fetch("/api/containers");
    const data = await res.json();
    return data;
}

const inspectContainer = async (cid) => {
    const res = await fetch(`/api/containers/inspect?container_id=${cid}`);
    const data = await res.json();
    return data;
}

// swarmmode
const fetchListNodes = async () => {
    const res = await fetch(`/api/swarm/nodes`);
    const data = await res.json();
    return data;
}

const fetchListServices = async () => {
    const res = await fetch(`/api/swarm/services`);
    const data = await res.json();
    return data;
}

const fetchListTasks = async () => {
    const res = await fetch(`/api/swarm/tasks`);
    const data = await res.json();
    return data;
}

// TODO : must be better way to find out swarm mode is on. like docker info | grep -i swarm in terminal 
const fetchIsSwarmModeOn = async () => {
    try {
        const res = await fetch(`/api/swarm/tasks`);
        const data = await res.json();
        return data.err?false:true;
    } catch(err) {
        return false;
    }
}

const fetchSwarmStatusInfo = async () => {
    const isSwarmOn = await fetchIsSwarmModeOn();
    if(!isSwarmOn) return [];

    const [ liNodes, liServices, liTasks ] = await Promise.all( [ fetchListNodes(), fetchListServices(), fetchListTasks() ] );

    let mapNodes = {};
    let mapServices = {};
    let mapTasksByServiceId = {};

    _.each(liNodes, (n)=>{
        const { ID, CreatedAt, UpdatedAt, Spec, Description, Status, ManagerStatus } = n;
        const { Hostname, Resources  } = Description;
        mapNodes[n.ID] = {
            ID, CreatedAt, UpdatedAt, Spec, 
            Description : { Hostname, Resources }, 
            Status, ManagerStatus
        };
    });

    _.each(liServices, (s)=>{
        const { ID, CreatedAt, UpdatedAt, Spec } = s;
        const { Name, TaskTemplate, Mode } = Spec;
        const { ContainerSpec } = TaskTemplate;

        let Image = ContainerSpec.Image;
        const indexOfAt = Image.indexOf("@");
        const ImageWithoutSha = Image.substring(0, indexOfAt);
        ContainerSpec.Image = ImageWithoutSha;

        mapServices[s.ID] = { 
            ID, 
            CreatedAt, 
            UpdatedAt, 
            Spec : {
                Name, 
                TaskTemplate: { ContainerSpec }, 
                Mode
            }
        };
    });

    const liTasksNormalized = _.map(liTasks, (t)=>{
        const { ID, CreatedAt, UpdatedAt, Spec, ServiceID, NodeID, Status, DesiredState } = t;

        let Image = Spec.ContainerSpec.Image;
        const indexOfAt = Image.indexOf("@");
        const ImageWithoutSha = Image.substring(0, indexOfAt);
        Spec.ContainerSpec.Image = ImageWithoutSha;

        return {
            ID, CreatedAt, UpdatedAt, Spec, 
            ServiceID, NodeID, Status, DesiredState    
        }
    });

    mapTasksByServiceId = _.groupBy(liTasksNormalized, "ServiceID");

    let mapServiceStats = {};
    _(mapTasksByServiceId).chain().keys()
    .each((sid)=>{
        let tasks = _.map(mapTasksByServiceId[sid], (t)=>{
            const { ID, Spec, NodeID, ServiceID, Status, CreatedAt } = t;
            
            const taskSummary = { ID, Spec, NodeID, ServiceID, Status, CreatedAt };
            return taskSummary;
        });

        let tasksGroupByNode = _.groupBy(tasks, "NodeID");
        let nodes =
        _(tasksGroupByNode).chain()
        .keys()
        .map((nid)=>{
            const { ID, Description, Status, Spec } = mapNodes[nid];
            const { Hostname, Resources } = Description;
            const nodeInfo = { 
                ID, 
                Description:{ Hostname, Resources }, 
                Status, Spec 
            };
            const num_of_tasks = tasksGroupByNode[nid].length;

            const nodeInfoWithTask = {
                ...nodeInfo,
                num_of_tasks
            };
            return nodeInfoWithTask;
        })
        .value();

        mapServiceStats[sid] = {
            ...mapServices[sid],
            tasks,
            nodes
        }
    });

    return mapServiceStats;
    //
    // service
    // + tasks : [ { ID, Spec, NodeID, ServiceId, Status } ]
    // + nodes : [ { ID, Description, Status, Spec, num_of_tasks :  } ]

}

export { 
    fetchContainerStats, inspectContainer,
    fetchIsSwarmModeOn,
    fetchListNodes,
    fetchListServices,
    fetchListTasks,
    fetchSwarmStatusInfo
 };