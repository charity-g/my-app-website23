import '../../App.css';
import React from 'react';
import './Surprise.css';
import video_path from "./surprise1.mp4";
//<img src="https://source.unsplash.com/random?nature"></img>
      

function Surprise() {
   return (
      <>
      <div className='media_container'>
      <video width="320" height="240" autoPlay={true} muted>
            <source src={video_path} type="video/mp4"/>
            Your browser does not support the video tag.
      </video>

      </div>
      </>
   );
}

export default Surprise;
