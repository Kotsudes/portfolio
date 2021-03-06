import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import "../styles/About.module.scss";
import profile from "../assets/Profile.jpg";
import { Disclosure } from "@headlessui/react";

function About() {
  return (
    <div
      id="About"
      className="h-screen bg-white grid grid-flow-row overflow-hidden"
    >
      <div className="place-self-start">
        <span className="relative left-64 top-28 font-bold text-5xl">
          About Me
        </span>
      </div>

      <div className="grid grid-flow-row place-self-start w-[160vw] relative top-12">
        <div className="relative left-64 place-items-center flex flex-row">
          <div className="relative h-40 w-40 rounded-full bg-gray-400">
            <Image
              src={profile}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              alt=""
            />
          </div>
          <div className="ml-64">
            <div className="relative -left-10 top-[12rem] bg-blue-400 w-[4rem] h-[4rem] rotate-45 rounded-bl-2xl"></div>
            <div className="grid place-items-start grid-flow-row relative -left-4 bg-blue-400 w-[50rem] h-[15rem] rounded-3xl">
              <span className="self-center px-10 pt-8 font-medium text-xl">
                I am Ridge Lowao, fullstack developer from Versailles, France. I
                have rich experience in web programming, also I am good at
                making games and software.
              </span>
              <span className="self-center px-10 font-medium text-xl">
                “Don’t work hard, work smart” is my way of life.
              </span>
              <a href="../assets/Profile.jpg" className="justify-self-end">
                <button className="relative bg-blue-900 hover:bg-blue-700 rounded-xl py-2 px-4 mr-10">
                  <span className="font-semibold text-lg text-white">
                    Download CV
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-evenly h-fit w-screen relative top-12">
        <div className="flex">
          <Icon
            icon="carbon:fire"
            color="rgb(0,0,0)"
            width="6em"
            height="6em"
            className=""
          />
          <div className="flex flex-col justify-center">
            <span className="font-extrabold text-3xl">XXX</span>
            <span className="font-semibold text-xl">Projects completed</span>
          </div>
        </div>
        <div className="flex">
          <Icon
            icon="charm:git-commit"
            color="rgb(0,0,0)"
            width="6em"
            height="6em"
            className=""
          />
          <div className="flex flex-col justify-center">
            <span className="font-extrabold text-3xl">XXX</span>
            <span className="font-semibold text-xl">Commit made</span>
          </div>
        </div>
        <div className="flex">
          <Icon
            icon="bi:people"
            color="rgb(0,0,0)"
            width="6em"
            height="6em"
            className=""
          />
          <div className="flex flex-col justify-center pl-3">
            <span className="font-extrabold text-3xl">XXX</span>
            <span className="font-semibold text-xl">Satisfied clients</span>
          </div>
        </div>
      </div>
      <div className="place-self-center w-full relative top-8">
        <span className="relative left-64 -top-10 font-bold text-5xl">
          Practiced Languages
        </span>

        <div className="h-fit flex flex-row relative w-full py-5 CarouselContainer">
          <div className="flex flex-row items-center Carousel">
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon
                icon="vscode-icons:file-type-js-official"
                width="80"
                height="80"
              />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon icon="logos:c-plusplus" width="80" height="80" />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon
                icon="vscode-icons:file-type-c3"
                width="80"
                height="80"
              />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon
                icon="vscode-icons:file-type-csharp2"
                width="80"
                height="80"
              />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon
                icon="vscode-icons:file-type-cpp3"
                width="80"
                height="80"
              />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon icon="logos:python" width="80" height="80" />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon icon="logos:java" width="80" height="80" />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon icon="logos:mysql" width="80" height="80" />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon icon="logos:react" width="80" height="80" />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon icon="logos:html-5" width="80" height="80" />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon icon="logos:css-3" width="80" height="80" />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon
                icon="vscode-icons:file-type-php2"
                width="80"
                height="80"
              />{" "}
            </span>
          </div>
          <div className="flex flex-row items-center Carousel">
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon
                icon="vscode-icons:file-type-js-official"
                width="80"
                height="80"
              />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon icon="logos:c-plusplus" width="80" height="80" />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon
                icon="vscode-icons:file-type-c3"
                width="80"
                height="80"
              />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon
                icon="vscode-icons:file-type-csharp2"
                width="80"
                height="80"
              />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon
                icon="vscode-icons:file-type-cpp3"
                width="80"
                height="80"
              />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon icon="logos:python" width="80" height="80" />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon icon="logos:java" width="80" height="80" />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon icon="logos:mysql" width="80" height="80" />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon icon="logos:react" width="80" height="80" />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon icon="logos:html-5" width="80" height="80" />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon icon="logos:css-3" width="80" height="80" />{" "}
            </span>
            <span className="p-5 mx-5 shadow-2xl rounded-3xl">
              {" "}
              <Icon
                icon="vscode-icons:file-type-php2"
                width="80"
                height="80"
              />{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
