import React from "react";
import aboutImage from "../../assets/about_us_2.jpg";

const About = () => {
  return (
    <div>
      <div className="about-contents">
        <div className="row">
          <div className="col-md-6">
            <div className="content-img">
              <img src={aboutImage} alt="content image" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="content-text">
              <p className="text-justify">
                Welcome to <b>Flavor Factory</b>, where culinary enthusiasts and
                home cooks unite to share and discover delicious recipes from
                around the globe. Our platform is designed to inspire your inner
                chef, providing a diverse collection of recipes, cooking tips,
                and a vibrant community to connect with. Join us on this
                flavorful journey as we celebrate the joy of cooking and the art
                of sharing.Our mission is simple but powerful: to inspire and
                connect individuals through the joy of cooking and sharing
                recipes.We understand that a recipe is not just a list of
                ingredients and instructions; it's a piece of someone's culture,
                a memory on a plate, and an invitation to create something
                wonderful.
              </p>
              {/* <p className="text-justify">
                Whether you're here to find the perfect dinner idea, share your
                culinary masterpiece, or connect with fellow food enthusiasts,
                Flavor factory is your culinary companion. Join us in exploring
                the endless possibilities of the kitchen and let's create,
                savor, and share the joy of cooking together. Thank you for
                being a part of our vibrant and flavorful community!{" "}
              </p> */}
              <span>Happy Cooking!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
