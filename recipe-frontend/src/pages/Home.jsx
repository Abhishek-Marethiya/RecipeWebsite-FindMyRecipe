import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Footer from "../components/Footer";
const images = [
  "/images/home-1.jpg",
  "/images/home-2.jpg",
  "/images/home-3.jpg",
  "/images/home-4.jpg",
  "/images/home-5.jpg",
  "/images/home-6.jpg",
  "/images/home-7.jpg",
  "/images/home-8.jpg",
  "/images/home-9.jpg",
  "/images/home-10.jpg",
];

const homeImages = [
  { src: "/images/home-Img-1.jpg", title: "Quick and Easy" },
  { src: "/images/home-Img-2.jpg", title: "Dinner" },
  { src: "/images/home-Img-3.jpg", title: "Breakfast" },
  { src: "/images/home-Img-4.jpg", title: "Desserts" },
  { src: "/images/home-Img-5.jpg", title: "Vegan" },
  { src: "/images/home-Img-6.jpg", title: "Healthy" },
  { src: "/images/home-Img-7.jpg", title: "Salad" },
  { src: "/images/home-Img-8.jpg", title: "Instant Pot" },
];

function Home() {
  const naviagate = useNavigate();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="home-page">
      <p>
        Simple recipes made for
        <span> real,</span>
        <span> actual,</span>
        <span> everyday life.</span>
      </p>

      <div className="home-page-images">
        <div className="carousel">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`slide ${index === current ? "active" : ""}`}
            />
          ))}

          {/* Arrows */}
          <button className="arrow prev" onClick={prevSlide}>
            <FaArrowLeft />
          </button>
          <button className="arrow next" onClick={nextSlide}>
            <FaArrowRight />
          </button>

          {/* Dots */}
          <div className="dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === current ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className="home-images">
  <div className="home-images-wrapper">
    {homeImages.concat(homeImages).map((img, indx) => (
      <div className="home-image" key={indx}>
        <img src={img.src} />
        <p>{img.title}</p>
      </div>
    ))}
  </div>
</div>



        <Link to="/recipes">
          <button className="explore-btn">Explore More Recipes</button>
        </Link>
      </div>

      <div className="home-page-about-me">
        <div>
          <h2>
            Hi! I’m Abhishek. <br /> <span>Nice to Meet You!</span>{" "}
          </h2>
          <p>
            I’m a former 4th year student, now full time blogger.I live in
            Indore. Favorite things include my camera, lake days, and dark
            chocolate.
          </p>
          <button onClick={() => naviagate("/about")}>Learn More</button>
        </div>
        <img src="/images/me3.jpg" alt="" />
        <img src="/images/me4.jpg" alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
