import React from 'react'
import logo from './tsysPNG.png';

class Login extends React.Component {




  render() {

    const openInNew = (url) => {
      const newWindow = window.open(url, "_self")
      if (newWindow) newWindow.opener = null
    }

    return (
      <div className="py-20 ">
        <img className="w-32 mx-auto mb-10" src={logo} alt="Logo" />
        <div className="px-12 py-8 mx-auto bg-gray-800 border rounded-md md:w-1/3 border-bgBlue ">
          <h1 className="text-xs font-bold text-center text-white">Email:</h1>
          <input placeholder="example@example.com" className='w-full px-2 py-2 mt-2 text-xs text-center text-white bg-gray-800 border rounded-md font-italic focus:outline-none border-bgBlue'></input>
          <h1 className="mt-8 text-xs font-bold text-center text-white">Password:</h1>
          <input placeholder="Password" type="password" className='w-full px-2 py-2 mt-2 text-xs text-center text-white bg-gray-800 border rounded-md font-italic focus:outline-none border-bgBlue'></input>
        </div>
        <button onClick={() => window.open("http://localhost:3000/homepage", "_self")} className="flex justify-center px-4 py-4 mx-auto my-auto mt-8 text-center text-black border-2 rounded-md shadow-md border-bgBlue bg-bgBlue hover:bg-transparent hover:text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          <h1 className="mx-auto my-auto text-xs font-bold">Најава</h1>
        </button>
      </div>

    );
  }
}

export default Login;