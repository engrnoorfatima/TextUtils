import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("Converted to UpperCase")
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("success", "Converted to Uppercase");
  }

  const handleLoClick = () =>{
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("success", "Converted to Lowercase");
  }

  const handleClearClick = () =>{
    const newText = "";
    setText(newText);
    props.showAlert("success", "Cleared");
  }

  const handleCopyClick = () =>{
    // let copyText = document.getElementById("myBox");
    // copyText.select();
    // copyText.setSelectionRange(0,9999);  // no need
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("success", "Copied to Clipboard");
  }

  const RemoveExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("success", "Removed Extra Spaces");
  }

  const handleOnChange = (event) =>{
    // console.log("OnChange")
    setText(event.target.value);
  }
    const [text, setText] = useState("");
  return (
    <>
    <div className='container'>
      <div className="mb-3">
      <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
      <textarea style={{backgroundColor: props.mode==='dark'?'#332d9b':'white', color: props.mode==='dark'?'white':'black'}}
       className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
       </div>
       <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
       <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
       <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
       <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy</button>
       <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
