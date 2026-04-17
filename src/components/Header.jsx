import { useState } from 'react';
import { EnlacesHeader } from './EnlacesNavBar';
import Banner from '/img/banner.jpg'

export function Header({ vista, open, setOpen, toggleMenuHamburguesa }) {
    

    
    
    return (
      <header className="container mx-auto px-2 sm:px-0 py-3 mt-2 ">
        <nav className="py-3 px-1 sm:px-3 flex justify-between degradado-index rounded-md">
          <img
            className="w-8 h-8 rounded-md flex sm:hidden"
            src={Banner}
            alt=""
          />
          <EnlacesHeader indice={1} vista={vista}/>

          {!open ? (
            <div onClick={toggleMenuHamburguesa} className="flex sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="white">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
              </svg>
            </div>
          ) : (
            null
          )}
        </nav>

        {!open ? null : (
          <div className="fixed sm:hidden inset-x-0 top-0 py-2 flex flex-col px-5 border border-[#a5a1a1] degradado-index w-full h-screen mx-auto">
            
            <div onClick={toggleMenuHamburguesa} className="flex sm:hidden justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="25"
                height="25"
                fill="white">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
              </svg>
            </div>

            <EnlacesHeader indice={0} vista={vista} />
          </div>
        )}
      </header>
    );
}

