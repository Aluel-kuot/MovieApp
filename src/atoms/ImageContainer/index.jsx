import React from "react";
const IMAGE_BASE_URL=process.env.REACT_APP_IMAGE_BASE_URL
// import  "/.style.css"


const ImageContainer=({props})=>{
    return(
        <div className="image-container">
<img src={`${IMAGE_BASE_URL}${props.poster_path}`} alt={props.title} />
                </div>
    )
}
export default ImageContainer;