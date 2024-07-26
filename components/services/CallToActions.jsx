import Link from "next/link";
import React from "react";

const CallToActions = () => {
  return (
    <div className="fancy-short-banner-one mt-170 lg-mt-120">
      <div className="container">
        <div className="bg-wrapper position-relative" data-aos="fade-up">
          <div className="shapes shape-one" />
          <div className="inner-wrapper">
            <div className="subscribe-area">
              <div className="row align-items-end">
                <div className="col-lg-6">
                  <div className="title-style-two">
                    <div className="sc-title fw-500 ">Subscirbe Now</div>
                    <h4 className="main-title fw-bold tx-dark">
                      New user? Start your free trial now.
                    </h4>
                  </div>{" "}
                  {/* /.title-style-two */}
                </div>
                {/* End .col-lg-6 */}

                <div className="col-lg-6">
                  <div className="subscribe-form">
                    <form>
                      <input
                        type="email"
                        required
                        placeholder="Email address"
                      />
                      <button
                        type="submit"
                        className="tran3s position-absolute"
                      >
                        Subscribe
                      </button>
                    </form>
                    <p className="m0 pt-10">
                      Already a member?{" "}
                      <Link href="https://test-dem.auth.eu-north-1.amazoncognito.com/oauth2/authorize?client_id=2fc4rdgddt8i7abcdniv673ipe&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fjano-dashboard.onrender.com%2Fhome%2Fsass-product" className="tx-dark">
                        Sign in.
                      </Link>
                    </p>
                  </div>
                  {/* /.subscribe-form */}
                </div>
                {/* End .col-lg-6 */}
              </div>
            </div>{" "}
            {/* /.subscribe-area */}
          </div>
        </div>{" "}
        {/* /.bg-wrapper */}
      </div>
    </div>
  );
};

export default CallToActions;
