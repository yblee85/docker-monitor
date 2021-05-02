import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchContainerStats ,inspectContainer, fetchSwarmStatusInfo } from '../../control/api/api';
import Header from '../Header/Header';
import DockerContainerListPanel from '../DockerContainerListPanel/DockerContainerListPanel';
import SwarmServiceListPanel from '../SwarmServiceListPanel/SwarmServiceListPanel';
import _ from 'underscore';

function App() {

  // stand alone mode
  const onInspect = async (cid)=> {
      const resp = await inspectContainer(cid);
      const strResp = JSON.stringify(resp, null, 4);
      alert(strResp);
  };

  const fetchStats = async () => {
    const res = await fetchContainerStats();
    console.table(res);
    return res;
  }

  const refreshStats = () => {
    (async () => {
      const res = await fetchStats();
      setContainerStats(res);
    })();
  };

  // swarm mode
  const fetchServiceStats = async () => {
    const liServicesWithStat = await fetchSwarmStatusInfo();
    return liServicesWithStat;
  }

  const refreshServiceStats = () => {
    (async () => {
      const res = await fetchServiceStats();
      setServiceStats(res);
    })();
  }

  const onViewService = (sid) => {
    const foundService = serviceStats[sid];
    if(foundService) {
      alert(JSON.stringify(foundService, null, 4));
    } else {
      alert(`hmm can not find the service ${sid}`);
    }
  }
  const onViewTasks = (sid) => {
    const foundService = serviceStats[sid];
    if(foundService) {
      alert(JSON.stringify(foundService.tasks, null, 4));
    } else {
      alert(`hmm can not find service ${sid}`);
    }
  }
  const onViewNodes = (sid) => {
    const foundService = serviceStats[sid];
    if(foundService) {
      alert(JSON.stringify(foundService.nodes, null, 4));
    } else {
      alert(`hmm can not find the service ${sid}`);
    }
  }

  const onToggle = () => {
    setIsStandAlone(!isStandAlone);
  }

  const onRefresh =() => {
    if(isStandAlone) refreshStats();
    else refreshServiceStats();
  }

  const [ containerStats, setContainerStats ] = useState([]);
  const [ serviceStats, setServiceStats ] = useState([]);
  const [ isStandAlone, setIsStandAlone ] = useState(false);

  useEffect(()=>{
    refreshStats();
  }, [])

  useEffect(() => {
    if(isStandAlone) refreshStats();
    else refreshServiceStats();
  }, [isStandAlone])
  

  const lastUpdated = new Date();
  const viewMode = isStandAlone?"Stand Alone" : "Swarm Mode";
  const liServiceStats = _.values(serviceStats);
  return (
    <div className="App">
        <Header 
          lastUpdated={lastUpdated} 
          viewMode={viewMode}
          onRefresh={onRefresh} 
          onToggle={onToggle}
        />
        {
          isStandAlone?
          <DockerContainerListPanel container_stats={containerStats} onInspect={onInspect} />
          :
          <SwarmServiceListPanel 
            service_stats={liServiceStats}
            onViewService={onViewService}
            onViewTasks={onViewTasks}
            onViewNodes={onViewNodes}
          />
        }
    </div>
  );
}

export default App;
