import React from 'react';
import errorImage from '../../images/errorPage.png'
const NotFound = () => {
    return (
        <div className="text-center">
            <img src={errorImage} alt="Error" />
        </div>
    );
};

export default NotFound;