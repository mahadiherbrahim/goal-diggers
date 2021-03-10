import React from 'react';
import './Header.css'


const Header = (props) => {
    const logo = props.logo;
    return (
        <div className="container-fluid header" >
            {
                logo ? <img src={logo} className="mx-auto d-block" alt="" />
                    : <h1 className="text-center">
                        GOA<span className="headerText">L</span> DIGGER<span className="headerText">S</span>
                    </h1>
            }
        </div>
    );
};

export default Header;