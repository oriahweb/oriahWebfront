"use client";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/slick-theme.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/bootstrap.min.css";
import "yet-another-react-lightbox/styles.css";
import "../../public/assets/css/style.css";
import useMagneticHover from "@/hooks/useMagneticHover";
import SmoothPageScroll from "@/utils/SmoothPageScroll";
import ScrollTopBtn from "@/utils/ScrollTopBtn";
import { useEffect, useState } from "react";
import ThemeSwitch from "@/components/common/Theme";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  useMagneticHover();
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body>
        {children}
        {pathname !== '/pricing' && <ThemeSwitch />}
        <SmoothPageScroll />
        <ScrollTopBtn />
      </body>
    </html>
  );
}
