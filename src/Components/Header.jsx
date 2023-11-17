import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import { FaAlignJustify } from "react-icons/fa6";

function Header() {
    return (
        <header expand="lg" className="bg-body-tertiary">
            <Container className='d-flex py-4 bg-body-tertiary'>
                <Navbar>
                    <h2>LOGO</h2>
                </Navbar>
                <Navbar className='ms-auto d-lg-block d-none'>
                    <ul className='d-flex m-0 '>
                        <li className='mx-5'><h4>Program</h4></li>
                        <li className='mx-5'><h4>Business</h4></li>
                        <li className='ms-5'><h4>Contact</h4></li>
                    </ul>
                </Navbar>
                <Navbar className='ms-auto d-lg-none d-md-block'>
                    <div className='m-0'>
                        <FaAlignJustify size="25" />
                    </div>
                </Navbar>
            </Container>
        </header>
    )
}

export default Header
