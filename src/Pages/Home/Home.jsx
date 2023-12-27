import React from "react";
import Header from "../../Components/Header/Header";
import BtnBone from "../../Components/BtnBone/BtnBone";
import OurFeature from "../../Components/OurFeature/OurFeature";
import WeCan from "../../Components/WeCan/WeCan";
import CardServices from "../../Components/CardServices/CardServices";
import Activities from "../../Components/Activities/Activities";
import Animals from "../../Components/Animals/Animals";
import Comments from "../../Components/Comments/Comments";
import PetCare from "../../Components/PetCare/PetCare";
import CheckInTime from "../../Components/CheckInTime/CheckInTime";
import WeStand from "../../Components/WeStand/WeStand";
import DogBoarding from "../../Components/DogBoarding/DogBoarding";
import CatBoarding from "../../Components/CatBoarding/CatBoarding";
import PetBoardingOff from "../../Components/PetBoardingOff/PetBoardingOff";
import ContactUs from "../../Components/ContactUs/ContactUs";
import LocMap from "../../Components/LocMap/LocMap";

import { Github } from "react-bootstrap-icons";

import "./Home.css";

export default function Home() {
  return (
    <>
      <Header>
        <div className="home-header-banner overflow-x-hidden">
          <div className="row align-content-center align-items-center">
            <div className="col-12 col-lg-5 text-center text-lg-start mt-5 mt-lg-0 ps-c">
              <h1>Pets Boarding Services</h1>

              <div className="d-flex align-items-center my-4 justify-content-center">
                <div className="px-3 header-icon-parent">
                  <Github className="header-icon" />
                </div>
                <div className="px-3">
                  <h3>Boarding Any Pets</h3>
                  <p className="mb-0 gray-t">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    eu dui non diam.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <BtnBone type="Link" title="BOOK NOW" />
              </div>
            </div>

            <div className="col-12 col-lg-7 pe-0">
              <img
                className="img-fit"
                src="/images/img-1.png"
                alt="header-banner"
              />
            </div>
          </div>
        </div>
      </Header>

      <main>
        <OurFeature />
        <WeCan />
        <section className="services mb-5 overflow-x-hidden">
          <div className="container">
            <div className="row align-items-stretch">
              <div className="col-12 col-md-6 col-xl-3 d-flex mt-3 mt-xl-0">
                <CardServices
                  icon="house"
                  title="Pets Boarding"
                  body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam nisi sunt assumenda quasi ipsa excepturi aperiam at in rem?"
                />
              </div>
              <div className="col-12 col-md-6 col-xl-3 d-flex mt-3 mt-xl-0">
                <CardServices
                  icon="apple"
                  title="Healthy Meals"
                  body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam nisi sunt assumenda quasi ipsa excepturi aperiam at in rem?"
                />
              </div>
              <div className="col-12 col-md-6 col-xl-3 d-flex mt-3 mt-xl-0">
                <CardServices
                  icon="global"
                  title="Activity Games"
                  body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam nisi sunt assumenda quasi ipsa excepturi aperiam at in rem?"
                />
              </div>
              <div className="col-12 col-md-6 col-xl-3 d-flex mt-3 mt-xl-0">
                <CardServices
                  icon="github"
                  title="Pet Taxi"
                  body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam nisi sunt assumenda quasi ipsa excepturi aperiam at in rem?"
                />
              </div>
            </div>
          </div>
        </section>
        <Activities />
        <Animals />
        <Comments />
        <PetCare />
        <CheckInTime />
        <WeStand />
        <DogBoarding />
        <CatBoarding />
        <PetBoardingOff />
        <ContactUs />
        <LocMap />
      </main>
    </>
  );
}
