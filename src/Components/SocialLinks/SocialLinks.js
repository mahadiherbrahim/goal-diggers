import React from 'react';
import Facebook from '../../images/Facebook.png';
import Twitter from '../../images/Twitter.png';
import YouTube from '../../images/YouTube.png';
import './SocialLinks.css'


const SocialLinks = (props) => {
    const { strFacebook, strTwitter, strYoutube } = props.team;
    return (
        <div className="social-link d-flex">
            <a href={'https://' + strFacebook} target="__blank">
                <img src={Facebook} alt="" />
            </a>
            <a href={'https://' + strTwitter} target="__blank">
                <img src={Twitter} alt="" />
            </a>
            <a href={'https://' + strYoutube} target="__blank">
                <img src={YouTube} alt="" />
            </a>

        </div>
    );
};

export default SocialLinks;