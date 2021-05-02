import SwarmServiceStatus from '../../components/SwarmServiceStatus/SwarmServiceStatus';

const SwarmServiceListPanel = ({service_stats, onViewService, onViewTasks, onViewNodes}) => {
    
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Service ID</th>
                        <th>Service Name</th>
                        <th>Created</th>
                        <th>Container Image</th>
                        <th>Mode</th>
                        <th>View Service</th>
                        <th>View Tasks</th>
                        <th>View Nodes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        service_stats.length>0?
                        service_stats.map((s)=>{
                            return <SwarmServiceStatus 
                                    key={s.ID}
                                    status={s} 
                                    onViewService={onViewService}
                                    onViewTasks={onViewTasks}
                                    onViewNodes={onViewNodes}
                                />
                        })
                        :
                        (<tr>
                            <td colSpan="8">No Services</td>
                        </tr>)
                    }
                </tbody>
            </table>            
        </>
    );
};

export default SwarmServiceListPanel;