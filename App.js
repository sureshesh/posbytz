import logo from './logo.svg';
import './App.css';
import Header from './header';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Home from './home';
import Contact from './contact';
import Product from './product';
import About from './about';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Restaurantpos from './Restaurantpos';
function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
            <Container>
                <nav className='navbar' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className='logo'>
                        <Image src="https://posbytz.com/wp-content/uploads/2021/09/logo_default.svg" />
                    </div>
                    <ul>
                        <li>Explore</li>
                        <li>Partners</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                        <li>Company</li>
                        <li>Support</li>
                        <li>Login</li>
                    </ul>
                    <button type="button" className="btn">Get Started</button>
                </nav>

                <div className='ERP-software' py='5'>
                    <h2>Your All-in-one Cloud based<br /> Restaurant & Retail ERP Software</h2>
                    <p1>PosBytz ERP software is the perfect solution for simplifying your business operations<br /> from POS , inventory , Accounting , CRM and HR & Payroll.</p1>
                    <div className='py-2'>
                        <button>Get Started</button>
                    </div>
                </div>
                <div className='py-5'>
                    <Image src='https://posbytz.com/wp-content/uploads/2023/07/rating-main-10-1024x110.png' />
                </div>
                <div>
                    <h3 style={{ padding: 50, fontSize: 50 }}>Features of Our ERP Software?</h3>
                </div>
                <div className='pos-img'>
                    <Image src='https://posbytz.com/wp-content/uploads/2023/07/itl1.png' />
                    <Image src='https://posbytz.com/wp-content/uploads/2023/07/Untitl.png' />
                    <Image src='https://posbytz.com/wp-content/uploads/2023/07/itled-1.png' />
                    <Image src='https://posbytz.com/wp-content/uploads/2023/07/Untitled-.png' />
                    <Image src='https://posbytz.com/wp-content/uploads/2023/07/1.png' />
                    <Image src='https://posbytz.com/wp-content/uploads/2023/07/Un.png' />
                    <Image src='https://posbytz.com/wp-content/uploads/2023/07/Un.png' />
                </div>
                <div className='highlights py-5'>
                    <Row>
                        <Col sm={7}>
                            <h1 style={{ color: '#ff8c00', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '22px', textAlign: 'start' }}>Our POS software offers a wide range of powerful features designed to enhance your retail and restaurant operations.</h1>
                            <h2 style={{ color: '#ff8c00', fontFamily: 'sans-serif', fontSize: '22px', fontWeight: 'bold', textAlign: 'start' }}>Here are some keys highlights:</h2>
                            <ul className='py-2' style={{ textAlign: 'start', fontFamily: 'sans-serif', fontWeight: '600', }}>
                                <li>Easy-to-Use Interface</li>
                                <li>Device Agnotic can be installed in Windows, Android and IOS</li>
                                <li>Works well for both Restaurant and Retail business</li>
                                <li>Multiple channel Sales management</li>
                                <li>Integrations with printers, scanner ,weighing scales and label printers</li>
                            </ul>
                        </Col>
                        <Col sm={5}>
                            <Image src='https://posbytz.com/wp-content/uploads/2023/07/Untitled-87.png' style={{ maxWidth: 500 }}></Image>
                        </Col>
                    </Row>
                </div>
                <div className='Checkout py-5'>
                    <h1>How it Works?</h1>
                    <h2>Checkout how you can Automate your Business with PosBytz ERP software</h2>
                    <p> Discover how our retail and restaurant ERP software can revolutionize your business operations today!</p>
                    <iframe
                        title="Embedded Content"
                        src="https://youtu.be/xxQzhDkWPpc?t=1"
                        width="800"
                        height="400"
                    ></iframe>
                </div>
                <div className='py-5'>
                    <h1 style={{ fontWeight: 'bolder', fontSize: 50, color:'#000000' }}>Reasons to Choose PosBytz software</h1>
                    <h2>One of Best Cloud ERP Software for<br></br>
                        Small & Medium businesses</h2>
                </div>
                <div>
                    <h1 style={{ color: '#ff8c00', fontSize: 'xxxx-large', fontWeight: 'bolder' }}>PosBytz ERP</h1>
                </div>

                <Row>
                    <Col sm={4}>
                        <div className='card' style={{ borderColor: '#FF8C00',borderStyle:'solid', borderTopLeftRadius: '80px', borderBottomRightRadius: '80px',borderWidth:'4px 4px 4px 4px'}}>
                            <Image src='https://posbytz.com/wp-content/uploads/2023/07/Untitled-2.png' style={{ maxHeight: 90, maxWidth: 70,marginLeft:'120px' }} />
                            <h1>POS</h1>
                            <h2>Simplifying billing, Empowering Businesses</h2>
                            <p>Enhance your business efficiency with our cutting-edge Point of Sale (POS) solutions. Simplify transactions, streamline inventory management, and optimize customer experiences with our robust platform. Our POS system empowers your business for growth and success</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className='card' style={{ borderColor: '#A90030', borderStyle: 'solid', borderTopLeftRadius: '80px', borderBottomRightRadius: '80px',borderWidth:'4px 4px 4px 4px' }}>
                            <Image src='https://posbytz.com/wp-content/uploads/2023/07/Untitled-1.png' style={{ maxHeight: 100, maxWidth: 70,marginLeft:'120px' }} />
                            <h1>Ecommerce &<br></br> Online ordering</h1>
                            <h2>Omnichannel solution, Unified commerce</h2>
                            <p>Experience the future of retail with our comprehensive Omnichannel Ecommerce solution.Seamlessly integrate your online and offline sales channels, creating a unified commerce experience for your customers.</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className='card' style={{ borderColor: '#24007E', border: 'solid', borderTopLeftRadius: '80px', borderBottomRightRadius: '80px',borderWidth:'4px 4px 4px 4px' }}>
                            <Image src='https://posbytz.com/wp-content/uploads/2023/07/Untitled-123.png' style={{ maxHeight: 100, maxWidth: 70,marginLeft:'120px' }} />
                            <h1 style={{color:'#24007E'}}>Inventory Management</h1>
                            <h2>Efficient Inventory Control, Amplified Success</h2>
                            <p>Efficiently manage  your inventory with our advanced Inventory Management system. Gain real-time visibility into stock levels, track product movement, and automate reordering processes for optimal efficiency. Streamline operations, reduce costs, and ensure inventory accuracy with our powerful solution.</p>
                        </div>
                    </Col>
                </Row>
                <Row className='py-5'>
                    <Col>
                        <div className='card' style={{ Color: '#ff8c00', border: 'solid', borderTopLeftRadius: '80px', borderBottomRightRadius: '80px' }}>
                            <Image src='https://posbytz.com/wp-content/uploads/2023/07/Untitled-18.png' style={{ maxHeight: 100, maxWidth: 70,marginLeft:'120px' }} />
                            <h1>Accounting & Finance</h1>
                            <h2>Simplified Accounting and Finances</h2>
                            <p>From accurate bookkeeping to robust financial reporting, our platform provides the tools and insights you need to make informed business decisions. Simplify tax compliance, streamline financial processes and ERP Financial reports</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='card' style={{ Color: '#ff8c00', border: 'solid', borderTopLeftRadius: '80px', borderBottomRightRadius: '80px' }}>
                            <Image src='https://posbytz.com/wp-content/uploads/2023/07/Untitled-19.png' style={{ maxHeight: 100, maxWidth: 70,marginLeft:'120px' }} />
                            <h1>CRM</h1>
                            <h2>Nurturing Relationships, Maximizing Growth</h2>
                            <p>Unlock the power of customer relationships with our industry-leading CRM solution. Seamlessly manage and nurture your customer interactions by sending personalised discounts and build your loyal customer base.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='card' style={{ Color: '#ff8c00', border: 'solid', borderTopLeftRadius: '80px', borderBottomRightRadius: '80px' }}>
                            <Image src='https://posbytz.com/wp-content/uploads/2023/07/Untitled-11.png' style={{ maxHeight: 100, maxWidth: 70,marginLeft:'120px' }} />
                            <h1>HR & Payroll</h1>
                            <h2>Streamlined HR & Payroll, Empowering People</h2>
                            <p>Elevate your HR and Payroll processes with our integrated solution. Simplify employee management, automate payroll calculations, and ensure compliance with ease. Streamline onboarding, time tracking, benefits administration, and more, all within a single, user-friendly ERP platform</p>
                        </div>
                    </Col>
                </Row>

                <div className='container-fluid bg-warning'>
                    <h1>Integrations</h1>
                    <p>Connect third-party apps to PosBytz to keep your business running smoothly</p>
                    <div className='integration'>
                        <Image src='https://posbytz.com/wp-content/uploads/2021/09/deliveroo.png' />
                        <Image src='https://posbytz.com/wp-content/uploads/2021/09/sunmi.png' />
                        <Image src='https://posbytz.com/wp-content/uploads/2021/09/dunzo.png' />
                        <Image src='https://posbytz.com/wp-content/uploads/2021/09/careem.png' />
                        <Image src='https://posbytz.com/wp-content/uploads/2021/09/zomato.png' />
                        <Image src='https://posbytz.com/wp-content/uploads/2021/09/tidypay.png' />
                        <Image src='https://posbytz.com/wp-content/uploads/2021/09/swiggy.png' />
                        <Image src='https://posbytz.com/wp-content/uploads/2021/09/tally.png' />
                        <Image src='https://posbytz.com/wp-content/uploads/2021/09/cashfree.png' />
                        <Image src='https://posbytz.com/wp-content/uploads/2021/09/talabat.png' />
                        <Image src='https://posbytz.com/wp-content/uploads/2021/09/stripe.png' />
                    </div>
                </div>
                <div className='Trust py-5'>
                    <Row>
                        <Col sm={6}>
                            <h2>Trusted by </h2>
                            <h1>great brands</h1>
                            <p>Over 5000+ businesses in 15 countries have registered with PosBytz.</p>
                            <Button>Get started for free</Button>
                        </Col>
                         <Col sm={6}  style={{backgroundColor:'blue'}}>
                            {/* <Carousel>
                                <Carousel.Item>
                                <CarouselImage Image="First slide" />
                                    <Carousel.Caption>
                                        <Image src='Capture.PNG' style={{ height: 220, width: 20 ,backgroundColor:'yellow'}} />
                                        <Image src='https://posbytz.com/wp-content/uploads/2023/09/HOT-POT.png' style={{ height: 220, width: 20 }} />
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                <CarouselImage image="Second slide" />
                                    <Carousel.Caption>
                                        <Image src='https://posbytz.com/wp-content/uploads/2023/09/King-Fish.png' />
                                        <Image src='https://posbytz.com/wp-content/uploads/2023/09/Sams-Pizza.png' />
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                <CarouselImage image="Third slide" />
                                    <Carousel.Caption>
                                        <Image src='https://posbytz.com/wp-content/uploads/2023/09/Teklos.png' />
                                        <Image src='https://posbytz.com/wp-content/uploads/2023/09/Tulu-Florals.png' />
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>  */}
                        </Col>
                    </Row>
                </div>
                <div>
                    <h1>Customer Testimonials</h1>
                </div>
                <div className='py-3'>
                    <Row>
                        <Col sm={6}>
                            <div className='card' style={{ boxShadow: '0px 10px 10px 0px' }}>
                                <div className='d-flex'>
                                    <div className='image1'>
                                       <Image src='https://posbytz.com/wp-content/uploads/2023/09/maaza-83x88.png' style={{ height: 70, width: 70 }} />
                                    </div>
                                    <div className='text'>
                                <h1 style={{paddingLeft:'10px'}}>MazaArabia,KSB</h1>
                                </div>
                                </div>
                                <p>This ERP platform is simple and excellent. It is has the omnichannel model to sell this product. I have been using this model over more than 1 year. It is very good to manage the catalogue, items, pricing, taxing, customers, employees etc.</p>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className='card' style={{ boxShadow: '0 10px 10px 0' }}>
                                <div className='d-flex'>
                                    <div className='image'>
                                        <Image src='https://posbytz.com/wp-content/uploads/2021/09/tehran_taste_persia-83x88.png' style={{ height: 70, width: 70 }} />
                                    </div>
                                    <div className='text'>
                                        <h1 style={{ fontSize: 'large' }}>Tehran- the Taste of persia</h1>
                                        <h2 style={{ fontSize: 'large' }}>Restaurant Buisness</h2>
                                    </div>
                                    <div className='images'>
                                        <Image src='rating stars.png' />
                                    </div>
                                </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus rem voluptates cumque eum hic itaque nihil, nisi enim fuga incidunt amet laudantium magnam dolore odio excepturi veritatis fugit fugiat accusantium.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className='py-5' style={{ backgroundColor: '#F0F0F2' }}>
                <Row>
                    <Col sm={7}>
                        <div className='text' style={{ paddingTop: '80px' }}>
                            <h1>Run your buisness with Posbytz</h1>
                            <Button style={{ backgroundColor: '#ff8c00', borderRadius: '50' }}>sign up for free</Button>
                        </div>
                    </Col>
                    <Col sm={5}>
                        <Image src='https://posbytz.com/wp-content/uploads/2023/07/Untitled-13.png' style={{ height: '300px', width: '300px' }} />
                    </Col>
                </Row>
            </div>
            <Container>
                <div>
                    <h1> Frequently Asked Questions(FAQ)</h1>
                </div>
                <Accordion>
                    <div className='questions'>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is Retail ERP Software ?</Accordion.Header>
                            <Accordion.Body style={{ justifyContent: 'start' }}>
                                Retail ERP software is a comprehensive solution designed to meet the specific needs of retail businesses. It integrates various functions and processes, such as inventory management, point of sale (POS), sales and order management, customer relationship management (CRM), and Accounting, into a single software system
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What is Restaurant ERP software?</Accordion.Header>
                            <Accordion.Body style={{ justifyContent: 'left' }}>
                                Restaurant ERP software offers managing a multiple chain restaurant business at one place from managing procurement, vendors, payments, POS, Sales , Online ordering , QR code ordering, CRM for promotions, recipe & ingredients management and Accounting.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Why do Retailers need ERP software?</Accordion.Header>
                            <Accordion.Body>
                                Retailers need ERP software for several reasons:
                                Streamlined Operations: ERP software integrates various business functions, such as inventory management, sales, POS, customer management, and financials, into a centralized system. This streamlines operations, reduces manual tasks, and improves overall efficiency.<br />
                                Inventory Management: Effective inventory management is crucial for retailers to avoid stockouts or overstocking. ERP software provides real-time visibility into inventory levels, automates replenishment processes, tracks stock movement, and optimizes inventory to ensure accurate stock levels and reduce carrying costs.<br />
                                Sales and Order Management: ERP software facilitates efficient management of sales and customer orders. It enables retailers to process orders seamlessly, track order fulfilment, manage pricing and discounts, and handle returns or exchanges, ensuring smooth and timely order processing.<br />
                                Customer Relationship Management (CRM): CRM functionality within ERP software helps retailers manage customer data, track interactions, and personalise customer experiences.<br />
                                Financial Management: ERP software includes financial modules that handle tasks like accounting, invoicing, budgeting, and financial reporting
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What is cloud-based ERP software?</Accordion.Header>
                            <Accordion.Body>
                                Cloud-based ERP software is a type of ERP system that is hosted and accessed over a cloud infrastructure. In this model, the software would be managed and maintained by an ERP provider with a Pay as you Use model on a Subscription.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Benefits of using Retail ERP System</Accordion.Header>
                            <Accordion.Body>
                                Using a Retail ERP system offers several benefits for retailers having one system to manage both outlet and online business along with managing all your operations from customer management, sales, Loyalty and accounting under one roof.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Why is PosBytz the best ERP software for Restaurant, and Retail?</Accordion.Header>
                            <Accordion.Body>
                                PosBytz offers a complete suite for Retail and Restaurant businesses to automate their business operations with tools to also increase their business online and offline. PosBytz offers POS , inventory management, Sales Management, CRM , Accounting and HR & Payroll management.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>How to download Free Retail ERP Software from PosBytz?</Accordion.Header>
                            <Accordion.Body>
                                You can start using PosBytz for Free with our Free plan sign-up now
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                </Accordion>
            </Container>
            <div className='py-5' style={{ backgroundColor: '#ff8c00', color: 'white' }}>
                <h1>Ready to Automate your business operations?</h1>
                <h1>Try our powerful ERP software today and</h1>
                <h1>experience the growth!</h1>
                <button style={{ backgroundColor: 'white', color: '#ff8c00', fontWeight: 'bold', padding: '10px', borderRadius: 50, paddingInline: '30px' }}>Get Started Now</button>
            </div>
            <div className='footer py-5' style={{justifyContent:'center'}}>
                <Container>
                <Row>
                    <Col sm={3}>
                        <div className='d-flex' style={{}}>
                            <div>
                                <Image src='data:image/png;base64,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' style={{height:'50px',width:'50px'}}/>
                            </div>
                            <div>
                                <h1 style={{fontSize:'25px'}}>PosBytz</h1>
                                <h2 style={{fontSize:'12px'}}>sell anywhere</h2>
                            </div>
                        </div>
                        <div>
                            <p style={{paddingTop:'10px', textAlign:'start'}}>PosBytz is your comprehensive platform to manage everything you need to sell and grow your business.</p>
                            <p>PosBytz is a product of Bytize, Inc.</p>
                        </div>
                    </Col>
                    <Col sm={9}>
                        <Row>
                            <Col sm={4}>
                                <h1 style={{fontSize:'20px', textAlign:'start', paddingLeft:'20px'}}>PRODUCT</h1>
                                <ul className='noBullet'>
                                    <li>Pricing</li>
                                    <li>Watch videos</li>
                                    <li>Best POS software</li>
                                    <li>PosBytz for Restaurant</li>
                                    <li>Posbytz for Retail</li>
                                    <li>Cloud POS</li>
                                    <li>Android POS</li>
                                    <li>PosBytz for small busness</li>
                                </ul>
                            </Col>
                            <Col sm={4}>
                                <h1 style={{fontSize:'20px', textAlign:'start', paddingLeft:'20px'}}>COMPANY</h1>
                                <ul className='noBullet'>
                                    <li>About us</li>
                                    <li>Contact us</li>
                                    <li>PosBytz Blog</li>
                                    <li>Terms and conditions</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </Col>
                            <Col sm={4}>
                                <h1 style={{fontSize:'20px', textAlign:'start', paddingLeft:'20px'}}>SUPPORT</h1>
                                <ul className='noBullet'>
                                    <li>Help Center</li>
                                    <li>Status Monitor</li>
                                    <li>Contact Support</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <h1 style={{fontSize:'20px', textAlign:'start', paddingLeft:'20px'}}>PARTNERS</h1>
                                <ul className='noBullet'>
                                    <li>Partners program</li>
                                    <li>Become a partners program</li>
                                    <li>Partners portal</li>
                                </ul>
                            </Col>
                            <Col sm={4}>
                                <h1 style={{fontSize:'20px', textAlign:'start', paddingLeft:'20px'}}>ACCOUNT</h1>
                                <ul className='noBullet'>
                                    <li>Login to posbytz</li>
                                    <li>Register with posbytz</li>
                                </ul>
                            </Col>
                            <Col sm={4}>
                                <h1 style={{fontSize:'20px', paddingLeft:'5px'}}>FIND US ON</h1>
                                <Image src='https://www.facebook.com/posbytz/'></Image>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </Container>
                
            </div>

        </div>
    )
}



export default App;
