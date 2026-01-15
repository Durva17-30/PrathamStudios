import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./Reviews.css";
import next_icon from "../../assets/next.png";
import back_icon from "../../assets/back.png";
import client1 from "../../assets/client_1.jpg";
import client2 from "../../assets/client_2.jpg";
import client3 from "../../assets/client_3.jpg";

const Reviews = () => {
  const useIsMobile = (width = 768) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia(`(max-width: ${width}px)`);
      setIsMobile(mediaQuery.matches);

      const handler = (e) => setIsMobile(e.matches);
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }, [width]);

    return isMobile;
  };

  const sliderData = [
    {
      icon: client1,
      name: "Saish Naik",
      location: "Usgao Tisk, Goa",
      review:
        "Pratham Studios captured our wedding so beautifully that every photo feels alive. From the smallest rituals to the big emotional moments, everything was documented with so much elegance and care. Wedding album feels like reliving the day!",
    },
    {
      icon: client2,
      name: "Durva Valvaikar",
      location: "Bandora, Ponda",
      review:
        "My 21st birthday was made even more special thanks to Pratham Studios. The pictures perfectly captured the fun, emotions, and energy of the celebration. Every shot feels candid and personal — exactly how I wanted to remember this milestone.",
    },
    {
      icon: client3,
      name: "Saiesh Teli",
      location: "Usgao Tisk, Goa",
      review:
        "Pratham Studios did an outstanding job covering our business event. The photos and videos were professional, well-timed, and truly reflected the spirit of the event. Their work helped us preserve great memories while also giving us strong visuals for our brand.",
    },
  ];

  return (
    <div className="reviews">
      {/* <div className="nav-btn next-btn" onClick={slideForward}>
        <img src={next_icon} alt="" />
      </div>
      <div className="nav-btn back-btn" onClick={slideBacward}>
        <img src={back_icon} alt="" />
      </div> */}
      <Slider
        dots={false}
        infinite={true}
        slidesToShow={useIsMobile() ? 1 : 2}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}>
        {sliderData.map((item) => {
          return (
            <div className="slide">
              <div className="client-info">
                <img src={item.icon} alt="" />
                <div>
                  <h3>{item.name}</h3>
                  <span>{item.location}</span>
                </div>
              </div>
              <p>{item.review}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Reviews;
