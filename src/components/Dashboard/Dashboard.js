import React, {Component} from 'react';
import NavLinks from '../NavLinks/Navlinks';
import imgMen from '../../images/men.png';
import imgWomen from '../../images/women.png';
import imgProducts from '../../images/products.png';
import aboutPhoto from '../../images/aboutPhoto.jpg';
import CalendarModal from '../CalendarModal/CalendarModal';
import BookModal from '../Book/BookModal';
import ConfirmationModal from '../Book/ConfirmationModal';
import './Dashboard.scss'


class Dashboard extends Component {

    state = {
        calendarOpen: false,
        isBookOpen: false,
        confirmationOpen: false
      }

    componentDidMount(){
        this.initMap();
    }

    initMap = () => {
        let map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 32.089179, lng: 34.877495},
          zoom: 14
        });
        let marker = new window.google.maps.Marker({
            position: {lat: 32.089179, lng: 34.877495},
            map: map,
            title: 'Barber Shop!'
          });

          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
            let contentString = '<div>'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Barber Shop</h1>'+
            '<a href="http://localhost:3000">Visit website</a>'+
            '</div>'+
            '</div>';

        let infowindow = new window.google.maps.InfoWindow({
            content: contentString
        });
      }

      calendarOpen = () =>{
          let calendarOpen = this.state.calendarOpen;
          this.setState({
              calendarOpen: !calendarOpen
          });
      }

      calendarClose = () =>{
        this.setState({
            calendarOpen: false
        });
      }

      bookOpen = () =>{
          let bookOpen = this.state.bookOpen;
          this.setState({
              bookOpen: !bookOpen,
          });
      }

      bookClose = () =>{
        this.setState({
            bookOpen: false,
        });
    }

    confirmationOpen = () =>{
        let confirmationOpen = this.state.confirmationOpen;
        this.setState({
            confirmationOpen: !confirmationOpen,
        });
    }

    render() {
        console.log(this.state.confirmationOpen)
        return(
            <div className="container">
                    <NavLinks/>
                    <section id="home">
                        <CalendarModal 
                        calendarOpen={this.state.calendarOpen}
                        calendarClose={this.calendarClose}
                        bookOpen={this.bookOpen}
                        />
                        <BookModal
                        isBookOpen={this.state.bookOpen}
                        calendarClose={this.calendarClose}
                        bookClose={this.bookClose}
                        calendarOpen={this.calendarOpen}
                        confirmationOpen={this.confirmationOpen}
                        />
                        <ConfirmationModal
                        confirmationOpen={this.state.confirmationOpen}
                        />
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
                                    <button onClick={this.calendarOpen}>
                                            <span>BOOK NOW</span> 
                                            <span><i className="far fa-calendar-alt"></i></span>
                                        </button>
                                    <a id="scroll" href="#services"><i className="fas fa-chevron-down"></i></a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="services">
                        <div className="fade">
                            <div className="container">
                                <h1>All Services Under One Roof </h1>
                                <div className="servicesBlocks">
                                    <h2>We Specialize In Men and Women Hair Styling and Beauty Products</h2>
                                    <ul>
                                        <li>
                                            <div className="flip-card">
                                                <div className="flip-card-inner">
                                                        <div className="flip-card-front">
                                                            <h3>Gentelmens</h3>
                                                            <div className="imgContainer">
                                                                <img src={imgMen}/>
                                                            </div>
                                                        </div>
                                                        <div id="menBack" className="flip-card-back"> 
                                                            <div className="card-back-fade">
                                                                <div className="content">
                                                                <div className="text">
                                                                    <p>Whether you're a Viking or Hipster, Average Guy or Extremely Different</p> 
                                                                    <p>Your Place Is With Us!</p>
                                                                </div>
                                                                <div className="button">
                                                                    <a><button>Men Hair Style Gallery</button></a>
                                                                </div> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flip-card">
                                                    <div className="flip-card-inner">
                                                            <div className="flip-card-front">
                                                                <h3>Ladies</h3>
                                                                <div className="imgContainer">
                                                                    <img src={imgWomen}/>
                                                                </div>
                                                            </div>
                                                            <div id="womenBack" className="flip-card-back">
                                                                <div className="card-back-fade">
                                                                    <div className="content">
                                                                        <div className="text">
                                                                            <p>Whether you're a Short or Long Hair Type, Special Ocation or Every-Day Style</p> 
                                                                            <p>Your Place Is With Us!</p>
                                                                        </div>
                                                                        <div className="button">
                                                                            <a><button>Women Hair Style Gallery</button></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    </div>
                                                </div>
                                        </li>
                                        <li>
                                            <div className="flip-card">
                                                    <div className="flip-card-inner">
                                                            <div className="flip-card-front">
                                                                <h3>Beauty Products</h3>
                                                                <div className="imgContainer">
                                                                    <img id="product" src={imgProducts}/>
                                                                </div>
                                                            </div>
                                                            <div id="productsBack" className="flip-card-back">
                                                                <div className="card-back-fade">
                                                                    <div className="content">
                                                                        <div className="text">
                                                                            <p>Be Unique and Try Our Products Which Made From Top Quality Materials</p>
                                                                        </div>
                                                                        <div className="button">
                                                                            <a><button>Products Gallery</button></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    </div>
                                                </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="about">
                        <div className="fade">
                            <div className="container">
                                <div className="img-container">
                                    <div className="img">
                                        <img src={aboutPhoto}/>
                                    </div>
                                    <div className="imgText">
                                        <h1>How The Story Begins</h1>
                                        <p>The story begins in 1999.
                                            A young boy who wanted to get his hair cut every two weeks and his parents could not afford it.
                                            The same boy asked for his birthday a trimmer.
                                            From that day on he began to cut his own hair. Slowly friends came to get a haircut. And after that customers began to hear about this boy.
                                            The boy grew up and set up his first barber shop. 
                                        </p>
                                    </div>
                                </div>
                                <div className="details">
                                    <div id="map"></div>
                                    <div className="reviews">
                                        <h1>Our Customers</h1>
                                        <p>our customers says all kind of things about us.</p>
                                        <button>See Customers Reviews</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        )
    }
}

export default Dashboard