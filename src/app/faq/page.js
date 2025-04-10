import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import React from "react";

export const metadata = {
  title: "Oriah Consulting - Agence digitale",
  icons: {
    icon: "/assets/img/oriahlogo.png",
  },
};

const faqData = [
  {
    id: 1,
    question: "Quels services propose Oriah Consulting ??",
    answer:
      "Oriah Consulting offre des services de création de sites web optimisés, de campagnes publicitaires Facebook Ads, et de développement de chatbots d'intelligence artificielle. Nous aidons les entreprises à améliorer leur présence en ligne, à attirer plus de clients et à augmenter leur chiffre d'affaires.",
  },
  {
    id: 2,
    question: "Pourquoi faire confiance à Oriah Consulting ?",
    answer:
      "Chez Oriah Consulting, notre priorité est votre succès. Nous nous engageons à offrir des services de haute qualité en utilisant des stratégies éprouvées et des technologies de pointe. Nos experts sont dédiés à comprendre vos besoins et à fournir des solutions sur mesure qui génèrent des résultats tangibles.",
  },
  {
    id: 3,
    question: "Quels résultats puis-je attendre de vos services ?",
    answer:
      "Nos clients constatent généralement une augmentation significative de leur visibilité en ligne, une amélioration du taux de conversion et une croissance notable de leur chiffre d'affaires. Chaque projet est unique, et nous travaillons avec vous pour fixer des objectifs clairs et mesurer les résultats.",
  },
  {
    id: 4,
    question: "Comment garantissez-vous la qualité de vos services ?",
    answer:
      "Nous adoptons une approche rigoureuse et méthodique pour chaque projet. Nos processus incluent des phases de planification, de développement, de test et d'optimisation. De plus, nous vous tenons informé à chaque étape, assurant ainsi une transparence totale et des ajustements en temps réel pour garantir la satisfaction.",
  },
  {
    id: 5,
    question: "Combien de temps faut-il pour livrer un projet ?",
    answer:
      "La durée de livraison d'un projet dépend de sa complexité et de ses spécificités. Cependant, nous nous engageons à fournir des délais clairs dès le début et à respecter ces échéances. Pour des projets standards, la livraison prend environ une semaine. Nous vous tiendrons informé de l'avancement à chaque étape pour garantir une transparence totale.",
  },
  {
    id: 6,
    question: "Quel est votre support après la livraison du projet ?",
    answer:
      "La durée de livraison d'un projet dépend de sa complexité et de ses spécificités. Cependant, nous nous engageons à fournir des délais clairs dès le début et à respecter ces échéances. Pour des projets standards, la livraison prend environ une semaine. Nous vous tiendrons informé de l'avancement à chaque étape pour garantir une transparence totale.",
  },
  {
    id: 7,
    question: "Comment démarrer avec Oriah Consulting ?",
    answer:
      "Pour commencer, contactez-nous via notre formulaire en ligne, par téléphone ou par email. Nous organiserons une consultation gratuite pour discuter de vos objectifs et de vos besoins. Ensuite, nous élaborerons un plan stratégique sur mesure pour vous aider à atteindre vos objectifs marketing. Rejoignez-nous et voyons comment nous pouvons faire prospérer votre entreprise ensemble !",
  },
  {
    id: 8,
    question: "Pouvez-vous aider à améliorer notre site web existant ?",
    answer:
      "Absolument ! Nous proposons des services d'audit de site web pour analyser les performances, l'expérience utilisateur et les aspects techniques de votre site actuel. Sur la base de l'audit, nous fournissons des recommandations et pouvons mettre en œuvre des améliorations en termes de design, de fonctionnalité, de vitesse et de référencement.",
  },
];

const Page = () => {
  return (
    <>
      <Header />
      <div className="faq-section pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="section-title six mb-70">
            <h2>FAQ&apos;s</h2>
            <div className="dash-and-paragraph">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 877 64">
                <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM875 3L875.271 3.42013L876.697 2.5H875V3ZM842.084 64L845.265 59.1819L839.502 58.836L842.084 64ZM3 3.5H875V2.5H3V3.5ZM874.729 2.57987C861.302 11.2438 844.485 27.4669 841.856 59.4675L842.852 59.5494C845.45 27.938 862.03 11.9643 875.271 3.42013L874.729 2.57987Z" />
              </svg>
              <p>
                Trouvez des réponses aux questions courantes sur nos services
                et nos processus.
              </p>
            </div>
          </div>
          <div className="faq-wrap">
            <div className="row g-4">
              {faqData.map((faq) => (
                <div className="col-lg-6" key={faq.id}>
                  <div className="single-faq">
                    <h6>
                      {faq.id}. {faq.question}
                    </h6>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
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
              Création de sites web
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
              Création de sites web
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
              SEO Optimisation
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
              Développement d'applications mobiles
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
              Conception UX/UI
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
              Marketing Digital
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
              Développement de chatbots
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
              SEO Optimisation
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
              Création de sites web
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
              AI Chatbots
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
              Création de sites web
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
              Conception UX/UI
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
              Marketing Digital
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
              Conception de logo
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
              Développement de chatbots
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
              SEO Optimisation
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
              UX/UI DESIGN
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
