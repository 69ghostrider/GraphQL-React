import React from 'react'
export default function Movie(props) {
    return (
        <div className='card'>
            <img className="card-img-top" style={{width: 18 + 'rem'}} src="https://bit.ly/3RCmjdE" alt="Card image cap" width="100%" heigh="250px"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.genre} - {props.year}</p>
                </div>
        </div>
    )
}


// how to add numbers ? 