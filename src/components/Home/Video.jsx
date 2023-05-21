import React from 'react'

export const Video = () => {
  return (
    <div className="videos">
        <iframe 
            width="460"
            height="215" 
            src="https://www.youtube.com/embed/8U6oCm04gmA?controls=0" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>
    </div>
  )
}
