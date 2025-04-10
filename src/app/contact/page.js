"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const { register, handleSubmit } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = useCallback(async (data) => {
    setIsSubmitting(true);
    const formData = new FormData();

    formData.append("access_key", "3f96c5c6-96cb-40d7-81d9-e6716187b16d");
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        // Add success notification here
      } else {
        console.log("Error", res);
        // Add error notification here
      }
    } catch (err) {
      console.log("Error", err);
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="contact-page pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="section-title six mb-70">
            <h2>Contactez-nous</h2>
            <div className="dash-and-paragraph">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 877 64">
                <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM875 3L875.271 3.42013L876.697 2.5H875V3ZM842.084 64L845.265 59.1819L839.502 58.836L842.084 64ZM3 3.5H875V2.5H3V3.5ZM874.729 2.57987C861.302 11.2438 844.485 27.4669 841.856 59.4675L842.852 59.5494C845.45 27.938 862.03 11.9643 875.271 3.42013L874.729 2.57987Z" />
              </svg>
              <p>
                Créer un bref de design studio concis et efficace est crucial
                pour établir votre entreprise, ses services.
              </p>
            </div>
          </div>
          <div className="contact-info-wrap">
            <div className="row gy-5 justify-content-between">
              <div className="col-xl-4">
                <div className="row">
                  <div className="col-xl-12 col-md-6">
                    <div className="single-location mb--30">
                      <div className="title">
                        <h4>Détails</h4>
                      </div>
                      <ul>
                        <li>
                          <div className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                            >
                              <path d="M14.2333 11.1504C13.8642 10.7667 13.4191 10.5615 12.9473 10.5615C12.4794 10.5615 12.0304 10.7629 11.6462 11.1466L10.4439 12.3433C10.345 12.2901 10.2461 12.2407 10.151 12.1913C10.014 12.1229 9.88467 12.0583 9.77433 11.9899C8.64819 11.2757 7.62476 10.345 6.64319 9.14067C6.16762 8.54043 5.84804 8.03516 5.61596 7.52229C5.92793 7.23736 6.21708 6.94104 6.49861 6.65611C6.60514 6.54974 6.71167 6.43957 6.8182 6.33319C7.61715 5.5354 7.61715 4.50207 6.8182 3.70427L5.77955 2.66714C5.66161 2.54937 5.53987 2.4278 5.42573 2.30623C5.19746 2.07069 4.95777 1.82755 4.71047 1.59961C4.34143 1.2349 3.9001 1.04115 3.43595 1.04115C2.97179 1.04115 2.52286 1.2349 2.1424 1.59961L2.13479 1.60721L0.841243 2.91027C0.35426 3.39655 0.076528 3.9892 0.0156552 4.67682C-0.0756541 5.78614 0.251537 6.81947 0.502638 7.4957C1.11898 9.15587 2.03968 10.6945 3.41312 12.3433C5.07952 14.3301 7.08452 15.8991 9.37486 17.0047C10.2499 17.4187 11.4179 17.9088 12.7229 17.9924C12.8028 17.9962 12.8865 18 12.9626 18C13.8414 18 14.5795 17.6847 15.1578 17.0578C15.1616 17.0502 15.1692 17.0464 15.173 17.0388C15.3708 16.7995 15.5991 16.583 15.8388 16.3512C16.0024 16.1955 16.1698 16.0321 16.3334 15.8611C16.71 15.4698 16.9079 15.014 16.9079 14.5467C16.9079 14.0756 16.7062 13.6235 16.322 13.2436L14.2333 11.1504ZM15.5953 15.1507C15.5915 15.1545 15.5915 15.1507 15.5953 15.1507C15.4469 15.3103 15.2947 15.4547 15.1311 15.6142C14.8838 15.8498 14.6327 16.0967 14.3969 16.374C14.0126 16.7843 13.5599 16.9781 12.9664 16.9781C12.9093 16.9781 12.8484 16.9781 12.7913 16.9743C11.6614 16.9021 10.6113 16.4614 9.82379 16.0853C7.67042 15.0444 5.77955 13.5665 4.20827 11.6936C2.91092 10.1322 2.04348 8.68859 1.46899 7.13859C1.11517 6.19263 0.985816 5.45562 1.04288 4.7604C1.08093 4.31591 1.25214 3.94741 1.56791 3.63209L2.86527 2.33662C3.05169 2.16187 3.24953 2.06689 3.44356 2.06689C3.68324 2.06689 3.87728 2.21125 3.99902 2.33282L4.01044 2.34422C4.24251 2.56076 4.46318 2.78491 4.69526 3.02424C4.8132 3.14581 4.93494 3.26738 5.05669 3.39275L6.09533 4.42988C6.49861 4.83258 6.49861 5.20488 6.09533 5.60758C5.985 5.71775 5.87847 5.82792 5.76814 5.9343C5.44856 6.26101 5.14419 6.56494 4.8132 6.86126C4.80559 6.86886 4.79798 6.87266 4.79417 6.88025C4.46698 7.20697 4.52786 7.52609 4.59634 7.74263L4.60775 7.77682C4.87787 8.43026 5.25833 9.0457 5.83662 9.77891L5.84043 9.78271C6.89048 11.0744 7.99761 12.0811 9.21887 12.8523C9.37486 12.9511 9.53465 13.0309 9.68683 13.1069C9.82379 13.1752 9.95315 13.2398 10.0635 13.3082C10.0787 13.3158 10.0939 13.3272 10.1091 13.3348C10.2385 13.3994 10.3602 13.4298 10.4858 13.4298C10.8016 13.4298 10.9994 13.2322 11.0641 13.1676L12.3652 11.8684C12.4946 11.7392 12.7 11.5834 12.9397 11.5834C13.1756 11.5834 13.3696 11.7316 13.4876 11.8608L13.4952 11.8684L15.5915 13.9616C15.9834 14.3491 15.9834 14.748 15.5953 15.1507ZM9.72868 4.28172C10.7255 4.44888 11.631 4.91996 12.3538 5.64177C13.0767 6.36359 13.5446 7.26775 13.7159 8.2631C13.7577 8.51383 13.9746 8.68859 14.2219 8.68859C14.2523 8.68859 14.2789 8.68479 14.3094 8.68099C14.5909 8.6354 14.7773 8.36947 14.7317 8.08834C14.5262 6.88405 13.9555 5.78614 13.0843 4.91616C12.2131 4.04618 11.1135 3.47633 9.90749 3.27118C9.62596 3.22559 9.36344 3.41175 9.31398 3.68907C9.26452 3.9664 9.44714 4.23613 9.72868 4.28172ZM17.9922 7.94018C17.6536 5.95709 16.7176 4.15255 15.2795 2.71652C13.8414 1.28049 12.0342 0.345932 10.0483 0.00781895C9.77053 -0.0415684 9.50802 0.148383 9.45856 0.425712C9.4129 0.70684 9.59932 0.968972 9.88086 1.01836C11.6538 1.31848 13.2707 2.15807 14.5567 3.43834C15.8426 4.72241 16.6796 6.33699 16.9802 8.10734C17.022 8.35808 17.2389 8.53283 17.4862 8.53283C17.5166 8.53283 17.5432 8.52903 17.5737 8.52523C17.8514 8.48344 18.0416 8.21751 17.9922 7.94018Z" />
                            </svg>
                          </div>
                          <div className="info">
                            <a href="tel:+33602158298">+33 6 13 47 67 11</a>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                            >
                              <path d="M15.8906 2.25H2.10938C0.946266 2.25 0 3.19627 0 4.35938V13.6406C0 14.8037 0.946266 15.75 2.10938 15.75H15.8906C17.0537 15.75 18 14.8037 18 13.6406V4.35938C18 3.19627 17.0537 2.25 15.8906 2.25ZM16.5938 13.6406C16.5938 14.0285 16.2785 14.3438 15.8906 14.3438H2.10938C1.72148 14.3438 1.40625 14.0285 1.40625 13.6406V4.35938C1.40625 3.97148 1.72148 3.65625 2.10938 3.65625H15.8906C16.2785 3.65625 16.5938 3.97148 16.5938 4.35938V13.6406Z" />
                              <path d="M15.3281 4.21875L9 8.4375L2.67188 4.21875C2.37891 4.02539 1.99102 4.11328 1.79766 4.40625C1.60429 4.69922 1.69219 5.08711 1.98516 5.28047L8.65828 9.71953C8.76562 9.78867 8.88281 9.82324 9 9.82324C9.11719 9.82324 9.23438 9.78867 9.34172 9.71953L16.0148 5.28047C16.3078 5.08711 16.3957 4.69922 16.2023 4.40625C16.009 4.11328 15.6211 4.02539 15.3281 4.21875Z" />
                            </svg>
                          </div>
                          <div className="info">
                            <a
                              href="mailto:contact@oriah-consulting.com"
                              title="contact@oriah-consulting.com"
                            >
                              contact@oriah-consulting.com
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={18}
                              viewBox="0 0 14 18"
                            >
                              <path d="M11.8603 10.0575C11.249 11.2522 10.4207 12.4425 9.57367 13.5113C8.77018 14.5188 7.91105 15.484 7 16.4025C6.08893 15.484 5.2298 14.5188 4.42633 13.5113C3.57933 12.4425 2.751 11.2522 2.13967 10.0575C1.52133 8.85037 1.16667 7.71975 1.16667 6.75C1.16667 5.25816 1.78125 3.82742 2.87521 2.77252C3.96917 1.71763 5.4529 1.125 7 1.125C8.5471 1.125 10.0308 1.71763 11.1248 2.77252C12.2188 3.82742 12.8333 5.25816 12.8333 6.75C12.8333 7.71975 12.4775 8.85037 11.8603 10.0575ZM7 18C7 18 14 11.6033 14 6.75C14 4.95979 13.2625 3.2429 11.9497 1.97703C10.637 0.711159 8.85652 0 7 0C5.14348 0 3.36301 0.711159 2.05025 1.97703C0.737498 3.2429 2.76642e-08 4.95979 0 6.75C0 11.6033 7 18 7 18Z" />
                            </svg>
                          </div>
                          <div className="info">
                            <a>Paris, 75017, France</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="contact-form-wrap">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-inner mb-30">
                          <label>Nom complet*</label>
                          <input
                            type="text"
                            placeholder="Daniel Scoot"
                            {...register("name", { required: true })}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner mb-30">
                          <label>Votre e-mail*</label>
                          <input
                            type="email"
                            placeholder="example@gamil.com"
                            {...register("email", { required: true })}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner mb-30">
                          <label>
                            Numéro de téléphone <span>(Optionnel)</span>
                          </label>
                          <input
                            type="text"
                            placeholder="+920- 5566 **** ****"
                            {...register("phone")}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner mb-30">
                          <label>Sujet</label>
                          <input
                            type="text"
                            placeholder="Développement web"
                            {...register("subject")}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-inner mb-30">
                          <label>Comment pouvons-nous vous aider ?</label>
                          <textarea
                            placeholder="Qu'en pensez-vous ?"
                            {...register("message")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-inner">
                      <button
                        className="primary-btn3 btn-hover"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div
                            className="spinner-border spinner-border-sm text-light"
                            role="status"
                          >
                            <span className="visually-hidden">
                              Chargement...
                            </span>
                          </div>
                        ) : (
                          <>
                            Envoyer
                            <svg
                              width={12}
                              height={12}
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
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

export default ContactPage;
