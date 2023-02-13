import { useContext } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { ProfileContext } from "../context/DataContext";

const Details = () => {
    const [profile, setProfile] = useContext(ProfileContext);
    console.log(profile);
    const params = useParams();
    const location = useLocation();
    // console.log(params, location);
    return (
        <div>
            <h1 className="fs-5 fw-light">Hello {params.name} 👋</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
                quos.
            </p>
            <Link to="/about">go back</Link>
        </div>
    );
};

export default Details;
