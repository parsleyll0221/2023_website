import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function TitleBox() {
    return (
        <div className='titleBox'>
            <Container>
                <div className='text-center'>
                    <p className='text-black-50'><h4>Lorem, ipsum</h4></p>
                    <p><h3>Lorem ipsum dolor sit amet
                        <br className='d-md-block d-lg-none' />
                        consectetur adipisicing elit.
                        <br className='d-md-block d-lg-none' />
                        Sequi, maxime</h3></p>
                    <p className='text-black-50'><h6>Lorem ipsum dolor sit amet</h6></p>
                </div>
            </Container>
        </div>
    )
}

export default TitleBox