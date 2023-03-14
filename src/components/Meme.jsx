import React from "react";

export function Meme(){



    function getMemeImage() {
        // const memesArray = 
    }

    return (
        <main>
            <div className="meme-form">
                <input className="meme-form-input" type="text" placeholder="Top text"></input>
                <input className="meme-form-input" type="text" placeholder="Bottom text"></input>
                <button className="meme-form-button" onClick={getMemeImage}>Get a new meme</button>
            </div>
        </main>
    )
}