import React from 'react'; 
import ImageDetail from './imageDetail'; 

const IMAGES = [
  {title: "Cup", link:"http://dummyimage.com/600x400"},
  {title:"Can", link: "http://dummyimage.com/600x400"},
  {title:"Phone", link: "http://dummyimage.com/600x400"}
];

//ImageList component
const ImageList = () =>  {
    const RenderedImages = IMAGES.map(function(image){
          return <ImageDetail /> 
    });

    return(
      <ul>    
        {RenderedImages}
      </ul>    
    );
}; 

// export component
export default ImageList; 


