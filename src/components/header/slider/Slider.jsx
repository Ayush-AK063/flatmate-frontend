import React from "react";;

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
  return (
    <div className="bg-white p-0">
      {/* First div starts */}
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 mb-4">
            Find A <span className="text-primary">Perfect Home</span> To Live
            With Your Family
          </h1>
          <h4>
            <p className="mb-4 pb-2">
              Price is what you pay <br />
              Value is what you get.
            </p>
          </h4>
        </div>
        {/* Second div starts */}
        <div className="col-md-6 ">
        <Carousel emulateTouch infiniteLoop showThumbs={false} showStatus={false} autoPlay>
                <div>
                    <img src="img/carousel-1.jpg" />
                </div>
                <div>
                    <img src="img/carousel-2.jpg" />
                </div>
                <div>
                    <img src="img/carousel-1.jpg" />
                </div>
        </Carousel>
        
        </div>
      </div>
    </div>
  );
};

export default Slider;
