/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../sheard/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import {  FcGoogle } from 'react-icons/fc'
import Swal from 'sweetalert2'


const Login = () => {

    const {signIn} = useContext(AuthContext);
    const {googleSignIn} = useContext(AuthContext);
    const [alert, setAlert] = useState('');
    const [error, setLoginError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)

    const handleLogin = (e) =>{
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        setAlert('');
        setLoginError('');

        signIn(email, password)

        .then(result =>{
            console.log(result.user);
            e.target.reset();

            setAlert(Swal.fire(
              'Good job!',
              'Login successfully ',
              'success'
            ))
            navigate(location?.state ? location.state : '/' );
        })

        .catch(error =>{
            console.error(error)
            setLoginError(Swal.fire({
              icon: 'error',
              text: 'Something went wrong!'
            }))
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
            <h2 className="text-3xl my-10 text-center">Login your account</h2>
          <form onSubmit={handleLogin} className=" w-4/5 md:w-3/4 lg:w-1/2 mx-auto">
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
          <button className="btn bg-blue-200 font-medium">Login</button>
          <button onClick={handleGoogle} className="btn font-medium bg-blue-200 mt-4"><FcGoogle className="mr-2 w-4 h-4"></FcGoogle>Google Sign In</button>
        </div>
      </form>
      <p className=" text-center mt-4">Do not have an account<Link className=" text-blue-600 font-bold" to="/registration"> Register</Link></p>
        </div>
    );
};

export default Login;