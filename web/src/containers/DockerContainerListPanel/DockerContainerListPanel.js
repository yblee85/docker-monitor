import DockerContainerStatus from '../../components/DockerContainerStatus/DockerContainerStatus';

const DockerContainerListPanel = ({container_stats, onInspect}) => {
    
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Public Port</th>
                        <th>Private Port</th>
                        <th>Created</th>
                        <th>State</th>
                        <th>Status</th>
                        <th>Inspect</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        container_stats.length>0?
                        container_stats.map((c)=>{
                            return <DockerContainerStatus status={c} onInspect={onInspect} />
                        })
                        :
                        (<tr>
                            <td colSpan="8">No Running Containers</td>
                        </tr>)
                    }
                </tbody>
            </table>            
        </>
    );
};

export default DockerContainerListPanel;