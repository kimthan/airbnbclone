import React from "react";

function Banner() {
  return (
    <div className="relative">
      <img
        src="https://res.cloudinary.com/koto/images/f_auto,q_auto:good/w_1536,h_864,c_scale/v1615897785/Koto_CaseStudy_AirbnbPlus_003-1_20277aefb/Koto_CaseStudy_AirbnbPlus_003-1-1536x864.jpg"
        alt=""
        className=""
      />
      <div className="absolute top-1/2 w-full text-center text-white">
        <p className="hero">Not Sure where to go?</p>
        <button className="text-purple-500 hover:shadow-xl font-bold m-3 px-10 rounded-full shadow-md py-4 bg-white active:scale-90 transition duration-150">
          I am flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
