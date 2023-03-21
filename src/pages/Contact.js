import FirstImg from '../img/Esperanto5.webp';
import SecondImg from '../img/Esperanto6.webp';
import Card from 'react-bootstrap/Card';
import AnimationPage from './animation';
import LocationLogo from '../img/location.webp'

const Contact = () => {

    return (
        <AnimationPage>
            <div className='contact-container'>
                <div className='container justify-content-center cards-cont mb-5 mt-5'>
                    <Card className='cards-img'>
                        <Card.Img className='shadow-img' variant="top" src={FirstImg} alt='first card img'/>
                        <Card.Body className='cards-body'>
                            <Card.Title className='fs-2 special-font special-color'>Come Dine With Us</Card.Title>
                            <Card.Text>
                                Merryland - Heliopolis - Cairo
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='cards-img'>
                        <Card.Img className='shadow-img' variant="top" src={SecondImg} alt='second card img'/>
                        <Card.Body className='cards-body'>
                            <Card.Title className='fs-2 special-font special-color'>Opening Hours</Card.Title>
                            <Card.Text>
                                Daily : 9am - 1am
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='line'></div>
                {/* AIzaSyC_sGqvu7whCn1QOkzIOYm4vxH0bfZssgQ */}
                <div className='d-flex justify-content-center flex-column align-items-center'>
                    <div className='special-color fs-2 mb-5 mt-5 text-uppercase fw-bold text-location'>
                        Get Our Direction
                        <a className='ms-3' href='https://www.google.com/maps/place/Esperanto/@30.0988195,31.3188994,17z/data=!3m1!4b1!4m5!3m4!1s0x145815439f6f6949:0x55c41436c4629769!8m2!3d30.0988195!4d31.3188994?hl=en-EG' target="_blank" rel="noopener noreferrer">
                            <img src={LocationLogo} alt='locatioLogo' width={60} />
                        </a>
                    </div>
                    {/* <AnyReactComponent /> */}
                </div>
                <div className='line'></div>
            </div>
        </AnimationPage>
    );
};

export default Contact;