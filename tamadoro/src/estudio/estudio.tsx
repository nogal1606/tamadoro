import React, { useState } from 'react'
import temporizador1 from './estudio'

function Estudio(){
return(<div>
        <h1>Temporizador</h1>
        <div>
        <label htmlFor="">tiempo estudio</label>
            <br />        
            <button type="button" className="btn btn-success" onClick={temporizador1}>60 + 15</button>
            <button type="button" className="btn btn-success">50 + 10</button>
            <button type="button" className="btn btn-success">25 + 5</button>
        </div>
        <input className="btn btn-primary" type="reset" value="Start"/> 
        <input className="btn btn-primary" type="reset" value="Stop"/> 
        <input className="btn btn-primary" type="reset" value="Reset"/>       
    </div>
)
}
export default Estudio