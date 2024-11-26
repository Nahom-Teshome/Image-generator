import '../index.css'
import React from 'react'
import { IoSend } from "react-icons/io5";

export default function ImageGenerate(){

    const [query, setQuery] = React.useState()
    const [response, setResponse] = React.useState()
        async function handleSubmit(e){
            e.preventDefault()
            const response = await fetch('/api/generate/query',{
                method:"POST",
                body:JSON.stringify({query:query}),
                headers:{
                    'Content-Type':'application/json'
                }
            })

            const jsonData = await response.json()
            setResponse(jsonData.image)
        }


    return(
        <div className="container">  
                {response && <div className="response-container"><img className="response-img" src={`data:image/png;base64,${response}`} alt="Generated Image" /></div>}
            <form onSubmit={handleSubmit} className="form-query">
                <textarea 
                    type="text"
                    className="form-input"
                    onChange={(e)=>{setQuery(e.target.value)}}></textarea> 
                <button className="form-btn"><IoSend/></button>
            </form>

        </div >
    )
}