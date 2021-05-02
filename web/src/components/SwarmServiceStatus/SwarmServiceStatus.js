import Button from 'react-bootstrap/Button';

const SwarmServiceStatus = ({ status, onViewService, onViewTasks, onViewNodes }) => {
    const { ID, Spec, CreatedAt } = status;
    const { Name, Mode, TaskTemplate } = Spec;
    let Image = TaskTemplate?.ContainerSpec?.Image;
    // console.log(status);

    const dateDisplay = (new Date(CreatedAt)).toLocaleString();

    const idService = `${ID}-service`;
    const idTask = `${ID}-task`;
    const idNode = `${ID}-node`;

    return (
        <>
            <tr>
                <td>{ID}</td>
                <td>{Name}</td>
                <td>{dateDisplay}</td>
                <td>{Image}</td>                
                <td>{JSON.stringify(Mode)}</td>
                <td><Button variant="primary" key={idService} onClick={()=>onViewService(ID)}>Service</Button></td>
                <td><Button variant="primary" key={idTask} onClick={()=>onViewTasks(ID)}>Tasks</Button></td>
                <td><Button variant="primary" key={idNode} onClick={()=>onViewNodes(ID)}>Nodes</Button></td>
            </tr>
        </>
    );
};

export default SwarmServiceStatus;