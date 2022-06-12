import React, {useEffect, useState} from 'react';
import unknown from "./unknown-bear-01.jpg";
import "./Mainpage.css";
import "./button40.css";
import "./button85.css";


export default function Minter() {

    const [bears, setBears] = useState(1);
    
    const adder = () => {
        let a = bears + 1;
        a = (a < 5) ? a : 5;
        setBears(a);
    };

    const subtractor = () => {
        let a = bears - 1;
        a = (a > 0) ? a : 1;
        setBears(a);
    };

    const ethCalc = () => {
        return (<span>{bears * 0.1} ETH</span>)
    }

    return (
        <div className="basics minter">
                <h2>BEARISSIMUS NFT MINTER</h2>
                <p className="description descriptionMinter">
                <a className="royalties"> ALL ROYALTY FEES GO BACK TO THE COMMUNITY.</a> 
                    <div className="info">Instagram <a href="https://www.instagram.com/bearissimus/" className="royalties mintDate insta" target="_blank">
                    @bearissimus</a><br/>Chain: <u className="mintDate_">Polygon</u></div>
                </p>
                <img src={unknown} width="300px" height="300px" className="bear unknown" alt="bear example"/>
                <div className="wrapper">
                    <span className="minus" onClick={subtractor}>-</span>
                    <span className="num">{bears}</span>
                    <span className="plus" onClick={adder}>+</span> 
                </div>
                <div className="buttonContainer">
                    <button className="button-85">
                    <div className="insideButton">
                        MINT BEARS: {bears} <br/>
                        (≈{(bears * 0.1).toFixed(1)} ETH + gas)
                    </div>
                    </button>
                </div>
            </div>
    )
}