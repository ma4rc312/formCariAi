import { Container, Row, Col, CardFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <CardFooter  >
      <Container>
        <Row>
          <Col>
            <p>&copy; 2023 Tu Empresa</p>
          </Col>
        </Row>
      </Container>
    </CardFooter>
  );
}

export default Footer;
