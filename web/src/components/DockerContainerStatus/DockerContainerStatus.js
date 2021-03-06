import Button from 'react-bootstrap/Button';

const ContainerStatus = ({ status, onInspect }) => {
    const { Id, Names, Image, Created, State, Status, Ports } = status;

    let formattedImage = Image;
    if(Image.indexOf("@sha256:")>=0) {
        const indexOfAt = Image.indexOf("@");
        formattedImage = Image.substring(0, indexOfAt);
    }
    // console.log(status);

    const name = Names[0];
    const dateDisplay = (new Date(Created*1000)).toLocaleString();
    const { PrivatePort, PublicPort } = Ports[0];

    return (
        <>
            <tr>
                <td>{formattedImage}</td>
                <td>{name}</td>
                <td>{PublicPort}</td>
                <td>{PrivatePort}</td>
                <td>{dateDisplay}</td>
                <td>{State}</td>
                <td>{Status}</td>
                <td><Button variant="primary" key={Id} onClick={()=>onInspect(Id)}>Inspect</Button></td>
            </tr>
        </>
    );
};

export default ContainerStatus;