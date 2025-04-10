import Footer from "@/components/Footer/Footer";
import Breadcrumb from "@/components/common/Breadcrumb";
import Header from "@/components/header/Header";
import Home2ProcessSection from "@/components/process-section/home2-process-section";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Oriah Consulting - Agence digitale",
  icons: {
    icon: "/assets/img/oriahlogo.png",
  },
};

const Service3Page = () => {
  return (
    <>
      <Header />
      <Breadcrumb
        bgImg="3"
        title2="SOLUTIONS DIGITALES"
        title="Nos services"
      />
      <div className="home2-services-section pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-60">
            <div className="col-lg-12">
              <div className="section-title four text-animation">
                <h2>
                  STIMULER VOTRE <br />
                  <span>RÉUSSITE</span>
                </h2>
                <div className="dash-and-paragraph three">
                  <div className="btn-and-paragraph">
                    <p>
                      Nous proposons une gamme complète de services pour aider les entreprises à renforcer leur présence en ligne, développer leur marque et atteindre leurs objectifs numériques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="services-wrapper">
            <div className="service-card">
              <h3>1. Design Graphique</h3>
              <p>
                Création de visuels professionnels pour renforcer l'identité de votre marque à travers des supports créatifs et percutants.
              </p>
              <ul>
                <li><a href="#">Branding</a></li>
                <li><a href="#">Création de logos</a></li>
                <li><a href="#">Supports imprimés</a></li>
                <li><a href="#">Visuels marketing</a></li>
                <li><a href="#">Graphiques pour réseaux sociaux</a></li>
              </ul>
              <Link className="primary-btn3 btn-hover" href="/contact">
                En savoir plus
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
              </Link>
            </div>

            <div className="service-card">
              <h3>2. Conception & Développement Web</h3>
              <p>
                Des solutions web sur mesure incluant la conception UI/UX et le développement de sites performants, responsives et évolutifs.
              </p>
              <ul>
                <li><a href="#">Sites sur mesure</a></li>
                <li><a href="#">E-commerce</a></li>
                <li><a href="#">Développement CMS</a></li>
                <li><a href="#">Design responsive</a></li>
                <li><a href="#">Maintenance web</a></li>
              </ul>
              <Link className="primary-btn3 btn-hover" href="/contact">
                En savoir plus
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
              </Link>
            </div>

            <div className="service-card">
              <h3>3. Développement d'Applications Mobiles</h3>
              <p>
                Création d'applications mobiles natives et multiplateformes offrant une expérience utilisateur fluide sur iOS et Android.
              </p>
              <ul>
                <li><a href="#">iOS</a></li>
                <li><a href="#">Android</a></li>
                <li><a href="#">Cross-platform</a></li>
                <li><a href="#">Tests et QA</a></li>
                <li><a href="#">Maintenance d'apps</a></li>
              </ul>
              <Link className="primary-btn3 btn-hover" href="/contact">
                En savoir plus
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
              </Link>
            </div>

            <div className="service-card">
              <h3>4. Design UX/UI</h3>
              <p>
                Conception centrée sur l'utilisateur pour offrir une navigation fluide, intuitive et engageante.
              </p>
              <ul>
                <li><a href="#">Recherche utilisateur</a></li>
                <li><a href="#">Wireframes</a></li>
                <li><a href="#">Prototypes</a></li>
                <li><a href="#">Design d'interface</a></li>
                <li><a href="#">Tests d'utilisabilité</a></li>
              </ul>
              <Link className="primary-btn3 btn-hover" href="/contact">
                En savoir plus
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
              </Link>
            </div>

            <div className="service-card">
              <h3>5. Optimisation SEO</h3>
              <p>
                Boostez votre visibilité sur les moteurs de recherche avec des techniques SEO efficaces adaptées à votre marché.
              </p>
              <ul>
                <li><a href="#">Recherche de mots-clés</a></li>
                <li><a href="#">SEO on-page</a></li>
                <li><a href="#">SEO technique</a></li>
                <li><a href="#">Netlinking</a></li>
                <li><a href="#">Suivi et analyses</a></li>
              </ul>
              <Link className="primary-btn3 btn-hover" href="/contact">
                En savoir plus
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
              </Link>
            </div>

            <div className="service-card">
              <h3>6. Chatbots IA</h3>
              <p>
                Développez des assistants virtuels intelligents pour automatiser le support client et améliorer l’expérience utilisateur.
              </p>
              <ul>
                <li><a href="#">Développement de chatbot</a></li>
                <li><a href="#">Intégration IA</a></li>
                <li><a href="#">Service client 24/7</a></li>
                <li><a href="#">Intégration site & app</a></li>
                <li><a href="#">Analyse & amélioration</a></li>
              </ul>
              <Link className="primary-btn3 btn-hover" href="/contact">
                En savoir plus
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Home2ProcessSection />
      <Footer />
    </>
  );
};

export default Service3Page;
