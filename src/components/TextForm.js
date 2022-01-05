import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    
    const handleOnChange = (event)=>{
        //console.log('click to change');
        setText(event.target.value);
    }

    const handleSentenceClick = ()=>{
        const arr = text.split("\n");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
        }
        const newtext = arr.join("\n");
        setText(newtext);
        props.showAlert('Converted to Sentence', 'success');
    }

    const handleCapitalizedClick = ()=>{
        let pgtext= text
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
        
        const arr = pgtext.split("\n");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }

        let newtext = arr.join("\n");
        setText(newtext);
        props.showAlert('Converted to Capitalized', 'success');
    }

    const handleUpClick = ()=>{
        let newtext= text.toUpperCase();
        setText(newtext);
        props.showAlert('Converted to UPPER CASE', 'success');
    }

    const handleLoClick = ()=>{
        let newtext= text.toLowerCase();
        setText(newtext);
        props.showAlert('Converted to lower case', 'success');
    }

    const handleExtraSpaceClick = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(' '))
        props.showAlert('Removed Extra Space', 'success');
    }

    const handleReverseText = () => {
        let Text = text.split("");
        let reverseText = Text.reverse().toString().replaceAll(",", "");
        setText(reverseText)
        props.showAlert('Converted to Reverse Text', 'success');
    }

    const handleCopyClick = ()=>{
        let textBox = document.getElementById('textBox');
        textBox.select();
        navigator.clipboard.writeText(textBox.value);
        props.showAlert('Text Copied to clipboard!', 'success');
    }

    const handleDownloadClick = ()=>{
        const element = document.createElement("a");
        const file = new Blob([document.getElementById('textBox').value], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        props.showAlert('Text downloaded complete', 'success');
    }

    const handleClearClick = ()=>{
        let newtext= '';
        setText(newtext);
        props.showAlert('Text cleared', 'success');
    }

    let textWordCount = text.length>0 ? text.split(' ').length: '0';
    
    return (
        <>
        <div className="container mt-5" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="form-group">
                <textarea value={text} className="form-control" style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'}} id="textBox" onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mt-2 mx-1" onClick={handleSentenceClick} >Sentence Case</button>
            <button className="btn btn-primary mt-2 mx-1" onClick={handleCapitalizedClick} >Capitalized Case</button>
            <button className="btn btn-primary mt-2 mx-1" onClick={handleUpClick} >UPPER CASE</button>
            <button className="btn btn-primary mt-2 mx-1" onClick={handleLoClick} >lower case</button>
            <button className="btn btn-primary mt-2 mx-1" onClick={handleExtraSpaceClick} >Remove Extra Space</button>
            <button className="btn btn-primary mt-2 mx-1" onClick={handleReverseText} >Reverse Text</button>
            <button className="btn btn-primary mt-2 mx-1" onClick={handleCopyClick} >Copy Text</button>
            <button className="btn btn-primary mt-2 mx-1" onClick={handleDownloadClick} >Download Text</button>
            <button className="btn btn-primary mt-2 mx-1" onClick={handleClearClick} >Clear</button>
        </div>

        <div className="container mt-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h3>Your text summery</h3>
            <p>Characters Count: {text.length} | Words Count: {textWordCount} | Line Count: {text.length>0? text.split("\n").length: '0'}  </p>
            <p>{0.008 * textWordCount} Minutes Reading Time</p>
            <h3>Preview</h3>
            <p>{text.length>0? text: "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
