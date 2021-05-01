
const Header = ({lastUpdated, onRefresh })=> {
    const updated = new Date(lastUpdated);
    const updatedDisplay = updated.toLocaleString();
    return (
        <>
            <h3> Last Updated : {updatedDisplay}</h3> <button onClick={()=>onRefresh()}>Refresh</button>
        </>
    );
}

export default Header;