import React from 'react';
// import { Index } from '';

// import { Category } from '';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export const Navbar = () => {    
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem("userData"));
    function logout(e) {
        e.preventDefault();
        localStorage.removeItem("userData");
        navigate("/");
    }
    function LoggedIn() {
        return (
            
            <div class="collapse navbar-collapse  float-right" id="navbarTogglerDemo02">
                <ul className="nav navbar-nav flex-row float-right">
                    <li className="nav-item m-1">
                        <Link className="nav-link active" aria-current="page" onClick={logout} to="/">Logout</Link>
                    </li>
                    <li className="nav-item m-1">
                        <Link className="nav-link active" aria-current="page" to='/orders'>Orders</Link>
                    </li>
                    <li className="nav-item m-1">
                        <Link className="nav-link active" aria-current="page" to='/cart'>Cart</Link>
                    </li>
                </ul>
        
            </div>
        )
    }

    function LoggedOut() {
        return (
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="nav navbar-nav float-right">
                    <li className="nav-item m-1">
                        <Link className="nav-link active" aria-current="page" to='/login'>Login</Link>
                    </li>
                    <li className="nav-item m-1">
                        <Link className="nav-link active" aria-current="page" to='/signup'>Signup</Link>
                    </li>
                    <li className="nav-item m-1">
                        <Link className="nav-link active" aria-current="page" to='/cart'>Cart</Link>
                    </li>
                </ul>
            </div>
        )
    }

    return(
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand float-left" to='/'> Zoop Mart</Link>
                    <form className="d-flex float-left">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    {userData ? <LoggedIn /> : <LoggedOut />}
                    
                </div>
            </nav>

        
    )
};

