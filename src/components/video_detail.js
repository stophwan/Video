import React from 'react';

export default function VideoDetail({video}){
    if (!video){
        return(<div className="text-center">No video</div>)
    }
    console.log(video)
    return(
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" 
            title="video"
            src={`https://www.youtube.com/embed/${video.id}`} 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

    )
}

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/535Q2OozWJQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
{/* <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div> */}