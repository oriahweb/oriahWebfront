import Link from "next/link";
import React from "react";

const Home1ContactSection = () => {
  return (
    <div className="contact-section mb-130">
      <div className="container-lg container-fluid">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-8">
            <div className="section-title text-animation">
              <h2>Parlons</h2>
              <div className="dash-and-paragraph">
                <div className="dash" />
                <div className="content-and-social">
                  <p>
                    Nous sommes une agence de conseil en marketing digital et
                    nous aimerions vous aider à atteindre vos objectifs.
                    N'hésitez pas à nous contacter pour discuter de vos besoins.
                  </p>
                  <div className="social-area">
                    <h6>Instagram</h6>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={6}
                      viewBox="0 0 50 6"
                    >
                      <path d="M50 3L45 0.113249V5.88675L50 3ZM0 3.5H45.5V2.5H0V3.5Z" />
                    </svg>
                    <ul>
                      <li>
                        <a href="https://www.instagram.com/oriahconsulting/">
                          <i className="bx bxl-instagram-alt" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-lg-flex justify-content-end align-items-center">
            <div className="btn_wrapper">
              <Link className="circle-btn btn-hover" href="/contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                </svg>{" "}
                Contactez-<strong>nous</strong>
                <span style={{ top: "50.5px", left: "83.75px" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1ContactSection;
