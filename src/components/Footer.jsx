import { Container, Row, Col, Nav, NavLink, Image } from 'react-bootstrap';
import Logo from '../assets/logo1.jpg';
import { FaInstagram, FaFacebook, FaTiktok, FaTwitter } from 'react-icons/fa';
import '../css/Footer.css';

function Footer() {
    return (
        <footer>
            <Container fluid>
                <Row className="bg-secondary text-white pt-4 ps-4 pe-4 mt-4 justify-content-center">
                    <Col xs={5} md={5} lg={2} className="d-flex align-items-center mb-3"> 
                       <div> <Image 
                            src={Logo}
                            alt="company logo"
                            rounded
                            width={140}
                            height={140}
                        />    </div>
                    </Col> 

                    <Col xs={8} md={4} lg={3} className="mb-5">
                        <Nav className="flex-column fs-5">
                            <p className="titoli-footer mb-3">
                                <i id="store" className="bi bi-bank me-2"></i> Dove è il nostro store?
                            </p>
                            <NavLink 
    href="https://www.google.com/maps/search/?api=1&query=Via+Palombarese,+20,+00013+Fonte+Nuova,+Roma"
    className="a text-white fw-bold"
    target="_blank"
    rel="noopener noreferrer"
>
    Via Palombarese, 20
</NavLink>                <NavLink href="#" className="a text-white">  00013 Fonte Nuova </NavLink>
                            <NavLink href="#" className="a text-white">Roma (RM) - zona Fonte Nuova</NavLink>
                            
                        </Nav>
                    </Col>

                    <Col xs={8} md={5} lg={3} className="mb-5">
                        <Nav className="NavLink flex-column fs-5">
                            <p className="titoli-footer mb-3">
                            <i className="bi bi-calendar-date me-2"></i> Nostri Orari
                            </p>
                            <NavLink href="#" className="a text-white">- Da Lunedi al Sabato</NavLink>
                            <NavLink href="#" className="a text-white">9:00/13:00 & 16:00/20:00</NavLink>
                            <NavLink href="#" className="a text-white">- Domenica</NavLink>
                            <NavLink href="#" className="a text-white">9:00/13:00</NavLink>
                        </Nav>
                    </Col>

                    <Col xs={8} md={4} lg={3} className="mb-5">
                        <p className="titoli-footer mb-3 ">
                            <i className="bi bi-briefcase me-2"></i> Contattaci
                        </p>
                        <h1 className="email mb-3 ms-2 fs-5">Email: .@gmail.com</h1>
                        <h1 className="telefono mb-4 ms-2 fs-5">Telefono: 3487896977</h1>
                        <p className="titoli-footer mb-4 mt-5 ">
                        <i className="bi bi-chat me-2"></i> Seguici anche sui social
                        </p>
                        <a href="https://www.instagram.com/caffehorus/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} style={{ color: '#E1306C' }} />
                        </a>
                        <a href=" https://www.facebook.com/search/top?q=GL%20CAFFE%20HORUS" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} style={{ marginLeft: '15px', color: '#3b5998' }} />
                        </a>
                        <a href=" https://www.tiktok.com/@cristinahorus" target="_blank" rel="noopener noreferrer">
                            <FaTiktok size={30} style={{ marginLeft: '15px', color: '#000' }} />
                        </a>
                        
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;