import DockerContainerStatus from '../../components/DockerContainerStatus/DockerContainerStatus';

const DockerContainerListPanel = ({container_stats, onInspect}) => {
    
    return (
        <>
            {
                container_stats.length>0?
                container_stats.map((c)=>{
                    return <DockerContainerStatus status={c} onInspect={onInspect} />
                }) :
                <h3>No Running Containers</h3>
            }
        </>
    );
};

export default DockerContainerListPanel;