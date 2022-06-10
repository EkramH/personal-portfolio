import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Ekram, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am a hard worker and a Quick Learner. I am always committed to
              my work. I am a End web developer, also have experience
              specialized in Reactjs with responsive and cross platform website
              design approach. Extended my knowledge with Nodejs, Expressjs,
              Mongodb, Rest Api to have better understanding the backend and the
              data flow. Besides always ready to learn any new technology.
              Honestly, I am excited to start my career as a web developer as
              well as to enhance my workplace and reputation day by day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
