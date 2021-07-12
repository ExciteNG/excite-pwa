import React from "react";
import Link from "next/link";
import Slider from "react-slick";

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slide-wrapper">
      <Slider {...settings}>
       <FrameOne />
        <div className="home-slide-boxes slide-bg-2">
          <div className="slide-items">
            <h2>Your one stop place for MSME loans</h2>
            <p className="mt-2 mb-2"></p>
            <div className="cta-wrap pt-4">
              <Link href="/services/login">Start Now</Link>
            </div>
          </div>
        </div>
        <div className="home-slide-boxes slide-bg-3">
          <div className="slide-items">
            <h2>Enjoy Personalized Experience from your comfort zone</h2>
            <p className="mt-2 mb-2">
              We provide seamless platform for Tax payment
            </p>
            <div className="cta-wrap pt-4">
              <Link href="/services/login">Start Now</Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}


const FrameOne =()=>{
return(
  <div className="home-slide-boxes slide-bg-1">
  <div className="slide-items">
    <h2>The easiest way to start &amp; grow your business</h2>
    <p className="mt-2 mb-2">
      Nobody is more commited to connecting you with the exceptional
      services to grow your business than us
    </p>
    <div className="cta-wrap pt-4">
      <Link href="/services/login">Start Now</Link>
    </div>
  </div>
</div>
)
}
const FrameTwo =()=>{
return(
  <div className="home-slide-boxes slide-bg-1">
  <div className="slide-items">
    <h2>The easiest way to start &amp; grow your business</h2>
    <p className="mt-2 mb-2">
      Nobody is more commited to connecting you with the exceptional
      services to grow your business than us
    </p>
    <div className="cta-wrap pt-4">
      <Link href="/services/login">Start Now</Link>
    </div>
  </div>
</div>
)
}
const FrameThree =()=>{
return(
  <div className="home-slide-boxes slide-bg-1">
  <div className="slide-items">
    <h2>The easiest way to start &amp; grow your business</h2>
    <p className="mt-2 mb-2">
      Nobody is more commited to connecting you with the exceptional
      services to grow your business than us
    </p>
    <div className="cta-wrap pt-4">
      <Link href="/services/login">Start Now</Link>
    </div>
  </div>
</div>
)
}
const FrameFour =()=>{
return(
  <div className="home-slide-boxes slide-bg-1">
  <div className="slide-items">
    <h2>The easiest way to start &amp; grow your business</h2>
    <p className="mt-2 mb-2">
      Nobody is more commited to connecting you with the exceptional
      services to grow your business than us
    </p>
    <div className="cta-wrap pt-4">
      <Link href="/services/login">Start Now</Link>
    </div>
  </div>
</div>
)
}
