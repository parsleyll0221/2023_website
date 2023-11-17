import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function VisualWrap() {
    return (
        <div className='bg-light mb-3'>
            <div className='visualWrap'>
                <Container className='d-lg-flex justify-content-lg-between align-items-lg-center flex-lg-row d-flex flex-column align-items-center py-4 px-4'>
                    <div>
                        <p><h3>Lorem</h3></p>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <img src="../logo512.png" alt="" />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default VisualWrap