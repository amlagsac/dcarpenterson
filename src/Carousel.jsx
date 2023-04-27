import React from 'react';
import carouselCSS from './styles/Carousel.css';
import carouselPic1 from './resources/carousel1.png';

function Carousel() {
    return (
        <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active carouselButton" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="carouselButton" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="carouselButton" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                    <img src={carouselPic1} className="carousel-img d-block w-100" alt="Overview" ></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                    <img src={carouselPic1} className="carousel-img d-block w-100" alt="Overview"></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                    <img src={carouselPic1} className="carousel-img d-block w-100" alt="Overview"></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;