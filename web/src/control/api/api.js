

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

export { fetchContainerStats, inspectContainer };