import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import React from "react";

export const metadata = {
  title: "Oriah Consulting - Agence digitale",
  icons: {
    icon: "/assets/img/oriahlogo.png",
  },
};

const page = () => {
  // Using darker color codes for cards
  const cardColors = {
    blue: "#f0ead2", // Darker blue
    pink: "#dde5b6", // Darker pink
    green: "#f7dad9", // Darker green
  };

  return (
    <>
      <Header hideThemeSwitch={true} />
      <div className="pricing-page pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="section-title-and-tab-btn mb-70">
            <h1>Our Services & Pricing Plans</h1>
            <div className="arrow-and-tab-btn">
              <svg viewBox="0 0 987 58" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 29H985M985 29C976.333 32.1667 959 41.4 959 57M985 29C976.333 25.8333 959 15.8 959 1"
                  strokeLinecap="round"
                />
              </svg>
              <div className="tab-btn-area justify-content-center">
                <nav className="nav-wrapper">
                  <div
                    className="nav nav-tabs flex-wrap"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link flex-grow-1"
                      id="media-buying-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#media-buying"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Media Buying
                    </button>
                    <button
                      className="nav-link active flex-grow-1"
                      id="website-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#website"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Création de site web (Code/NoCode)
                    </button>
                    <button
                      className="nav-link flex-grow-1"
                      id="ecommerce-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#ecommerce"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      E-commerce
                    </button>
                    <button
                      className="nav-link flex-grow-1"
                      id="mobile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#mobile"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Mobile Development
                    </button>
                    <button
                      className="nav-link flex-grow-1"
                      id="seo-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#seo"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Optimisation SEO
                    </button>
                    <button
                      className="nav-link flex-grow-1"
                      id="chatbot-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#chatbot"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Chatbot IA
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="tab-content" id="nav-tabContent">
            {/* Website Development Tab */}
            <div
              className="tab-pane fade show active"
              id="website"
              role="tabpanel"
            >
              <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="pricing-card"
                    style={{ backgroundColor: cardColors.blue }}
                  >
                    <div className="pricing-top">
                      <span>Standart</span>
                      <h2>
                        €1099<sub>/une fois</sub>
                      </h2>
                    </div>
                    <div
                      className="pricing-content"
                      style={{ color: "#000000" }}
                    >
                      <ul>
                        <li>Site Web 3-5 Pages</li>
                        <li>Design Adaptatif</li>
                        <li>Formulaires de Contact Basiques</li>
                        <li>Fonctionnalités Essentielles</li>
                        <li>Optimisation de Base</li>
                        <li>Support de Base</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">
                        Contactez-nous
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div
                    className="pricing-card"
                    style={{ backgroundColor: cardColors.pink }}
                  >
                    <div className="pricing-top">
                      <span>Avancé</span>
                      <h2>
                        €1,400 - €1,599<sub>/une fois</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Optimisation SEO</li>
                        <li>CMS Avancé</li>
                        <li>Animations Personnalisées</li>
                        <li>Support Premium</li>
                        <li>Optimisation des Performances</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">
                        Contactez-nous
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div
                    className="pricing-card"
                    style={{ backgroundColor: cardColors.green }}
                  >
                    <div className="pricing-top">
                      <span>Plan Personnalisé</span>
                      <h2>
                        Sur demande<sub>/quote</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Développement sur mesure</li>
                        <li>Fonctionnalités Avancées</li>
                        <li>Intégrations Personnalisées</li>
                        <li>Support Prioritaire</li>
                        <li>Solutions Scalables</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">
                        Contactez-nous
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* E-commerce Tab */}
            <div className="tab-pane fade" id="ecommerce" role="tabpanel">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="pricing-card"
                    style={{ backgroundColor: cardColors.blue }}
                  >
                    <div className="pricing-top">
                      <span>Standart</span>
                      <h2>
                        €1,299 - €1,399<sub>/une fois</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Boutique en ligne simple</li>
                        <li>10-20 Produits</li>
                        <li>WooCommerce/Shopify</li>
                        <li>Paiement Basique</li>
                        <li>Support de Base</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">
                        Contactez-nous
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div
                    className="pricing-card"
                    style={{ backgroundColor: cardColors.pink }}
                  >
                    <div className="pricing-top">
                      <span>Avancé</span>
                      <h2>
                        €1,499 - €1,599<sub>/une fois</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Gestion de Stock Avancée</li>
                        <li>Automatisation des Processus</li>
                        <li>Systèmes de Paiement Sécurisés</li>
                        <li>Intégration de Chatbot</li>
                        <li>Support Premium</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">
                        Contactez-nous
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div
                    className="pricing-card"
                    style={{ backgroundColor: cardColors.green }}
                  >
                    <div className="pricing-top">
                      <span>Plan Personnalisé</span>
                      <h2>
                        Sur demande<sub>/quote</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Développement sur mesure</li>
                        <li>Intégration API</li>
                        <li>Paramétrage Multilingue</li>
                        <li>Fonctionnalités Avancées</li>
                        <li>Formation Personnalisée</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">
                        Contactez-nous
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chatbot Sites Tab */}
            <div className="tab-pane fade" id="chatbot" role="tabpanel">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="pricing-card"
                    style={{ backgroundColor: cardColors.blue }}
                  >
                    <div className="pricing-top">
                      <span>Standart</span>
                      <h2>
                        €699<sub>/une fois</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Module de Réservation</li>
                        <li>Paiements en ligne</li>
                        <li>Gestion du Calendrier</li>
                        <li>Notifications de Base</li>
                        <li>Support de Base</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">
                        Contactez-nous
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div
                    className="pricing-card"
                    style={{ backgroundColor: cardColors.pink }}
                  >
                    <div className="pricing-top">
                      <span>Avancé</span>
                      <h2>
                        €999<sub>/une fois</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Gestion Avancée</li>
                        <li>Synchronisation de Plateforme</li>
                        <li>Disponibilité en temps réel</li>
                        <li>Analyse Avancée</li>
                        <li>Support Premium</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">
                        Contactez-nous
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div
                    className="pricing-card"
                    style={{ backgroundColor: cardColors.green }}
                  >
                    <div className="pricing-top">
                      <span>Plan Personnalisé</span>
                      <h2>
                        Sur demande<sub>/quote</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Développement sur mesure</li>
                        <li>Prix Dynamique</li>
                        <li>Fonctionnalités Avancées</li>
                        <li>Support 24/7</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">
                        Contactez-nous
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Development Tab */}
            <div className="tab-pane fade" id="mobile" role="tabpanel">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6 mx-auto">
                  <div
                    className="pricing-card"
                    style={{ backgroundColor: cardColors.pink }}
                  >
                    <div className="pricing-top">
                      <span>Développement sur mesure</span>
                      <h2>
                        Sur demande<sub>/project</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>iOS & Android Development</li>
                        <li>Fonctionnalités sur mesure</li>
                        <li>UI/UX Design</li>
                        <li>Publishing App Store</li>
                        <li>Support Ongoing</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">
                        Contactez-nous
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Media Buying Tab */}
            <div className="tab-pane fade" id="media-buying" role="tabpanel">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="pricing-card"
                    style={{ backgroundColor: cardColors.blue }}
                  >
                    <div className="pricing-top">
                      <span>Standart</span>
                      <h2>
                        €600<sub>/Mois</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Campagne publicitaire sur 1 produit ou service</li>
                        <li>2Analyse avancée de l'audience cible</li>
                        <li>Création des créatives et A/B testing</li>
                        <li>Analyse avancée du ROI</li>
                        <li>Ajustements stratégiques en cours de campagne</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">
                        Contactez-nous
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div
                    className="pricing-card"
                    style={{ backgroundColor: cardColors.pink }}
                  >
                    <div className="pricing-top">
                      <span>Avancé</span>
                      <h2>
                        €800<sub>/Mois</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Campagne publicitaire sur 2 produits ou services</li>
                        <li>Analyse avancée de l'audience cible</li>
                        <li>Création des créatives et A/B testing</li>
                        <li>Analyse avancée du ROI</li>
                        <li>Ajustements stratégiques en cours de campagne</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">
                        Contactez-nous
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div
                    className="pricing-card"
                    style={{ backgroundColor: cardColors.green }}
                  >
                    <div className="pricing-top">
                      <span>Premium</span>
                      <h2>
                        €1,000<sub>/Mois</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Campagne publicitaire sur 3 produits ou services</li>
                        <li>Analyse avancée de l'audience cible</li>
                        <li>Création des créatives et A/B testing</li>
                        <li>Analyse avancée du ROI</li>
                        <li>Ajustements stratégiques en cours de campagne</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">
                        Contactez-nous
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SEO Services Tab */}
            <div className="tab-pane fade" id="seo" role="tabpanel">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="pricing-card"
                    style={{ backgroundColor: cardColors.blue }}
                  >
                    <div className="pricing-top">
                      <span>Standart</span>
                      <h2>
                        €300<sub>/Mois</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Audit SEO</li>
                        <li>Optimisation Technique</li>
                        <li>5 Mots-clés cible</li>
                        <li>Rapports Mensuels</li>
                        <li>Support de Base</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">
                        Contactez-nous
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div
                    className="pricing-card"
                    style={{ backgroundColor: cardColors.pink }}
                  >
                    <div className="pricing-top">
                      <span>Avancé</span>
                      <h2>
                        €1,100<sub>/Mois</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Stratégie de contenu</li>
                        <li>Link Building</li>
                        <li>3-Month Tracking</li>
                        <li>Analyse des concurrents</li>
                        <li>Support Premium</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">
                        Contactez-nous
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div
                    className="pricing-card"
                    style={{ backgroundColor: cardColors.green }}
                  >
                    <div className="pricing-top">
                      <span>Plan Personnalisé</span>
                      <h2>
                        Sur demande<sub>/quote</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Stratégie SEO complète</li>
                        <li>SEO International</li>
                        <li>SEO E-commerce</li>
                        <li>Reporting personnalisé</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">
                        Contactez-nous
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
