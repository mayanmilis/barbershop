import React, {Component} from 'react';
import NavLinks from '../NavLinks/Navlinks';
import imgMen from '../../images/men.png';
import './Dashboard.scss'


class Dashboard extends Component {

    render() {
        return(
            <div className="container">
                    <NavLinks/>
                    <section id="home">
                        <div className="fade">
                            <div className="container">
                                <div className="header">
                                    <h1>YES.</h1>
                                    <h3> I DID SOMETHING NEW WITH MY HAIR.</h3>
                                </div>
                                <div className="text">
                                    <p>It's nice to be noticable, isn't it?</p>
                                    <p>With our treatment we will make sure</p>
                                    <p>You'll get these kind of questions anywhere you go!</p>
                                </div>
                                <div className="homeButtons">
                                    <button>
                                            <span>BOOK NOW</span> 
                                            <span><i class="far fa-calendar-alt"></i></span>
                                        </button>
                                    <a href="#services"><button>OUR SERVICES</button></a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="services">
                        <div className="fade">
                            <div className="container">
                                <h1>All Services Under One Roof </h1>
                                <div className="servicesBlocks">
                                    <ul>
                                        <li>
                                            <div>
                                                <h3>Gentelmens</h3>
                                                <div className="img">
                                                     <img src={imgMen}/>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h3>Ladies</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <h3>Beauty Products</h3>
                                        </li>
                                    </ul>
                                </div>
                                <p>Something about SERVICES</p>
                            </div>
                        </div>
                    </section>
                    <section id="about">
                        <div className="fade">
                            <h1>ABOUT</h1>
                            <p>Something about ABOUT</p>
                        </div>
                    </section>
            </div>
        )
    }
}

export default Dashboard