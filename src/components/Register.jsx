import React from 'react'
import loginImg from '../assets/login.jpg'

export default function Login(){
    return(
	<div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
	    <div className="hidden sm:block">
		<img className="w-full h-full object-cover"
		     alt="Login Image"
		     src={loginImg} />
	    </div>
	    <div className="bg-gray-800 flex flex-col justify-center">
		<form
		    className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
		>
		    <h2
			className="text-4xl text-white font-bold text-center"
		    >
			REGISTER
		    </h2>
		     <div className="flex flex-col text-gray-400 py-2">
			<label htmlFor="">Full Name</label>
			 <input name="" className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
				type="text" value=""/>
		    </div>
		    <div className="flex flex-col text-gray-400 py-2">
			<label htmlFor="">Email</label>
			<input name="" className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="email" value=""/>
		    </div>
		    <div className="flex flex-col text-gray-400 py-2">
			<label htmlFor="">Password</label>
			<input name="" className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="password" value=""/>
		    </div>
		    <div className="flex justify-between text-gray-400 py-2">
			<p className="flex items-center">
			    <input className="mr-2" name="" type="checkbox" value=""/>
			    Remember Me
			</p>
			<p className="text-center text-blue-500">
			    <a href="">Forgot Password?</a>
			</p>
		    </div>
		    <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/30 text-white font-semibold rounded-lg">Log In</button>
		    <p className="text-center text-white">
			Don't have account?
			<a href="" className="ml-2 text-blue-500">Sign Up</a>
		    </p>
		</form>
	    </div>
	</div>
    )
}
