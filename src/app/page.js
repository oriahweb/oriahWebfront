import Footer from "@/components/Footer/Footer";
import Home1About from "@/components/about/Home1About";
import Home3BannerSection from "@/components/banner-section/home3-banner-section";
import Home1ContactSection from "@/components/contact-section/home1-contact-section";
import Header from "@/components/header/Header";
import Home1ProcessSection from "@/components/process-section/home1-process-section";
import Home1solutionSection from "@/components/solution-section/Home1solution-section";
import Home5TestimonialSection from "@/components/testimonial-section/home5-testimonial-section";
import HomeworkSection from "@/components/work-section/Homework-section";

export const metadata = {
  title: "Oriah Consulting - Agence digitale",
  icons: {
    icon: "/assets/img/oriahlogo.png",
  },
};
export default function Home() {
  return (
    <>
      <Header />
      <main className="page-content">
        <div className="line_wrap">
          <div className="line_item first-line" />
          <div className="line_item center-line" />
          <div className="line_item last-line" />
        </div>
        <Home3BannerSection />
        <Home1About />
        <Home1solutionSection style="pb-130" />
        <HomeworkSection />
        <Home1ProcessSection />
        <Home5TestimonialSection />
        <Home1ContactSection />
      </main>
      <Footer />
    </>
  );
}
