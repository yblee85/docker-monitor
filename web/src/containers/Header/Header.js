
const Header = ({lastUpdated, viewMode, onRefresh, onToggle })=> {
    const updated = new Date(lastUpdated);
    const updatedDisplay = updated.toLocaleString();
    return (
        <>
            <h3> Last Updated : {updatedDisplay}</h3> 
            <button onClick={()=>onRefresh()}>Refresh</button>
            <button onClick={()=>onToggle()}>{viewMode}</button>
        </>
    );
}

export default Header;