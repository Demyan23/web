import React from "react";
import logotype from "./../../assets/icons/logo.svg"
import {ReactComponent as Facebook} from "./../../assets/icons/facebook.svg"
import {ReactComponent as Twitter} from "./../../assets/icons/twitter.svg"
import {ReactComponent as Instagram} from "./../../assets/icons/instagram.svg"
import "./footer.css"

function Footer() {
    return (
        <footer>
            <img src={logotype} className="logotype" />
            <div className="warning">
                <h2>Самолікування може бути шкідливим для вашого здоров'я</h2>
                <p>2022 IoT © Copyright all rights reserved, Demian Foliush</p>
            </div>
            <div className="social-networks">
                <a href="#"><Facebook className="facebook" /></a>
                <a href="#"><Twitter className="twitter" /></a>
                <a href="#"><Instagram className="instagram" /></a>
            </div>
        </footer>
    )
}

export default Footer;