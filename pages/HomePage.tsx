import React from 'react'
import { Icon } from '@iconify/react';
import Image from 'next/image'


function HomePage() {
  return (
    <div id="Home" className="h-screen bg-blue-900 grid place-items-center">
        <div>
          <div className="h-56 relative">
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              layout='fill'
              objectFit="cover" 
              className="rounded-full"
              alt=""
            />
          </div>
          
          <div className="mt-10 grid grid-cols-1 place-items-center">
            <span className="text-4xl font-sans font-bold text-yellow-600">
              Ridge Lowao
            </span>
            <span className="text-xl font-sans font-bold text text-white">
              Texte de motivation
            </span>
            <div className="my-5 grid grid-cols-2 place-items-center gap-5">
              <a href="https://www.linkedin.com/in/ridge-lowao/" target="_blank">
                <Icon icon="akar-icons:linkedin-box-fill" color="white" width="3em" height="3em"/>
              </a>
              <a href="https://github.com/Kotsudes" target="_blank">
                <Icon icon="akar-icons:github-fill" color="white" width="3em" height="3em" />
              </a>
            </div>
            <a href="#Contact">
              <button className="py-2 px-5 rounded-2xl bg-yellow-600" onClick={() => {
                          
                        }}>
                <span className="[-webkit-text-stroke-width:0.5px] [-webkit-text-stroke-color:rgba(255,255,255,0.2)] text-xl font-sans font-bold  text-blue-900">
                  Hire Me
                </span>
              </button>
            </a>
          </div>
        </div>
     
      </div>
  )
}

export default HomePage