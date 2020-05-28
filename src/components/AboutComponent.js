import React from 'react';
import { Card, CardBody, CardHeader, Media } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Stagger, Fade } from 'react-animation-components';

function About(props) {
    const leaders = props.leaders.leaders.map((leader) => {
        return (
            <Fade in>
                <RenderLeader leader={leader} />
            </Fade>
        );
    });

    return(
        <div className="container">
            <div className="row">
                {/*
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                */}
                <div className="col-12">
                    <h3>ABOUT US</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our Mission</h2>
                    <p>Since grocery shopping is a necessity, it is critical that stores minimize risk of COVID-19 exposure by implementing safety procedures that protect their customers. Shop Safe Marin was created to provide local residents with detailed information on safety measures in place at grocery stores throughout the county. The review based website allows shoppers to connect and share their shopping experiences in order to maintain an up to date safety rating for each store.</p>
                    <p>Please share your shopping experience with us today to enable others to make informed decisions about where we shop. Together, we can create a safe shopping community.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody className="cardbg">
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">14 May 2020</dd>
                                <dt className="col-6">Number Of Stores</dt>
                                <dd className="col-6">57</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">3</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                {/*
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
                */}
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Meet the Team</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        <Stagger in>
                            {leaders}
                        </Stagger>
                    </Media>
                </div>
            </div>
        </div>
    );
}

function RenderLeader(leader) {
    console.log(leader);
    return(
        <div key={leader.leader.id} className="col-12 mt-5">
            <Media tag="li">
                <Media left middle>
                    <Media object src={baseUrl + leader.leader.image} alt={leader.leader.name} />
                </Media>
                <Media body className="ml-5">
                    <Media heading>{leader.leader.name}</Media>
                    <p>{leader.leader.designation}</p>
                    <p>{leader.leader.description}</p>
                </Media>
            </Media>    
        </div>
    );
}

export default About;