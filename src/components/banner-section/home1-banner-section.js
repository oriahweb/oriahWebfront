"use client";
import Link from "next/link";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import ModalVideo from "react-modal-video";
const Home1BannerSection = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="home1-banner-area mb-100">
        <div className="container-lg container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-main-title">
                <h6 className="text-animation">
                  Hey There! We are
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={6}
                    viewBox="0 0 50 6"
                  >
                    <path d="M50 3L45 0.113249V5.88675L50 3ZM0 3.5H45.5V2.5H0V3.5Z" />
                  </svg>
                  <svg
                    className="star"
                    xmlns="http://www.w3.org/2000/svg"
                    width={45}
                    height={36}
                    viewBox="0 0 45 36"
                  >
                    <path d="M41.0654 13.6409C35.2972 11.1608 31.0569 6.12526 29.8727 0C28.6885 6.12526 24.4483 11.1608 18.68 13.6409C17.5722 14.1294 14.7454 14.881 14.7454 14.881C14.7454 14.881 17.534 15.6326 18.68 16.1211C24.4483 18.6013 28.6885 23.6743 29.8727 29.762C31.0569 23.6367 35.2972 18.6013 41.0654 16.1211C42.1732 15.6326 45 14.881 45 14.881C45 14.881 42.2114 14.1294 41.0654 13.6409Z" />
                    <path d="M17.1903 26.4927C13.7523 25.0271 11.2693 22.0209 10.5435 18.4134C9.85588 22.0209 7.33466 25.0271 3.89663 26.4927C3.24722 26.7933 1.56641 27.2067 1.56641 27.2067C1.56641 27.2067 3.20902 27.6576 3.89663 27.9207C7.33466 29.3862 9.81768 32.3925 10.5435 36C11.2693 32.4301 13.7523 29.4238 17.1903 27.9582C17.8398 27.6576 19.5206 27.2443 19.5206 27.2443C19.5206 27.2443 17.8398 26.7933 17.1903 26.4927Z" />
                    <path d="M44.3888 27.2443C44.3888 28.1086 43.663 28.785 42.8226 28.785C41.944 28.785 41.2563 28.071 41.2563 27.2443C41.2563 26.38 41.9822 25.7036 42.8226 25.7036C43.663 25.666 44.3888 26.38 44.3888 27.2443Z" />
                    <path d="M15.3185 5.82463C15.3185 6.68893 14.5927 7.36534 13.7522 7.36534C12.8736 7.36534 12.186 6.65135 12.186 5.82463C12.186 4.96033 12.9118 4.28392 13.7522 4.28392C14.6309 4.28392 15.3185 4.96033 15.3185 5.82463Z" />
                    <path d="M1.56621 16.4217C2.43121 16.4217 3.13243 15.7319 3.13243 14.881C3.13243 14.0301 2.43121 13.3403 1.56621 13.3403C0.701218 13.3403 0 14.0301 0 14.881C0 15.7319 0.701218 16.4217 1.56621 16.4217Z" />
                  </svg>
                </h6>
                <h1 className="text-animation">
                  <span>CREATING</span> Digital Reality.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="banner-bottom">
            <div className="row">
              <div className="col-lg-7 d-lg-flex d-none">
                <div className="banner-img magnetic-item">
                  <img src="assets/img/home1/home-main-image2.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="banner-right-content text-justify">
                  <div className="content text-justify">
                    <p className="text-justify">
                      Come & Click is a digital agency that offers a wide range
                      of services, including{" "}
                      <span>
                        online marketing, web development, design,
                      </span>{" "}
                      and other innovative digital solutions to help clients
                      grow their online presence.
                    </p>

                    <ul className="btn-group">
                      <li className="success-rate">
                        Success Rate <span>95%</span>
                      </li>
                    </ul>
                  </div>
                  <div className="banner-btn btn_wrapper">
                    <Link className="btn-hover" href="/service3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                      </svg>{" "}
                      Explore <br /> Now
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1BannerSection;
