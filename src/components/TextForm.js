import React, { useState } from 'react'

export default function TextForm(props) {
    const fetchDetails = () => {
        console.log('Fetching details' + text);
        let length = text.length;
        props.setLength(length);
    }

    const textChange = (event) => {
        console.log('Text Changed');
        setText(event.target.value);
    }


    const [text, setText] = useState("Type Something");
    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label mt-3 h4">{props.label}</label>
                    <textarea className="form-control" value={text} onChange={textChange} id="exampleFormControlTextarea1" rows="15"></textarea>
                    {/* <button type="button" className="btn btn-primary mt-4" onClick={fetchDetails}>Fetch Details</button> */}

                </div>
                <h1 className='mt-5 mb-3'>Details</h1>
                <p className='h5'>{text.split(" ").length} words , {text.length} Letters</p>
            </div>
        </>
    )
}
