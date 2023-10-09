import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {

    const { user, loder } = useContext(AuthContext);
    console.log(user)

    if (loder) {
        return <span className="loading loading-spinner loading-lg items-center"></span>
    }

    if (user) {
        return children
    }

    return <Navigate to={"/login"}></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;