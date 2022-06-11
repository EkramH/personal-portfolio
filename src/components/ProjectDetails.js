import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const ProjectDetails = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      name: "Handy Manufacturer",
      liveLink: "https://handy-b2384.web.app/",
      codeLink: "https://github.com/EkramH/handy-client-side",
      img: "https://i.ibb.co/vHyGMQk/handy.png",
      des: "It's a Tools Manufacturer MERN-stack website. Here a user can view and purchase products. It also has a dedicated admin panel where an admin has access to control the overall website like orders processing, new admin assign, etc.",
      ss1: "https://i.ibb.co/xhxqmhJ/handy-dashboard.png",
      ss2: "https://i.ibb.co/3MNZTPJ/handy-products.png",
      tech: [
        "HTML",
        "CSS",
        "Tailwind",
        " Daisy UI",
        "React JS",
        "React Router",
        "React Hook Form",
        "axious",
        "React query",
        "Firebase",
        "Stripe",
        "Express JS",
        "MongoDB",
        "JWT",
      ],
    },
    {
      id: 2,
      name: "PhoneLink",
      liveLink: "https://phone-link-ab2f7.web.app/",
      codeLink: "https://github.com/EkramH/handy-client-side",
      img: "https://i.ibb.co/KWT5Shv/phonelink.png",
      des: "It's a Warehouse React application. Here a user can view and purchase products. It also has a dedicated admin panel where an admin has access to control the overall website like orders processing, new admin assign, etc.",
      ss1: "https://i.ibb.co/njvtxYx/phonelink-add.png",
      ss2: "https://i.ibb.co/rxz6j5s/phonelink-products.png",
      tech: [
        "HTML",
        "CSS",
        "Bootstrap",
        "React Bootstrap",
        "React JS",
        "React Router",
        "React Hook Form",
        "Express JS",
        "MongoDB",
        "Firebase",
      ],
    },
    {
      id: 3,
      name: "ToothCare",
      liveLink: "https://tooth-care-fd1e3.web.app/",
      codeLink: "https://github.com/EkramH/tooth-care-client",
      img: "https://i.ibb.co/5K5xHmx/toothcare.png",
      des: "Tooth Care is a Dentist website. Patient can get online appointment from this website. This website is combination of public & protected routing. Used Firebase for authentication (Email/Password & Google Sign In), future plan Facebook sign in.",
      ss1: "https://i.ibb.co/r3WWnnn/toothcare-3.png",
      ss2: "https://i.ibb.co/bPDGqDm/phonelink-2.png",
      tech: [
        "HTML",
        "CSS",
        "Bootstrap",
        "React Bootstrap",
        "React JS",
        "React Router",
        "React Hook Form",
        "Firebase",
      ],
    },
  ];

  const match = projects.find((p) => p.id == id);

  console.log(match);

  return (
    <div className="bg-[#0a192f] h-full font-ralway text-white">
      <div className="container py-16 max-w-[1000px] mx-auto">
        <div className="flex items-start gap-10">
          <div className="w-3/6 ">
            <img className="w-full h-80" src={match.img} alt="" />
            <div className="mt-5 mb-2  flex justify-start items-center ">
              <p className="flex items-center gap-10 justify-center">
                <a
                  className="border-2 border-orange-600 hover:bg-orange-600 transition-all duration-500 ease-in py-2 px-5 rounded-md flex items-center gap-3"
                  href={match.codeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
                <a
                  className="border-2 border-orange-600 hover:bg-orange-600 transition-all duration-500 ease-in py-2 px-5 rounded-md flex items-center gap-3"
                  href={match.liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
              </p>
            </div>
          </div>{" "}
          <div className="w-3/6">
            <h1 className="text-4xl  font-bold">{match.name}</h1>
            <p className="mt-2 text-gray-300 font-semibold ">
              Project sub Heading
            </p>
            <p className="mt-4 list-disc">{match.des}</p>
            <h2 className="text-2xl mt-5 text-orange-600 font-bold">
              Developed By
            </h2>
            <div className="mt-2 ">
              {match.tech.map((d) => (
                <button className="bg-gray-700 text-sm py-1 px-3 font-semibold rounded-sm mr-2 mt-1 mb-1">
                  {" "}
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-semibold mt-10">Project Screenshots</h1>
          <div className=" my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <img className="h-52 w-full" src={match.ss1} alt="" />
            <img className="h-52 w-full" src={match.ss2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
