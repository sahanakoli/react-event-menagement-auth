/* eslint-disable no-unused-vars */

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Navbar from "../../sheard/Navbar/Navbar";
import {  FcGoogle } from 'react-icons/fc'
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";



const Registration = () => {
    const {createUser} = useContext(AuthContext);
    const {googleSignIn} = useContext(AuthContext);

    
    const handleRegistration = (e) =>{
       e.preventDefault();
       

       const form = new FormData(e.currentTarget);
       const name = form.get('name');
       const photo = form.get('photo');
       const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo,email, password);


        if(password.length < 6){
          Swal.fire({
            icon: 'error',
            text: 'Password should be at least 6 characters or longer'
          })
          return;
        }
         if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&?*]).{6,}$/.test(password))){
        Swal.fire({
            icon: 'error',
            text: 'Password should be a capital letter and a special character'
          })
          return;
        }

        createUser(email, password)
        .then(result =>{
            console.log(result.user)
            e.target.reset();
           
           updateProfile(result.user, {
            displayName: name,
            photoURL:"https://example.com/jane-q-user/profile.jpg"
           })
           .then( () => console.log())
            
           

            Swal.fire(
              'Good job!',
              'Registration successfully ',
              'success'
            )
        })
        .catch(error =>{
            console.error(error)
            Swal.fire({
                  icon: 'error',
                  text: 'Password and Email wrong'
                })
        })
    }
    const handleGoogle = () =>{
      googleSignIn()
      .then(result =>{
          console.log(result.user)
          
      })
      .catch(error =>{
          console.error(error)
      })
  }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl my-10 text-center mt-16">Registration your account</h2>
          <form onSubmit={handleRegistration}  className=" w-4/5 md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
          <span className="label-text font-medium">Name</span>
          </label>
            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Photo URL</span>
          </label>
            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-200 font-medium">Registration</button>
          <button onClick={handleGoogle} className="btn bg-blue-200 mt-4"><FcGoogle className="mr-2 w-4 h-4"></FcGoogle>Google Sign In</button>
        </div>
      </form>
      <p className=" text-center mt-4">Do not have an account<Link className=" text-blue-600 font-bold" to="/login"> Login</Link></p>
        </div>
    );
};

export default Registration;