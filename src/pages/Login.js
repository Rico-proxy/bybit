import React from 'react'
import Padlock from '../components/Padlock'
const Login = () => {
  return (
    <main className="flex min-h-screen bg-gray-100 items-center justify-center">
      <div className="text-center">
        <div className="mb-4">
          <Padlock/>
        </div>
        <h2 className="text-xl font-bold mb-4 text-black">Welcome, Please Enter Site Access Code</h2>
        <div className="bg-white p-12 h-60 border border-gray-300 rounded-lg shadow-2xl  mx-auto">
          {/* Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="code" className="text-xl font-medium text-gray-700 block mb-2 text-start">Enter Code</label>
              <input type="text" id="code" name="code" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Access Code" required />
            </div>
            
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Login