import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import Card from 'react-bootstrap/Card';
import AnimationPage from './animation';

import FirstMenu from '../img/menu.webp';
import SecondMenu from '../img/menu1.webp';
import Cocktail from '../img/Cocktails.webp';
import FirstArtboard from '../img/Artboard.webp';
import SecondArtboard from '../img/Artboard1.webp';
import FirstBavergesImg from '../img/baverges.webp';
import SecondBavergesImg from '../img/baverges1.webp';
import FirstDessert from '../img/dessert.webp';
import SecondDessert from '../img/dessert1.webp';
import FreshJuices from '../img/FreshJuices.webp';
import FirstHotSoups from '../img/HotSoups.webp';
import SecondHotSoups from '../img/HotSoups1.webp';
import IceCoffeeImg from '../img/IceCoffee.webp';
import LevantImg from '../img/levant.webp';
import FirstMainDishes from '../img/MainDishes.webp';
import SecondMainDishes from '../img/MainDishes1.webp';
import SecondOmelets from '../img/Omelets.webp';
import FirstOmelets from '../img/Omelets1.webp';
import FirstPasta from '../img/Pasta.webp';
import SecondPasta from '../img/Pasta1.webp';
import FirstPizza from '../img/Pizza.webp';
import SecondPizza from '../img/Pizza1.webp';
import FirstSalads from '../img/Salads.webp';
import SecondSalads from '../img/Salads1.webp';
import SandwichesImg from '../img/Sandwiches.webp';
import FirstShakesImg from '../img/Shakes.webp';
import SecondShakesImg from '../img/Shakes1.webp';
import SweetBreakfastImg from '../img/SweetBreakfast.webp';

