import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Registration = () => {

    const { createUser, updateUser } = useContext(AuthContext);

    const notify = () => toast("Registration successfull");
    const notify1 = () => toast("is less than 6 characters don't have a capital letter don't have a special character");

    // handleRegistration
    const handleRegistration = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        if (/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}[\]:;<>,.?~\\/-]{6,}$/.test(password)) {
            createUser(email, password)
                .then(result => {
                    console.log(result.user)
                    updateUser(result.user, {
                        displayName: name
                    })
                        .then(() => { console.log("profile update") })
                        .catch(error => { console.log(error) })
                    notify()
                })
                .catch(error => {
                    console.log(error)

                })
        }
        else {
            notify1()
        }


    }


    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-full">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">registration now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegistration}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" name="name" required />
                            </div>
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

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Registration</button>
                            </div>
                            <p>you have an account <Link to={"/login"} className="btn btn-link">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;