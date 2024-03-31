import video_path from "./surprise1.mp4";

function Surprise() {
   return (
       <div className="media-container">
         <video src={video_path} alt='You get rickrolled!'></video>
       </div>
   )
}

export default Surprise;