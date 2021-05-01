import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ContainerStatus = ({ status, onInspect }) => {
    const { Id, Names, Image, Created, State, Status, Ports } = status;

    // console.log(status);

    const name = Names[0];
    const dateDisplay = (new Date(Created*1000)).toLocaleString();
    const { PrivatePort, PublicPort } = Ports[0];
    const txtPublicP = PublicPort?`Public Port : ${PublicPort}`:""; 
    const txtPrivateP = PrivatePort?`Private Port : ${PrivatePort}`:""; 
    const txtPortInfo = [ txtPublicP, txtPrivateP ].join(" / ");

    return (
        <>
            <Card.Body>
                <Card.Title>Image : {Image} ( Name : {name} )</Card.Title>
                <Card.Text>{txtPortInfo}</Card.Text>
                <Card.Text>created : {dateDisplay}</Card.Text>
                <Card.Text>State : {State} ( Status : {Status} ) </Card.Text>
                <Button variant="primary" key={Id} onClick={()=>onInspect(Id)}>Inspect</Button>
            </Card.Body>
        </>
    );
};

export default ContainerStatus;