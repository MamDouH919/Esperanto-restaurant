import FirstImg from '../img/Esperanto1.webp';
import SecondImg from '../img/Esperanto2.webp';
import ThirdImg from '../img/Esperanto3.webp';
import FourthImg from '../img/Esperanto4.webp';
import FifthImg from '../img/Esperantoplace3.webp';
import SixthImg from '../img/Esperantoplace4.webp';
import SeventhImg from '../img/Esperantoplace6.webp';
import EighthImg from '../img/Esperantoplace7.webp';
import Video from '../img/Esperanto1.mp4';
import ReactPlayer from 'react-player/lazy'
import FirstImgCard from '../img/Esperanto7.webp';
import SecondImgCard from '../img/Esperanto8.webp';

import Carousel from 'react-bootstrap/Carousel';
import AnimationPage from './animation';
import Card from 'react-bootstrap/Card';
import React, { Suspense } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

const renderLoader = () => <p>Loading</p>;

function Home() {

    return (
        <AnimationPage>
            <div className=' d-flex justify-content-center align-items-center flex-column'>
                <Carousel className='carousel' controls={false} interval={3000} indicators={false} pause={false}>
                    <Carousel.Item>
                        <Suspense fallback={renderLoader()}>
                            <LazyLoadImage
                                width="620"
                                height="480"
                                className="d-block w-100"
                                src={FifthImg}
                                alt="First slide"
                                loading="lazy"
                            />
                        </Suspense>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Suspense fallback={renderLoader()}>
                            <LazyLoadImage
                                width="620"
                                height="480"
                                className="d-block w-100"
                                src={SixthImg}
                                alt="First slide"
                                loading="lazy"
                            />
                        </Suspense>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Suspense fallback={renderLoader()}>
                            <LazyLoadImage
                                width="620"
                                height="480"
                                className="d-block w-100"
                                src={SecondImg}
                                alt="Second slide"
                                loading="lazy"
                            />
                        </Suspense>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Suspense fallback={renderLoader()}>
                            <LazyLoadImage
                                width="620"
                                height="480"
                                className="d-block w-100"
                                src={SeventhImg}
                                alt="Second slide"
                                loading="lazy"
                            />
                        </Suspense>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Suspense fallback={renderLoader()}>
                            <LazyLoadImage
                                width="620"
                                height="480"
                                className="d-block w-100"
                                src={EighthImg}
                                alt="Second slide"
                                loading="lazy"
                            />
                        </Suspense>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Suspense fallback={renderLoader()}>
                            <LazyLoadImage
                                width="620"
                                height="480"
                                className="d-block w-100"
                                src={ThirdImg}
                                alt="Third slide"
                                loading="lazy"
                            />

                        </Suspense>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Suspense fallback={renderLoader()}>
                            <LazyLoadImage
                                width="620"
                                height="480"
                                className="d-block w-100"
                                src={FourthImg}
                                alt="Fourth slide"
                                loading="lazy"
                            />
                        </Suspense>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Suspense fallback={renderLoader()}>
                            <LazyLoadImage
                                width="620"
                                height="480"
                                className="d-block w-100"
                                src={FirstImg}
                                alt="Fifth slide"
                                loading="lazy"
                            />
                        </Suspense>
                    </Carousel.Item>
                    
                </Carousel>
                <div className='line'></div>
                <ReactPlayer
                    controls
                    className='react-player'
                    url={Video}
                    width='70%'
                    height='100%'
                    alt='descraption video'
                />
                <div className='line'></div>
                <div className='container d-flex justify-content-center cards-cont mb-4 mt-4'>
                    <Card className='cards-img'>
                        <LazyLoadImage className='shadow-img' variant="top" width="100%"
                            height="100%" src={FirstImgCard} alt='first card img' />
                        <Card.Body className='cards-body'>
                            <Card.Title className='fs-2 special-color special-font'>Come Dine With Us</Card.Title>
                            <Card.Text>
                                Merryland - Heliopolis - Cairo
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='cards-img'>
                        <LazyLoadImage className='shadow-img' variant="top" width="100%"
                            height="100%" src={SecondImgCard} alt='second card img' />
                        <Card.Body className='cards-body'>
                            <Card.Title className='fs-2 special-color special-font'>Opening Hours</Card.Title>
                            <Card.Text>
                                Daily : 9am - 1am
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='line'></div>
            </div>
        </AnimationPage>
    );
}

export default Home;