import Link from 'next/link'
import React from "react";



const Navbar = () => {
    return (
      <div className="container" id="Navbar">
        <div className="row">
          <header className="d-flex flex-wrap justify-content-center pt-3">

            <div className="stacked-title pt-3 mb-md-0 me-md-auto link-body-emphasis">
              <a
                href="/"
                className="d-flex link-module align-items-center mb-0 mb-md-0 me-md-auto link-body-emphasis link-color-unique text-decoration-none"
              >
                <span className="fs-4">Jason Alexander's Personal Website</span>
              </a>
              <span className="fs-6">
                {/*<i id="subtitle">Website so bad it gives actual programmers cancer</i>*/}
              </span>
            </div>
            <ul className="nav ">
              
              {/* <li className="nav-item pt-3 ">
                <Link href="/about" className="nav-link link-module">
                <span>About</span>
                </Link>
              </li> */}
            </ul>
          </header>
          <header className="d-flex flex-wrap justify-content mb-5 pb-2 border-bottom"></header>
        </div>
      </div>
      
    );
  };
  
  export default Navbar;
  