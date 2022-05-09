import React from 'react'
import { Icon } from '@iconify/react';

function About() {
  return (
    <div id="About" className="h-screen bg-white grid grid-flow-row">
        <div className="place-self-start">
            <span className="relative left-64 top-28 font-bold text-5xl">About Me</span>
        </div>
        
        <div className="place-self-center">
            <span>About Me</span>
        </div>

        <div className="flex flex-row justify-evenly h-fit w-screen">
            <div className="flex">
                <Icon icon="carbon:fire" color="rgb(0,0,0)" width="6em" height="6em" className=""/>
                <div className="flex flex-col justify-center">
                    <span className="font-extrabold text-3xl">XXX</span>
                    <span className="font-semibold text-xl">Projects completed</span>
                </div>
            </div>
            <div className="flex">
                <Icon icon="charm:git-commit" color="rgb(0,0,0)" width="6em" height="6em" className=""/>
                <div className="flex flex-col justify-center"> 
                    <span className="font-extrabold text-3xl">XXX</span>
                    <span className="font-semibold text-xl">Commit made</span>
                </div>
            </div>
            <div className="flex">
                <Icon icon="bi:people" color="rgb(0,0,0)" width="6em" height="6em" className=""/>
                <div className="flex flex-col justify-center pl-3">
                    <span className="font-extrabold text-3xl">XXX</span>
                    <span className="font-semibold text-xl">Satisfied clients</span>
                </div>
            </div>
            
        </div>
        <div className="place-self-start w-full">
            <span className="relative left-64 -top-10 font-bold text-5xl">Practiced Languages</span>

            <div className="h-fit flex flex-row relative w-full">
                    <div className="flex flex-row items-center Carousel">
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="vscode-icons:file-type-js-official" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="logos:c-plusplus" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="vscode-icons:file-type-c3" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="vscode-icons:file-type-csharp2" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="vscode-icons:file-type-cpp3" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="logos:python" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="logos:java" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="logos:mysql" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="logos:react" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="logos:html-5" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="logos:css-3" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="vscode-icons:file-type-php2" width="80" height="80" /> </span>
                    </div>
                    <div className="flex flex-row items-center Carousel">
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="vscode-icons:file-type-js-official" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="logos:c-plusplus" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="vscode-icons:file-type-c3" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="vscode-icons:file-type-csharp2" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="vscode-icons:file-type-cpp3" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="logos:python" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="logos:java" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="logos:mysql" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="logos:react" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="logos:html-5" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="logos:css-3" width="80" height="80" /> </span>
                        <span className="p-5 mx-5 shadow-2xl rounded-3xl"> <Icon icon="vscode-icons:file-type-php2" width="80" height="80" /> </span>
                    </div>

                </div>

               
        </div>
    </div>
  )
}

export default About