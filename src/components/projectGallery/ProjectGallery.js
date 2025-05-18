import React, { useState } from "react";
import "./ProjectGallery.css";

const ProjectGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    if (!images || images.length === 0) {
        return null;
    }

    return ( <
        div className = "project-gallery" >
        <
        div className = "gallery-grid" > {
            images.map((image, index) => ( <
                div key = { index }
                className = "gallery-item"
                onClick = {
                    () => setSelectedImage(image)
                } >
                <
                img src = { image }
                alt = { `Proje görüntüsü ${index + 1}` }
                /> < /
                div >
            ))
        } <
        /div>

        {
            selectedImage && ( <
                div className = "gallery-modal"
                onClick = {
                    () => setSelectedImage(null)
                } >
                <
                div className = "modal-content" >
                <
                span className = "close-button" > & times; < /span> <
                img src = { selectedImage }
                alt = "Büyütülmüş görüntü" / >
                <
                /div> < /
                div >
            )
        } <
        /div>
    );
};

export default ProjectGallery;