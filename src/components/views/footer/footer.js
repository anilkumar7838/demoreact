import React from 'react'
import playstore from "../../../images/playstore.png";
import appstore from "../../../images/Appstore.png";
import "./footer.css";

const footer = () => {
  return (
    <footer>
        <div className="leftfooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={playstore} alt="playstore"/>
            <img src={appstore} alt="Appstore"/>
        </div>
        <div className="midfooter">
            <h1 id="logo">Un Limit It</h1>
            <p>High Quality is our first Priority</p>
            <p>Copyrights 2022 &copy; Akdev</p>
        </div>
        <div className="rightfooter">
            <h4>Follow Us</h4>
            <a href="">Instagram</a>
            <a href="">Youtube</a>
            <a href="">Facebook</a>
        </div>
    </footer>
  )
}

export default footer