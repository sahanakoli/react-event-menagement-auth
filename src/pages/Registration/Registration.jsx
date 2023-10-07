
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Navbar from "../../sheard/Navbar/Navbar";



const Registration = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegistration = (e) =>{
       e.preventDefault();

       const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        createUser(email, password)
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
          <form onSubmit={handleRegistration}  className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className=" text-center mt-4">Do not have an account<Link className=" text-blue-600 font-bold" to="/login"> Login</Link></p>
        </div>
    );
};

export default Registration;