import React from "react";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="md:text-2xl text-pink-700">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-slate-200">
          Ekram Hosen
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-slate-300">
          I'm a web developer
        </h2>
        <p className="text-slate-300 py-4 max-w-[700px]">
          I'm a web developer specializing building website with all device
          responsive. Also, I have experience in REACT, JS and MERN.
        </p>
        <div>
          <button className="text-white font-semibold border-2 rounded-md px-6 py-3 my-2 flex items-center hover:bg-pink-700 duration-300">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