function Menus() {

    const [index, setIndex] = useState(true);
    const [Cocktails, setCocktails] = useState(false);
    const [Artboard, setArtboard] = useState(false);
    const [Baverge, setBaverge] = useState(false);
    const [Dessert, setDessert] = useState(false);
    const [Fresh, setFresh] = useState(false);
    const [HotSoups, setHotSoups] = useState(false);
    const [IceCoffee, setIceCoffee] = useState(false);
    const [Levant, setLevant] = useState(false);
    const [MainDishes, setMainDishes] = useState(false);
    const [Omelets, setOmelets] = useState(false);
    const [Pasta, setPasta] = useState(false);
    const [Pizza, setPizza] = useState(false);
    const [Salads, setSalads] = useState(false);
    const [Sandwiches, setSandwiches] = useState(false);
    const [Shakes, setShakes] = useState(false);
    const [SweetBreakfast, setSweetBreakfast] = useState(false);

    const toggleCocktails = () => {
        setIndex(false)
        setTimeout(() => {
            setCocktails(true)
        }, 50);
        setArtboard(false)
        setBaverge(false)
        setDessert(false)
        setFresh(false)
        setHotSoups(false)
        setIceCoffee(false)
        setLevant(false)
        setMainDishes(false)
        setOmelets(false)
        setPasta(false)
        setPizza(false)
        setSalads(false)
        setSandwiches(false)
        setShakes(false)
        setSweetBreakfast(false)
    };
    const toggleArtboard = () => {
        setIndex(false)
        setTimeout(() => {
            setArtboard(true)
        }, 50);
        setCocktails(false)
        setBaverge(false)
        setDessert(false)
        setFresh(false)
        setHotSoups(false)
        setIceCoffee(false)
        setLevant(false)
        setMainDishes(false)
        setOmelets(false)
        setPasta(false)
        setPizza(false)
        setSalads(false)
        setSandwiches(false)
        setShakes(false)
        setSweetBreakfast(false)
    };
    const toggleBaverge = () => {
        setIndex(false)
        setTimeout(() => {
            setBaverge(true)
        }, 50);
        setCocktails(false)
        setArtboard(false)
        setDessert(false)
        setFresh(false)
        setHotSoups(false)
        setIceCoffee(false)
        setLevant(false)
        setMainDishes(false)
        setOmelets(false)
        setPasta(false)
        setPizza(false)
        setSalads(false)
        setSandwiches(false)
        setShakes(false)
        setSweetBreakfast(false)
    };
    const toggleDessert = () => {
        setIndex(false)
        setTimeout(() => {
            setDessert(true)
        }, 50);
        setCocktails(false)
        setArtboard(false)
        setBaverge(false)
        setFresh(false)
        setHotSoups(false)
        setIceCoffee(false)
        setLevant(false)
        setMainDishes(false)
        setOmelets(false)
        setPasta(false)
        setPizza(false)
        setSalads(false)
        setSandwiches(false)
        setShakes(false)
        setSweetBreakfast(false)
    };
    const toggleFresh = () => {
        setIndex(false)
        setTimeout(() => {
            setFresh(true)
        }, 50);
        setCocktails(false)
        setArtboard(false)
        setBaverge(false)
        setDessert(false)
        setHotSoups(false)
        setIceCoffee(false)
        setLevant(false)
        setMainDishes(false)
        setOmelets(false)
        setPasta(false)
        setPizza(false)
        setSalads(false)
        setSandwiches(false)
        setShakes(false)
        setSweetBreakfast(false)
    };
    const toggleHotSoups = () => {
        setIndex(false)
        setTimeout(() => {
            setHotSoups(true)
        }, 50);
        setCocktails(false)
        setArtboard(false)
        setBaverge(false)
        setDessert(false)
        setFresh(false)
        setIceCoffee(false)
        setLevant(false)
        setMainDishes(false)
        setOmelets(false)
        setPasta(false)
        setPizza(false)
        setSalads(false)
        setSandwiches(false)
        setShakes(false)
        setSweetBreakfast(false)
    };
    const toggleIceCoffee = () => {
        setIndex(false)
        setTimeout(() => {
            setIceCoffee(true)
        }, 50);
        setCocktails(false)
        setArtboard(false)
        setBaverge(false)
        setDessert(false)
        setFresh(false)
        setHotSoups(false)
        setLevant(false)
        setMainDishes(false)
        setOmelets(false)
        setPasta(false)
        setPizza(false)
        setSalads(false)
        setSandwiches(false)
        setShakes(false)
        setSweetBreakfast(false)
    };
    const toggleLevant = () => {
        setIndex(false)
        setTimeout(() => {
            setLevant(true)
        }, 50);
        setCocktails(false)
        setArtboard(false)
        setBaverge(false)
        setDessert(false)
        setFresh(false)
        setHotSoups(false)
        setIceCoffee(false)
        setMainDishes(false)
        setOmelets(false)
        setPasta(false)
        setPizza(false)
        setSalads(false)
        setSandwiches(false)
        setShakes(false)
        setSweetBreakfast(false)
    };
    const toggleMainDishes = () => {
        setIndex(false)
        setTimeout(() => {
            setMainDishes(true)
        }, 50);
        setCocktails(false)
        setArtboard(false)
        setBaverge(false)
        setDessert(false)
        setFresh(false)
        setHotSoups(false)
        setIceCoffee(false)
        setLevant(false)
        setOmelets(false)
        setPasta(false)
        setPizza(false)
        setSalads(false)
        setSandwiches(false)
        setShakes(false)
        setSweetBreakfast(false)
    };
    const toggleOmelets = () => {
        setIndex(false)
        setTimeout(() => {
            setOmelets(true)
        }, 50);
        setCocktails(false)
        setArtboard(false)
        setBaverge(false)
        setDessert(false)
        setFresh(false)
        setHotSoups(false)
        setIceCoffee(false)
        setLevant(false)
        setMainDishes(false)
        setPasta(false)
        setPizza(false)
        setSalads(false)
        setSandwiches(false)
        setShakes(false)
        setSweetBreakfast(false)
    };
    const togglePasta = () => {
        setIndex(false)
        setTimeout(() => {
            setPasta(true)
        }, 50);
        setCocktails(false)
        setArtboard(false)
        setBaverge(false)
        setDessert(false)
        setFresh(false)
        setHotSoups(false)
        setIceCoffee(false)
        setLevant(false)
        setMainDishes(false)
        setOmelets(false)
        setPizza(false)
        setSalads(false)
        setSandwiches(false)
        setShakes(false)
        setSweetBreakfast(false)
    };
    const togglePizza = () => {
        setIndex(false)
        setTimeout(() => {
            setPizza(true)
        }, 50);
        setCocktails(false)
        setArtboard(false)
        setBaverge(false)
        setDessert(false)
        setFresh(false)
        setHotSoups(false)
        setIceCoffee(false)
        setLevant(false)
        setMainDishes(false)
        setOmelets(false)
        setPasta(false)
        setSalads(false)
        setSandwiches(false)
        setShakes(false)
        setSweetBreakfast(false)
    };
    const toggleSalads = () => {
        setIndex(false)
        setTimeout(() => {
            setSalads(true)
        }, 50);
        setCocktails(false)
        setArtboard(false)
        setBaverge(false)
        setDessert(false)
        setFresh(false)
        setHotSoups(false)
        setIceCoffee(false)
        setLevant(false)
        setMainDishes(false)
        setOmelets(false)
        setPasta(false)
        setPizza(false)
        setSandwiches(false)
        setShakes(false)
        setSweetBreakfast(false)
    };
    const toggleSandwiches = () => {
        setIndex(false)
        setTimeout(() => {
            setSandwiches(true)
        }, 50);
        setCocktails(false)
        setArtboard(false)
        setBaverge(false)
        setDessert(false)
        setFresh(false)
        setHotSoups(false)
        setIceCoffee(false)
        setLevant(false)
        setMainDishes(false)
        setOmelets(false)
        setPasta(false)
        setPizza(false)
        setSalads(false)
        setShakes(false)
        setSweetBreakfast(false)
    };
    const toggleShakes = () => {
        setIndex(false)
        setTimeout(() => {
            setShakes(true)
        }, 50);
        setCocktails(false)
        setArtboard(false)
        setBaverge(false)
        setDessert(false)
        setFresh(false)
        setHotSoups(false)
        setIceCoffee(false)
        setLevant(false)
        setMainDishes(false)
        setOmelets(false)
        setPasta(false)
        setPizza(false)
        setSalads(false)
        setSandwiches(false)
        setSweetBreakfast(false)
    };
    const toggleSweetBreakfast = () => {
        setIndex(false)
        setTimeout(() => {
            setSweetBreakfast(true)
        }, 50);
        setCocktails(false)
        setArtboard(false)
        setBaverge(false)
        setDessert(false)
        setFresh(false)
        setHotSoups(false)
        setIceCoffee(false)
        setLevant(false)
        setMainDishes(false)
        setOmelets(false)
        setPasta(false)
        setPizza(false)
        setSalads(false)
        setSandwiches(false)
        setShakes(false)
    };
    return (
        <AnimationPage>
            <div className='menu-container'>
                <Row className='justify-content-center'>
                    <Col md={6} className="mb-2 w-100">
                        <div className='d-flex justify-content-center menu-btns-bg text-uppercase flex-column align-items-center'>
                            <div className='menu-btns w-75'>
                                <div onClick={toggleSweetBreakfast} style={SweetBreakfast ? { color: 'rgb(222, 164, 6)' } : {}} className="mb-2 menu-btn">
                                    <span className='menu-name'>Sweet Breakfast</span>
                                </div>
                                <div onClick={toggleArtboard} style={Artboard ? { color: 'rgb(222, 164, 6)' } : {}} className="mb-2 menu-btn">
                                    <span className='menu-name'>Chef. S Composition</span>
                                </div>
                                <div onClick={toggleSalads} style={Salads ? { color: 'rgb(222, 164, 6)' } : {}} className="mb-2 menu-btn">
                                    <span className='menu-name'>Salads</span>
                                </div>
                                <div onClick={toggleOmelets} style={Omelets ? { color: 'rgb(222, 164, 6)' } : {}} className="mb-2 menu-btn">
                                    <span className='menu-name'>Good Morning</span>
                                </div>
                                <div onClick={toggleLevant} style={Levant ? { color: 'rgb(222, 164, 6)' } : {}} className="mb-2 menu-btn">
                                    <span className='menu-name'>Levant</span>
                                </div>
                                <div onClick={toggleHotSoups} style={HotSoups ? { color: 'rgb(222, 164, 6)' } : {}} className="mb-2 menu-btn">
                                    <span className='menu-name'>Hot Soups</span>
                                </div>
                                <div onClick={toggleMainDishes} style={MainDishes ? { color: 'rgb(222, 164, 6)' } : {}} className="mb-2 menu-btn">
                                    <span className='menu-name'>Main Dishes</span>
                                </div>
                                <div onClick={toggleSandwiches} style={Sandwiches ? { color: 'rgb(222, 164, 6)' } : {}} className="mb-2 menu-btn">
                                    <span className='menu-name'>Sandwiches</span>
                                </div>
                                <div onClick={togglePasta} style={Pasta ? { color: 'rgb(222, 164, 6)' } : {}} className="mb-2 menu-btn">
                                    <span className='menu-name'>Pasta</span>
                                </div>
                                <div onClick={togglePizza} style={Pizza ? { color: 'rgb(222, 164, 6)' } : {}} className="mb-2 menu-btn">
                                    <span className='menu-name'>Pizza</span>
                                </div>
                            </div>
                            <div className='menu-btns'>
                                <div onClick={toggleCocktails} style={Cocktails ? { color: 'rgb(222, 164, 6)' } : {}} className="mb-2 menu-btn">
                                    <span className='menu-name'>Cocktails</span>
                                </div>
                                <div onClick={toggleBaverge} style={Baverge ? { color: 'rgb(222, 164, 6)' } : {}} className="mb-2 menu-btn">
                                    <span className='menu-name'>Baverges</span>
                                </div>
                                <div onClick={toggleDessert} style={Dessert ? { color: 'rgb(222, 164, 6)' } : {}} className="mb-2 menu-btn">
                                    <span className='menu-name'>Desserts</span>
                                </div>
                                <div onClick={toggleFresh} style={Fresh ? { color: 'rgb(222, 164, 6)' } : {}} className="mb-2 menu-btn">
                                    <span className='menu-name'>Fresh Juices</span>
                                </div>
                                <div onClick={toggleIceCoffee} style={IceCoffee ? { color: 'rgb(222, 164, 6)' } : {}} className="mb-2 menu-btn">
                                    <span className='menu-name'>Ice Coffee</span>
                                </div>
                                <div onClick={toggleShakes} style={Shakes ? { color: 'rgb(222, 164, 6)' } : {}} className="mb-2 menu-btn">
                                    <span className='menu-name'>Shakes</span>
                                </div>
                            </div>
                        </div>
                        <Toast show={index} className='w-100 menu-card'>
                            <Row xs={1} md={2} className="g-4 justify-content-center">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={SecondMenu} alt='Menu Img'/>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={FirstMenu} alt='Menu Img'/>
                                    </Card>
                                </Col>
                            </Row>
                        </Toast>
                        <Toast show={Cocktails} onClose={toggleCocktails} className='d-flex justify-content-center w-100 menu-card' >
                            <Row xs={1} md={2} className="g-4 justify-content-center">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={Cocktail} alt='Cocktail Img'/>
                                    </Card>
                                </Col>
                            </Row>
                        </Toast>
                        <Toast onClose={toggleArtboard} show={Artboard} className='d-flex justify-content-center w-100 menu-card'>
                            <Row xs={1} md={2} className="g-4 justify-content-center">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={FirstArtboard} alt='Artboard Img'/>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={SecondArtboard} alt='Artboard Img'/>
                                    </Card>
                                </Col>
                            </Row>
                        </Toast>
                        <Toast onClose={toggleBaverge} show={Baverge} className='d-flex justify-content-center w-100 menu-card'>
                            <Row xs={1} md={2} className="g-4 justify-content-center">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={FirstBavergesImg} alt='Baverge Img'/>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={SecondBavergesImg} alt='Baverge Img'/>
                                    </Card>
                                </Col>
                            </Row>
                        </Toast>
                        <Toast onClose={toggleDessert} show={Dessert} className='d-flex justify-content-center w-100 menu-card'>
                            <Row xs={1} md={2} className="g-4 justify-content-center">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={SecondDessert} alt='Dessert Img'/>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={FirstDessert} alt='Dessert Img'/>
                                    </Card>
                                </Col>
                            </Row>
                        </Toast>
                        <Toast onClose={toggleFresh} show={Fresh} className='d-flex justify-content-center w-100 menu-card'>
                            <Row xs={1} md={2} className="g-4 justify-content-center">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={FreshJuices} alt='Fresh Img'/>
                                    </Card>
                                </Col>
                            </Row>
                        </Toast>
                        <Toast onClose={toggleHotSoups} show={HotSoups} className='d-flex justify-content-center w-100 menu-card'>
                            <Row xs={1} md={2} className="g-4 justify-content-center">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={FirstHotSoups} alt='Hot Soups Img'/>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={SecondHotSoups} alt='Hot Soups Img'/>
                                    </Card>
                                </Col>
                            </Row>
                        </Toast>
                        <Toast onClose={toggleIceCoffee} show={IceCoffee} className='d-flex justify-content-center w-100 menu-card'>
                            <Row xs={1} md={2} className="g-4 justify-content-center">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={IceCoffeeImg} alt='Ice Coffee Img'/>
                                    </Card>
                                </Col>
                            </Row>
                        </Toast>
                        <Toast onClose={toggleLevant} show={Levant} className='d-flex justify-content-center w-100 menu-card'>
                            <Row xs={1} md={2} className="g-4 justify-content-center">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={LevantImg} alt='Levant Img'/>
                                    </Card>
                                </Col>
                            </Row>
                        </Toast>
                        <Toast onClose={toggleMainDishes} show={MainDishes} className='d-flex justify-content-center w-100 menu-card'>
                            <Row xs={1} md={2} className="g-4 justify-content-center">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={FirstMainDishes} alt='Main Dishes Img'/>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={SecondMainDishes} alt='Main Dishes Img'/>
                                    </Card>
                                </Col>
                            </Row>
                        </Toast>
                        <Toast onClose={toggleOmelets} show={Omelets} className='d-flex justify-content-center w-100 menu-card'>
                            <Row xs={1} md={2} className="g-4 justify-content-center">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={FirstOmelets} alt='Good morning Img'/>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={SecondOmelets} alt='Good morning Img'/>
                                    </Card>
                                </Col>
                            </Row>
                        </Toast>
                        <Toast onClose={togglePasta} show={Pasta} className='d-flex justify-content-center w-100 menu-card'>
                            <Row xs={1} md={2} className="g-4 justify-content-center">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={FirstPasta} alt='Pasta Img'/>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={SecondPasta} alt='Pasta Img'/>
                                    </Card>
                                </Col>
                            </Row>
                        </Toast>
                        <Toast onClose={togglePizza} show={Pizza} className='d-flex justify-content-center w-100 menu-card'>
                            <Row xs={1} md={2} className="g-4 justify-content-center">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={FirstPizza} alt='Pizza Img'/>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={SecondPizza} alt='Pizza Img'/>
                                    </Card>
                                </Col>
                            </Row>
                        </Toast>
                        <Toast onClose={toggleSalads} show={Salads} className='d-flex justify-content-center w-100 menu-card'>
                            <Row xs={1} md={2} className="g-4 justify-content-center">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={FirstSalads}  alt='Salads Img'/>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={SecondSalads}  alt='Salads Img'/>
                                    </Card>
                                </Col>
                            </Row>
                        </Toast>
                        <Toast onClose={toggleSandwiches} show={Sandwiches} className='d-flex justify-content-center w-100 menu-card'>
                            <Row xs={1} md={2} className="g-4 justify-content-center">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={SandwichesImg}  alt='Sandwiches Img'/>
                                    </Card>
                                </Col>
                            </Row>
                        </Toast>
                        <Toast onClose={toggleShakes} show={Shakes} className='d-flex justify-content-center w-100 menu-card'>
                            <Row xs={1} md={2} className="g-4 justify-content-center">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={FirstShakesImg} alt='Shakes Img'/>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={SecondShakesImg} alt='Shakes Img'/>
                                    </Card>
                                </Col>
                            </Row>
                        </Toast>
                        <Toast onClose={toggleSweetBreakfast} show={SweetBreakfast} className='d-flex justify-content-center w-100 menu-card'>
                            <Row xs={1} md={2} className="g-4 justify-content-center">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={SweetBreakfastImg} alt='Sweet Breakfast Img'/>
                                    </Card>
                                </Col>
                            </Row>
                        </Toast>
                    </Col>
                </Row>
            </div>
            <div className='line'></div>
        </AnimationPage>
    );
}

export default Menus;
