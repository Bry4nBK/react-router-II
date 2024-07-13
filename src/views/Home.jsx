
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <Container className="mainLayout text-center py-5">
            <Row className="mb-4">
                <Col>
                    <h1>Bienvenido Maestro Pokemon</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src="https://i.pinimg.com/474x/90/6e/dc/906edc8b6f1b7089442ce99ca0b5a7a2.jpg" alt="Logo Pokemon" fluid />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
