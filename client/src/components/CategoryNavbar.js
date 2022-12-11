import React from 'react';
import {Link} from 'react-router-dom';
export const CategoryNavbar=()=>{
    return(
        <nav className=" navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row">
            {/* <div className="container"> */}
            <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerCategories" aria-controls="navbarTogglerCategories" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon btn-secondary"></span>
            </button>

                <ul className="nav navbar-nav flex-row float-right">
                    <li className="nav-item m-1">
                        <Link className="nav-link active" aria-current="page" to='/login'>A</Link>
                    </li>
                    <li className="nav-item m-1">
                        <Link className="nav-link active" aria-current="page" to='/signup'>B</Link>
                    </li>
                    <li className="nav-item m-1" style={{ 'float': 'right' }}>
                        <Link className="nav-link active" aria-current="page" to='/cart'>C</Link>
                    </li>
                </ul>

            {/* </div> */}
        </nav>
    )
}