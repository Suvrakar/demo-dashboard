"use client";
import Link from "next/link";

const Subsribe = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // prevents default form submission
    // add your form submission logic here
  };

  return (
    <div className="subscribe-form m-auto" data-aos="fade-up">
      <form onSubmit={handleSubmit} action="#" className="position-relative">
        <input type="email" placeholder="Email address" />
        <button className="tran3s position-absolute fw-500">
          Try for free
        </button>
      </form>
      <p className="m0 pt-20 text-white">
        Already a member?{" "}
        <Link href="https://test-dem.auth.eu-north-1.amazoncognito.com/oauth2/authorize?client_id=2fc4rdgddt8i7abcdniv673ipe&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fjano-dashboard.onrender.com%2Fhome%2Fsass-product" className="fw-500 text-decoration-underline">
          Sign in.
        </Link>
      </p>
    </div>
  );
};

export default Subsribe;
