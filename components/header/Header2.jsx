"use client";

import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";
import Image from "next/image";

const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-six ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <Image
                src="/images/logo/logo_01.png"
                alt="logo"
                width={95}
                height={30}
              />
            </Link>
          </div>
          {/* End logo */}
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
            <Link
              href="https://test-dem.auth.eu-north-1.amazoncognito.com/oauth2/authorize?client_id=2fc4rdgddt8i7abcdniv673ipe&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fjano-dashboard.onrender.com%2Fhome%2Fsass-product"
              className="login-btn-two fw-500 d-flex align-items-center me-3 me-xl-5"
            >
              <Image
                width={20}
                height={20}
                src="/images/icon/icon_62.svg"
                alt="icon"
                className="me-2"
              />
              <span>login</span>
            </Link>
            <Link
              href="/contact/contact-v3"
              className="start-btn-one fs-18 fw-500 tran3s position-relative d-none d-lg-block"
            >
              Get Started
            </Link>
          </div>{" "}
          {/* /.right-widget */}
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default DefaulHeader;
