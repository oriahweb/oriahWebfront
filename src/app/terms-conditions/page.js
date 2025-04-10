import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
export const metadata = {
  title: "Oriah Consulting - Agence de Marketing Digital",
  icons: {
    icon: "/assets/img/oriahlogo.png",
  },
};

const page = () => {
  return (
    <>
      <Header />
      <div className="terms-and-conditions-page pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-130">
            <div className="col-lg-12">
              <div className="section-title six">
                <h2>Conditions Générales</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 ">
              <div className="update-date mb-30">
                <h6>
                  <i className="bi bi-caret-right-fill" /> Dernière mise à jour
                </h6>
                <p>15 Janvier 2025</p>
              </div>
            </div>
            <div className="col-lg-12 mb-40">
              <div className="terms-and-conditions">
                <h4>1. Conditions Générales</h4>
                <p>
                  Bienvenue chez ORIAH CONSULTING. Ces conditions générales définissent les règles et 
                  réglementations pour l'utilisation de nos services de développement et de design. 
                  En utilisant nos services, vous acceptez pleinement ces conditions. Nos services 
                  comprennent le développement web, la conception de logos, le développement 
                  d'applications mobiles et les solutions e-commerce.
                </p>
                <ul>
                  <li>
                    <strong>i ) Accord de Service : </strong> Tous les projets de développement 
                    commencent par une collecte détaillée des exigences et une définition du périmètre 
                    du projet. Les modifications du périmètre peuvent affecter les délais de livraison 
                    et les coûts. Nous exigeons une approbation écrite avant de mettre en œuvre tout 
                    changement significatif dans les projets en cours.
                  </li>
                  <li>
                    <strong>ii ) Conditions de Paiement :</strong> Nous fonctionnons avec une structure 
                    de paiement basée sur les étapes pour les projets de développement. Le travail de 
                    design nécessite un acompte de 50%. Toutes les factures doivent être réglées dans 
                    les 15 jours suivant leur émission. Le travail peut être suspendu en cas de 
                    retard de paiement.
                  </li>
                  <li>
                    <strong>iii ) Droits sur le Contenu :</strong> Tout le code et les designs créés 
                    par Oriah Consulting restent notre propriété intellectuelle jusqu'au paiement complet. 
                    Nous conservons le droit d'utiliser les projets terminés comme exemples de 
                    portfolio sauf accord contraire explicite.
                  </li>
                  <li>
                    <strong>iv ) Livraison du Projet :</strong> Nous fournissons des mises à jour 
                    régulières et des rapports d'avancement. Les clients reçoivent un accès aux 
                    environnements de développement et des réunions de suivi programmées tout au 
                    long du cycle de vie du projet.
                  </li>
                </ul>
                <p>
                  Ces conditions assurent une relation professionnelle entre Oriah Consulting et nos clients. 
                  Nous recommandons de les examiner attentivement avant d'utiliser nos services. Notre 
                  équipe est disponible pour clarifier tout point.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="terms-and-conditions">
                <h4>2. Politique de Confidentialité</h4>
                <p>
                  Chez Oriah Consulting, la protection de vos données est primordiale. Nous traitons les 
                  données sensibles des projets, le code source et les informations des clients avec 
                  le plus grand soin. Nos pratiques de gestion des données sont conformes aux 
                  réglementations actuelles en matière de confidentialité, et nous mettons en œuvre 
                  des mesures de sécurité robustes pour protéger toutes les informations des clients.
                </p>
                <p>
                  Notre politique de confidentialité couvre les pratiques de collecte, d'utilisation 
                  et de stockage des données. Nous collectons les données nécessaires au développement 
                  et aux tests des projets. Cela inclut les journaux d'application, les données de 
                  test utilisateur et les informations de gestion de projet. Toutes les données sont 
                  stockées de manière sécurisée et accessibles uniquement par les membres autorisés 
                  de l'équipe.
                </p>
                <p>
                  Nous maintenons une stricte confidentialité concernant les informations commerciales 
                  et les stratégies de développement de nos clients. Des accords de non-divulgation 
                  sont disponibles sur demande. Notre équipe suit régulièrement des formations sur les 
                  meilleures pratiques en matière de protection des données et de confidentialité.
                </p>
                <p>
                  Oriah Consulting s'engage à la transparence dans nos pratiques de gestion des données. 
                  Nous mettons régulièrement à jour nos politiques de confidentialité pour refléter 
                  les changements dans les réglementations et les normes de l'industrie. Les clients 
                  sont rapidement informés de tout changement dans nos procédures de traitement des données.
                </p>
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
