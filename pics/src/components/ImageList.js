import React from 'react';

const ImageList = (props) => {
    const images = props.list.map((image)=>{
        return <img key={image.id} alt={image.description} src={image.urls.regular} />
    })

    return (
        <div>{images} </div>
    );
}

export default ImageList;