import React, {useEffect, useState} from 'react';
import Minter from "./Minter.js";
import "./Mainpage.css";
import "./button40.css";
import "./button85.css";

export default function Mainpage() {

    const [imgLink, setImgLink] = useState("");
    const [minter, enableMinter] = useState(false);

    useEffect(() => {
        setImgLink(randomImgLink());
    }, []);

    const randomImgLink = () => {
        let tokenId = Math.floor(Math.random() * 7);
        tokenId = (tokenId === 0) ? 1 : tokenId;
        return `https://gateway.pinata.cloud/ipfs/QmYhN13Ewdq93QyfJvMjq7WGhqvaSjX6iCGNwGZFM8FQWp/${tokenId}.jpeg`;
    }

    if (!minter) {
        return (
            <div className="basics">
                <img src={imgLink} width="300px" height="300px" className="bear" alt="bear example"/>
                <h2>Bearissimus NFT project</h2>
                <p className="description">
                    A collection of 400 randomly generated unique bears. 
                <a className="royalties"> ALL ROYALTY FEES WILL GO BACK TO THE COMMUNITY</a>. 
                    Every 1 ether recieved in royalty fees will be
                    redistributed among the Bearissimus holders. <br/> <br/>
                    <div className="info">
                        <span>Chain: <u className="mintDate_">Polygon</u></span> <br/>
                        Instagram: <a href="https://www.instagram.com/bearissimus/" className="royalties insta mintDate" target="_blank">
                            @bearissimus
                        </a><br/>
                        Discord coming soon...<br/>
                        {/* <mint className="mintDate">MINT DATE</mint>: <u className="mintDate_">
                            <b>JULY 1ST, 2022</b>
                        </u> */}
                    </div>
                    </p>
                <button className="button-85" onClick={() => enableMinter(true)}>
                    <div className="insideButton">MINTER PAGE</div>
                </button>
            </div>
        );
    } else {
        return (
            <Minter></Minter>
        );
    }
}