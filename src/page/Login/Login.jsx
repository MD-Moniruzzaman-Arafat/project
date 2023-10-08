import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { signInUser, googleSignIn, user } = useContext(AuthContext);
    // const navigate = useNavigate()
    console.log(user)

    const notify = () => toast("Login successfull");
    const notify1 = () => toast("your email and password don't match");

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                notify()
                e.target.reset()
            })
            .catch(error => {
                console.log(error)
                notify1()
            })
        // if (email === emailError.email) {
        //     console.log("ok")
        // } else {
        //     console.log("dont match")
        // }
    }


    const googleLogIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result)
                // navigate("/")
                notify()

            })
            .catch(error => {
                console.log(error)
                notify1()

            })
    }

    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-full">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSignIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button><br />
                                <p>you dont have an account <Link to={"/registration"} className="btn btn-link">registration</Link></p>
                                <button onClick={googleLogIn} className="btn btn-outline btn-info"><FcGoogle></FcGoogle>Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;