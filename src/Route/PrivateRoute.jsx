
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <><span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span></>;
    }
    if (user) {
        return children;
    }
    return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute; 