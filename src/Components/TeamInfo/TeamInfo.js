import React from 'react';
import maleImage from '../../images/male.png';
import femaleImage from '../../images/female.png';
import './TeamInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMapMarkedAlt,
    faFlag,
    faVenusMars,
    faFutbol,
    faShieldAlt
} from '@fortawesome/free-solid-svg-icons';
import SocialLinks from '../SocialLinks/SocialLinks';
import Footer from '../Footer/Footer';


const TeamInfo = (props) => {
    const { strTeam, intFormedYear, strLeague, strSport, strGender, strCountry, strDescriptionEN } = props.team;
    
    return (
        <div className="container">
            <div className="card teamDetail p-3">
                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="card-body align-middle">
                            <h1 className="card-title"> {strTeam} </h1>
                            <h5><FontAwesomeIcon icon={faFlag} />  Founded : {intFormedYear} </h5>
                            <h5><FontAwesomeIcon icon={faFutbol} />  League : {strLeague} </h5>
                            <h5><FontAwesomeIcon icon={faShieldAlt} />  Sports Type : {strSport} </h5>
                            <h5><FontAwesomeIcon icon={faVenusMars} />  Gender : {strGender} </h5>
                            <h5><FontAwesomeIcon icon={faMapMarkedAlt} />  Country : {strCountry} </h5>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={strGender === 'Female' ? femaleImage : maleImage} alt="" />
                    </div>
                </div>
            </div>
            <div className="description">
                <p>{strDescriptionEN}</p>
            </div>
            <SocialLinks team={props.team} />
            <Footer/>
        </div>
    );
};

export default TeamInfo;