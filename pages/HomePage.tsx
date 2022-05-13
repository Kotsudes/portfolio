import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import profile from "../assets/Profile.jpg";

function HomePage() {
  return (
    <div id="Home" className="h-screen bg-blue-900 grid place-items-center">
      <div>
        <div className="h-56 relative">
          <Image
            src={profile}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            alt=""
          />
        </div>

        <div className="mt-10 grid grid-cols-1 place-items-center">
          <span className="text-4xl font-sans font-bold text-gray-100">
            Ridge Lowao
          </span>
          <span className="text-xl font-sans font-bold text text-gray-300">
            Texte de motivation
          </span>
          <div className="my-5 grid grid-cols-2 place-items-center gap-5">
            <a
              href="https://www.linkedin.com/in/ridge-lowao/"
              target="_blank"
              rel="noreferrer"
              className="[color:rgb(200,200,200)] hover:[color:rgb(255,255,255)]"
            >
              <Icon
                icon="akar-icons:linkedin-box-fill"
                width="3em"
                height="3em"
              />
            </a>
            <a
              href="https://github.com/Kotsudes"
              target="_blank"
              rel="noreferrer"
              className="[color:rgb(200,200,200)] hover:[color:rgb(255,255,255)]"
            >
              <Icon
                icon="akar-icons:github-fill"
                width="3em"
                height="3em"
                className=""
              />
            </a>
          </div>
          <a href="#Contact" rel="noreferrer">
            <button className="py-2 px-5 rounded-2xl bg-gray-100 text-blue-900 hover:bg-gray-400 hover:text-blue-700">
              <span className="[-webkit-text-stroke-width:0.5px] [-webkit-text-stroke-color:rgba(255,255,255,0.2)] text-xl font-sans font-bold">
                Hire Me
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
