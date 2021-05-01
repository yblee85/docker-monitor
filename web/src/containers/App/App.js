import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchContainerStats ,inspectContainer } from '../../control/api/api';
import Header from '../Header/Header';
import DockerContainerListPanel from '../DockerContainerListPanel/DockerContainerListPanel';

function App() {

  const onInspect = async (cid)=> {
      const resp = await inspectContainer(cid);
      const strResp = JSON.stringify(resp, null, 4);
      alert(strResp);
  };

  const [ containerStats, setContainerStats ] = useState([]);

  useEffect(()=>{
    fetchStats()
    .then((data)=>setContainerStats(data))
  }, [])

  const fetchStats = async () => {
    const res = await fetchContainerStats();
    // const res = mock_container_stats;
    console.table(res);
    return res;
  }

  const lastUpdated = new Date();

  return (
    <div className="App">
        <Header lastUpdated={lastUpdated} />
        <DockerContainerListPanel container_stats={containerStats} onInspect={onInspect} />
    </div>
  );
}

export default App;
