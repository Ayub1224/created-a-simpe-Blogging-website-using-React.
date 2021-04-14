import React, { component } from 'react';
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';

const Footer = () => {
    return (
            <IconContext.Provider value={{ size:"2em"}}>
        <div className="footer">
            <footer>
                <div className="footcont">
                    <AiFillLinkedin/>
                    <AiFillTwitterCircle/>
                    <AiFillInstagram/>
                    <FaWhatsapp/>
                    <p>Info:Blogging</p>
                    <p>Terms of use.Private policy</p>
                    <p><small>copyright@ xyz</small></p>
                </div>
            </footer>
        </div>
            </IconContext.Provider>
        );
    }

export default Footer;