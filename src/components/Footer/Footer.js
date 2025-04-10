import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="vector d-lg-flex d-none">
          <svg
            width={300}
            height={372}
            viewBox="0 0 300 372"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <circle cx={-20} cy={320} r={270} strokeWidth={100} />
            </g>
          </svg>
        </div>
        <div className="container-lg container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-top">
                <div className="row g-lg-4 gy-5 mb-90">
                  <div className="col-xl-6 col-lg-6 col-md-8 d-flex justify-content-lg-start">
                    <div className="footer-widget">
                      <div className="subscribed-area">
                        <h3>Contactez-nous pour commencer!</h3>
                        <Link
                          className="primary-btn3 btn-hover"
                          href="/contact"
                        >
                          Devenez un client
                          <svg
                            width={11}
                            height={11}
                            viewBox="0 0 11 11"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.9532 0.0585938L10.7354 1.14748C10.5496 2.07672 10.2769 3.53489 10.1863 5.1213C10.095 6.71893 10.1931 8.37925 10.7023 9.73705C10.8477 10.1249 10.6512 10.5572 10.2634 10.7026C9.87551 10.8481 9.4432 10.6516 9.29776 10.2637C8.68194 8.62153 8.59252 6.71935 8.68873 5.03573C8.72553 4.39179 8.79018 3.76993 8.86659 3.19447L1.53034 10.5307C1.23745 10.8236 0.762572 10.8236 0.469679 10.5307C0.176786 10.2378 0.176786 9.76295 0.469679 9.47006L7.82528 2.11446C7.18273 2.19925 6.48717 2.27186 5.77637 2.31171C4.07615 2.40705 2.18197 2.32292 0.70457 1.68975C0.323847 1.52658 0.147484 1.08567 0.31065 0.704951C0.473817 0.324229 0.914726 0.147865 1.29545 0.311032C2.44305 0.802862 4.04886 0.906228 5.69239 0.814067C7.31348 0.723165 8.86779 0.449612 9.86179 0.263237L10.9532 0.0585938Z"
                            />
                          </svg>
                          <span style={{ top: "50.5px", left: "83.75px" }} />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-sm-6 d-flex justify-content-lg-center">
                    <div className="footer-widget">
                      <div className="widget-title">
                        <h4>Liens rapides</h4>
                      </div>
                      <div className="menu-container">
                        <ul>
                          <li>
                            <Link href="/about-me">
                              A propos de nous
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/service3">
                              Nos services
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio-showcase">
                              Portfolio
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/pricing">
                              Nos tarifs
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/faq">
                              FAQ
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="contact">
                              Contactez-nous
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-sm-6 d-flex justify-content-lg-end">
                    <div className="footer-widget">
                      <div className="widget-title">
                        <h4 className="text-transparent">Mentions légales</h4>
                      </div>
                      <div className="menu-container">
                        <ul>
                          <li>
                            <Link href="/terms-conditions">
                              Conditions d'utilisation
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-end mb-60">
                  <div className="col-xl-7 d-flex justify-content-lg-end">
                    <div className="solial-account">
                      <ul>
                        <li>
                          <a href="https://www.instagram.com/oriahconsulting/">
                            Instagram
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="footer-logo-contact-wrap">
                      <div className="footer-logo">
                        <Link href="/">
                          <img
                            src="assets/img/white-logo.png"
                            alt="footer-logo"
                          />
                        </Link>
                      </div>
                      <ul className="footer-contact">
                        <li className="single-contact">
                          <span>Phone</span>
                          <h5>
                            <a href="tel:33613476711">+33 6 13 47 67 11 </a>
                          </h5>
                        </li>
                        <li className="single-contact">
                          <span>Email Now</span>
                          <h5>
                            <a href="mailto:contact@oriah-consulting.com">
                              contact@oriah-consulting.com
                            </a>
                          </h5>
                        </li>
                        <li className="single-contact">
                          <span>Lieu</span>
                          <h5>
                          <a href="">
                          Paris, 75017, France
                            </a>
                          </h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-btm">
                <div className="copyright-area">
                  <p>
                    Copyright 2025 <a href="#">Oriah Consulting</a> | Design by collaboration with{" "}
                    <a href="https://designloop.framer.website/">DesignLoop </a>
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
