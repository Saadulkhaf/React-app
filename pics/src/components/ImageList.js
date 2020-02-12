import React from 'react';

const ImageList = (props) => {
    const images = props.list.map((lis)=>{
        return <img src={lis.urls.regular} />
    })

    return (
        <div>{images} </div>
    );
}

export default ImageList;