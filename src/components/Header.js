import React, { Component } from 'react'
import logo from './tsysPNG.png';
import { useHistory } from 'react-router-dom';
import Service from './Service';



class Header extends React.Component {

  render() {
    const openInNew = (url) => {
      const newWindow = window.open(url, "_self")
      if (newWindow) newWindow.opener = null
    }

    return (
      <div className="grid grid-cols-3 px-4 py-2 text-white bg-gray-800 border-t border-b border-black shadow-md md:px-16">
        <div className="flex inline-block justify-items-start">
          <div className="my-auto">
            <img className="w-16 my-auto" src={logo} alt="Logo" />
          </div>
        </div>
        <div className="flex justify-center inline-block gap-4">
          <button onClick={() => window.open("http://localhost:3000/service", "_self")} className="flex px-4 py-4 my-auto text-center text-black border-2 rounded-md shadow-md border-bgBlue bg-bgBlue hover:bg-transparent hover:text-white focus:outline-none">
            <svg className="inline-block my-auto" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            <h1 className="mx-auto my-auto ml-2 text-xs font-bold">Сервис</h1>
          </button>
          <button onClick={() => window.open("http://localhost:3000/reports", "_self")}
            className="flex px-4 py-4 my-auto text-center text-black border-2 rounded-md shadow-md border-bgBlue bg-bgBlue hover:bg-transparent hover:text-white focus:outline-none">
            <svg className="inline-block my-auto" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h1 className="mx-auto my-auto ml-2 text-xs font-bold">Извештаи</h1>
          </button>
        </div>
        <div className="flex hidden my-auto md:block md:justify-end ">
          <ul className="justify-end my-auto font-medium cursor-pointer md:flex text-bgBlueTxt">
            <li className="px-5 my-auto text-xs font-bold" href="">Контакт</li>
            <li className="px-5 my-auto text-xs font-bold" href="">За нас</li>
            <button onClick={() => window.open("http://localhost:3000/login", "_self")} className="flex px-4 py-2 text-xs font-bold text-black rounded-md shadow-md bg-bgBlue focus:outline-none">
              <p className="my-auto mr-2">Одјава</p>
              <svg className="inline-block my-auto" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </ul>
        </div>
        <div className="flex justify-end block my-auto md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd" />
          </svg>
        </div>
      </div >
    );
  }
}

export default Header;