"use client";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const HomeworkSection = () => {
  useEffect(() => {
    // Ensure ScrollTrigger is activated
    gsap.registerPlugin(ScrollTrigger);

    // Animation timeline
    const scScrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-sec-title",
        start: "top center",
        endTrigger: ".scroll-sec-title-end",
        end: "bottom top",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
      },
    });

    // Scroll animation
    scScrollTl.to(".scroll-sec-title", {
      y: 1500,
      duration: 10,
      opacity: 0,
    });
  }, []);
  return (
    <>
      <div className="work-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-2 scroll-sec-title text-center mb-60">
                <h2>
                  Notre travail
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <g>
                      <path d="M50 20.7692H35.2015L45.6777 10.293L39.6703 4.32234L29.2308 14.7985V0H20.7692V14.7985L10.293 4.32234L4.32234 10.293L14.7985 20.7692H0V29.2308H14.7985L4.32234 39.6703L10.293 45.6777L20.7692 35.2015V50H29.2308V35.2015L39.6703 45.6777L45.6777 39.6703L35.2015 29.2308H50V20.7692Z" />
                    </g>
                  </svg>
                </h2>
              </div>
            </div>
          </div>
          <div className="row mb-80">
            <div className="col-lg-12">
              <div className="row mb-80 g-lg-0 gy-5 justify-content-between ">
                <div className="col-lg-5">
                  <div className="single-work magnetic-item">
                    <div className="work-img rounded-3">
                      <img src="assets/img/home1/work-img-01.png" alt="" />
                    </div>
                    <div className="work-content">
                      <div className="content-wrap">
                        <h5>
                          <Link href="/portfolio-showcase">
                            Conception de site web
                          </Link>
                        </h5>
                        <ul>
                          <li>
                            <Link href="/portfolio-showcase">Design Web</Link>
                          </li>
                          <li>
                            <Link href="/portfolio-showcase">
                              Développement de site web
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio-showcase">
                              Développement de logiciels
                            </Link>
                          </li>
                        </ul>

                        <div className="view-details-wrap">
                          <Link href="/portfolio-showcase" className="active">
                            <span>Voir les détails</span>{" "}
                            <span>
                              <i className="bi bi-plus" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-work magnetic-item">
                    <div className="work-img">
                      <img src="assets/img/home1/work-img-02.png" alt="" />
                    </div>
                    <div className="work-content">
                      <div className="content-wrap">
                        <h5>
                          <Link href="/portfolio-showcase">
                            Site e-commerce
                          </Link>
                        </h5>
                        <ul>
                          <li>
                            <Link href="/portfolio-showcase">
                              Site e-commerce
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio-showcase">
                              Catalogue de produits
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio-showcase">
                              Paiement en ligne
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio-showcase">
                              Personnalisation visuelle
                            </Link>
                          </li>
                        </ul>
                        <div className="view-details-wrap">
                          <Link href="/portfolio-showcase" className="active">
                            <span>Voir les détails</span>{" "}
                            <span>
                              <i className="bi bi-plus" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-80 g-lg-0 gy-5 justify-content-between">
                <div className="col-lg-12">
                  <div className="single-work magnetic-item">
                    <div className="work-img">
                      <img src="assets/img/home1/work-img-03.png" alt="" />
                    </div>
                    <div className="work-content">
                      <div className="content-wrap">
                        <h5>
                          <Link href="/portfolio-showcase">
                            Design UX/UI & Branding
                          </Link>
                        </h5>
                        <ul>
                          <li>
                            <Link href="/portfolio-showcase">
                              Conception Figma
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio-showcase">Design UI/UX</Link>
                          </li>
                          <li>
                            <Link href="/portfolio-showcase">
                              Conception de marque
                            </Link>
                          </li>
                        </ul>
                        <div className="view-details-wrap">
                          <Link href="/portfolio-showcase" className="active">
                            <span>Voir les détails</span>
                            <span>
                              <i className="bi bi-plus" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row  g-lg-0 gy-5 justify-content-between">
                <div className="col-lg-6">
                  <div className="single-work magnetic-item">
                    <div className="work-img">
                      <img src="assets/img/home1/work-img-04.png" alt="" />
                    </div>
                    <div className="work-content">
                      <div className="content-wrap">
                        <h5>
                          <Link href="/portfolio-showcase">
                            Conception de logo
                          </Link>
                        </h5>
                        <ul>
                          <li>
                            <Link href="/portfolio-showcase">
                              Logo personnalisé
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio-showcase">
                              Rebranding de logo
                            </Link>
                          </li>
                        </ul>
                        <div className="view-details-wrap">
                          <Link href="/portfolio-showcase" className="active">
                            <span>Voir les détails</span>{" "}
                            <span>
                              <i className="bi bi-plus" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="single-work magnetic-item">
                    <div className="work-img">
                      <img src="assets/img/home1/work-img-05.png" alt="" />
                    </div>
                    <div className="work-content">
                      <div className="content-wrap">
                        <h5>
                          <Link href="/portfolio-showcase">
                            Développement web
                          </Link>
                        </h5>
                        <ul>
                          <li>
                            <Link href="/portfolio-showcase">
                              Site web de photographe
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio-showcase">
                              Site web de commerce
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio-showcase">
                              Site web de portfolio
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio-showcase">
                              Site web de blog
                            </Link>
                          </li>
                        </ul>
                        <div className="view-details-wrap">
                          <Link href="/portfolio-showcase" className="active">
                            <span>Voir les détails</span>{" "}
                            <span>
                              <i className="bi bi-plus" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex align-items-center justify-content-between gap-4 flex-wrap text-animation">
              <div className="section-title scroll-sec-title-end">
                <h2>
                  Notre travail
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <g>
                      <path d="M50 20.7692H35.2015L45.6777 10.293L39.6703 4.32234L29.2308 14.7985V0H20.7692V14.7985L10.293 4.32234L4.32234 10.293L14.7985 20.7692H0V29.2308H14.7985L4.32234 39.6703L10.293 45.6777L20.7692 35.2015V50H29.2308V35.2015L39.6703 45.6777L45.6777 39.6703L35.2015 29.2308H50V20.7692Z" />
                    </g>
                  </svg>
                </h2>
                <p>
                  Découvrez notre portfolio et voyez les résultats que nous
                  avons obtenus pour nos clients.
                </p>
              </div>
              <div className="btn_wrapper">
                <Link
                  className="circle-btn btn-hover"
                  href="/portfolio-showcase"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                  </svg>{" "}
                  Explore <strong>Maintenant</strong>
                  <span style={{ top: "50.5px", left: "83.75px" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-slider-section">
        <div className="marquee">
          <div className="marquee__group">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>{" "}
              Conception graphique
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              Conception web & développement
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              Optimisation SEO
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              Développement d'application mobile
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              Design UX/UI
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              Marketing digital
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              Conception de logo
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              Conception web & développement
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              Optimisation SEO
            </span>
          </div>
          <div className="marquee__group">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>{" "}
              Conception graphique
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              Conception web
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              Conception de page d'accueil
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              Design UX/UI
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              Marketing digital
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              Conception de marque
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              Conception web & développement
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              Optimisation SEO
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              Design UX/UI
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeworkSection;
