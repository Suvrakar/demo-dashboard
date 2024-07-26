import Link from "next/link";

import SignupForm from "@/components/common/SignupForm";
export const metadata = {
  title: "Sign Up || Jano - Creative Multipurpose React NextJS Template",
};
const SignUp = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* 
        =============================================
        Theme Main Menu
        ============================================== 
        */}
      <header className="theme-main-menu sticky-menu theme-menu-eight">
        <div className="inner-content position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <Link href="/" className="d-block">
                <img src="/images/logo/logo_01.png" alt="" width={95} />
              </Link>
            </div>
            <Link href="/" className="go-back-btn fw-500 tran3s">
              Go to home
            </Link>
          </div>
        </div>
        {/* /.inner-content */}
      </header>
      {/* /.theme-main-menu */}

      {/* 
        =============================================
        User Data Page
        ============================================== 
        */}
      <div className="user-data-section d-flex align-items-center justify-content-center flex-column position-relative">
        <div className="form-wrapper position-relative m-auto">
          <div className="text-center">
            <h2 className="tx-dark mb-30 lg-mb-10">Registration</h2>
            <p className="fs-20 tx-dark">
              Have an account? <Link href="https://test-dem.auth.eu-north-1.amazoncognito.com/oauth2/authorize?client_id=2fc4rdgddt8i7abcdniv673ipe&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fjano-dashboard.onrender.com%2Fhome%2Fsass-product">Login Here</Link>
            </p>
          </div>
          <SignupForm />
        </div>
        {/* End form-wrapper */}

        <p className="mt-auto pt-50">Copyright @{currentYear} jano inc.</p>
        <img
          src="/images/assets/ils_11.png"
          alt="illustration"
          className="lazy-img illustration-one"
          data-aos="fade-left"
        />
        <img
          src="/images/assets/ils_12.png"
          alt="illustration"
          className="lazy-img illustration-two"
          data-aos="fade-right"
        />
      </div>
      {/* /.fancy-feature-fiftyOne */}
    </>
  );
};

export default SignUp;
