import React from 'react'; 

const ImageScore = (props) =>  {
  //props.ups is upvotes

  //desctructuring .... ups= props.ups
  const {ups, downs } = props;  

  const upsPercent = `${100* ( ups / (ups + downs))}%`;
  const downsPercent = `${100* ( downs / (downs + downs))}%`;

  return(
    <div>
    <h5>
      Up/Down Votes
    </h5>
      <div className="progress"> 
        <div style={{width: upsPercent}}  className="progress-bar progress-bar-success progress-bar-striped"></div> 

        <div style={{width: downsPercent}} className="progress-bar progress-bar-danger progress-bar-striped"> </div>
        </div> 
    </div> 
  );

}; 


export default ImageScore; 
