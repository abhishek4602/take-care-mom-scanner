   
import React, { Component } from 'react';
 import { useState } from 'react';
import Element from '../Upload/Element.js';
 import { createWorker } from 'tesseract.js';
 import Tesseract from 'tesseract.js';

export default function Upload() {

    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
  
    const [e,setE]=useState([]);
	const changeHandler = (event) => {
		//setSelectedFile(event.target.files[0]);
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
        Tesseract.recognize(
            selectedFile,
            'eng',
            { logger: m => console.log(m) }
          ).then(({ data: { text } }) => {
            setE(text.split(','));
            
            console.log('data: ' + text);
          })
	};

	return(
   <div>
			<input type="file" name="file" onChange={changeHandler} />
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
            <div>
                <img src={selectedFile} alt="cannot display" ></img>
            </div>
            {e.map(e => (
        <Element key={e} e={e}>{e}</Element>
      ))}
           {/* <li spellCheck="true" >{e}</li> */}
		</div>
	)
}