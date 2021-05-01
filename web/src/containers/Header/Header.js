import Card from 'react-bootstrap/Card';

const Header = ({lastUpdated})=> {
    const updated = new Date(lastUpdated);
    const updatedDisplay = updated.toLocaleString();
    return (
        // <h3> Last Updated : {updatedDisplay}</h3>
        <Card.Body>
            <Card.Title>Hello</Card.Title>
            <Card.Text>Last Updated : {updatedDisplay}</Card.Text>
        </Card.Body>
    );
}

export default Header;