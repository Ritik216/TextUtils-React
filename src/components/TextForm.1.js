import React, { useState } from 'react';


export default function TextForm(props) {

    const handleUpperCase = () => {
        // console.log(text)
        // console.log("Button Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Upper Case","success")
   
    };

    const handleLowerCase = () => {
        // console.log(text)
        // console.log("Button Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to Lower Case","success")

    };
    const handleOnChange = (event) => {
        setText(event.target.value);

    };
    const [text, setText] = useState("");
    // console.log(text);
    // console.log(setText);
    return (
        <>
            <div className='container' id='TextForm' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#149154' : 'white', color: props.mode==='dark'?'white':'black' }} id="myBox" rows="8" placeholder='Enter Text Here'></textarea>
                </div>
                <button className="btn btn-primary textbutton" onClick={handleUpperCase}>Convert to Upper Case</button>
                <button className="btn btn-primary textbutton" onClick={handleLowerCase}>Convert to Lower Case</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
            </div>
        </>
    );
}
