import React from "react";
import "./index.css";
import Carousel from 'react-bootstrap/Carousel';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import {Helmet} from "react-helmet";

const index = () => {
  return (
    
    <div >
      <Helmet>
                <title>Home</title>
            </Helmet>
  <section id="carousel">
  <div className="button1">
        <p>Women Collection 2018</p>
    <h2>NEW ARRIVALS</h2>
    <button>SHOP NOW</button>
  </div>

    </section>





    <section id="carousel2">
            <div className="carousel3">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"><GrFormPrevious /></span>
                    </a>  
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img style={{height: "360px", width: "270px"}} src="https://preview.colorlib.com/theme/fashe/images/item-02.jpg" className="d-block w-100" alt="..." />
                            <p>Herschel supply co 25l</p>
                            <p>$75.00</p>
                            <button>Add To Wishlist</button>
                            <button>Detail</button>
                        </div>
                        <div className="carousel-item">
                            <img style={{height: "360px", width: "270px"}} src="https://preview.colorlib.com/theme/fashe/images/item-03.jpg" className="d-block w-100" alt="..." />
                            <p>Denim Jacket Blue</p>
                            <p>$92.50</p>
                            <button>Add To Wishlist</button>
                            <button>Detail</button>
                        </div>
                        <div className="carousel-item">
                            <img style={{height: "360px", width: "270px"}} src="https://preview.colorlib.com/theme/fashe/images/item-05.jpg" className="d-block w-100" alt="..." />
                            <p>coach slim easton black</p>
                            <p>$165.90</p>
                            <button>Add To Wishlist</button>
                            <button>Detail</button>
                        </div>
                        <div className="carousel-item">
                            <img style={{height: "360px", width: "270px"}} src="https://preview.colorlib.com/theme/fashe/images/item-07.jpg" className="d-block w-100" alt="..." />
                            <p>Frayed Denim Shorts</p>    
                            <p><del>$29.50</del> 15.90</p>
                            <button>Add To Wishlist</button>
                            <button>Detail</button>
                        </div>
                    </div>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"><MdNavigateNext /></span>
                    </a>
                </div>
            </div>
        </section>


    <section className="container1">
        <div className="container2">
            <h4>The Beauty LOOKBOOK</h4>
            <p>VIEW COLLECTION</p>
        </div>
        <div className="container3">
            <p>Gafas sol Hawkers one</p>
            <div className="num">  <del>$29.50</del> $15.90</div>
          
        </div>
    </section>
      <section id="card">
        <h3>Our Blog</h3>
        <div className="imgler">
          <div className="img2">
            <img
              style={{}}
              src="https://preview.colorlib.com/theme/fashe/images/blog-01.jpg"
              alt=""
            />
            <h3>Black Friday Guide: Best Sales & Discount Codes</h3>
            <p>By Nancy Ward on July 22, 2017</p>
            <p>
              Duis ut velit gravida nibh bibendum commodo. Sus-pendisse
              pellentesque mattis augue id euismod. Inter-dum et malesuada fames
            </p>
          </div>
          <div className="img3">
            <img
              src="https://preview.colorlib.com/theme/fashe/images/blog-02.jpg"
              alt=""
            />
            <h3>The White Sneakers Nearly Every Fashion Girls Own</h3>
            <p>By Nancy Ward on July 18, 2017</p>
            <p>
              Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis
              leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac
              fringilla lacus. Ut sit ame
            </p>
          </div>
          <div className="img4">
            <img
              src="https://preview.colorlib.com/theme/fashe/images/blog-03.jpg"
              alt=""
            />
            <h3>New York SS 2018 Street Style: Annina Mislin</h3>
            <p>By Nancy Ward on July 2, 2017</p>
            <p>
              Proin nec vehicula lorem, a efficitur ex. Nam vehicula nulla vel
              erat tincidunt, sed hendrerit ligula porttitor. Fusce sit amet
              maximus nunc
            </p>
          </div>
        </div>
      </section>
      <section id="last">
        <h3>@ FOLLOW US ON INSTAGRAM</h3>
        <div className="img1">
          <div className="img">
            <img
              src="https://preview.colorlib.com/theme/fashe/images/gallery-03.jpg"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://preview.colorlib.com/theme/fashe/images/gallery-07.jpg"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://preview.colorlib.com/theme/fashe/images/gallery-09.jpg"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://preview.colorlib.com/theme/fashe/images/gallery-13.jpg"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://preview.colorlib.com/theme/fashe/images/gallery-15.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
