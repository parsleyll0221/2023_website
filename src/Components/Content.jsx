import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function Content() {
    return (
        <div className='Content'>
            <Container className='p-0'>
                <Row className='d-flex justify-content-between align-items-center'>
                    <Col sm={12} lg={4} className='order-lg-1 order-2  d-flex justify-content-center align-items-start'>
                        <div className='text-center text-lg-start'>
                            <p><h3>Lorem, ipsum dolor</h3></p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, unde</p>
                        </div>
                    </Col>
                    <Col sm={12} lg={6} className='banner order-1 order-lg-2 rounded'>
                        <div className='d-flex justify-content-center'>
                            <img src="./logo512.png" className='img001' />
                        </div>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-between align-items-center'>
                    <Col sm={12} lg={6} className='banner order-2 order-lg-1 rounded'>
                        <div className='d-flex justify-content-center'>
                            <img src="./logo512.png" className='img001' />
                        </div>
                    </Col>
                    <Col sm={12} lg={4} className='order-lg-1 order-2  d-flex justify-content-center align-items-start'>
                        <div className='text-center text-lg-start'>
                            <p><h3>Lorem, ipsum dolor</h3></p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, unde</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Content