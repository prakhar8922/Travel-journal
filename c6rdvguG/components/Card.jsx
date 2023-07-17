import React from "react";

export default function Card(props){
    return(
        <div className="card">
               <div className="card-image-div">
                <img
                    src={props.imageUrl}
                    className={props.class}
                    alt={props.title}
                />
            </div>
             <div className="card-text">
                <div className="card-location">
                    <img src="../images/pin.svg" className="card-pin" alt="pin-icon" />
                    <span className="location">{props.location}</span>
                    <p className="grey">
                        <a
                            href={props.googleMapsUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            View on Google Maps Link
                        </a>
                    </p>
                </div>
                <h2 className="card-title">{props.title}</h2>
                <div className="card-date">
                <span className="start-date">{props.startDate}</span>
              <span className="dash"> - </span>
                    <span className="end-date">{props.endDate}</span>
                </div>
                <p className="card-description">
                    <span>{props.description}</span>
                </p>
            </div>
            
        
        </div>
    )
}