import { withPrefix } from 'gatsby'
import React from "react"
import iphoneFrame from  "../images/iphone8.png"

const DeviceScreenshot = ({ imagesrc, videourl }) => (
  <div class = "iphone-container">
    <div class = "iphone-frame">
      
      {imagesrc && <img src = {withPrefix(imagesrc)} alt="screenshot"  class = "partner-img" /> }
      {videourl && <iframe src={videourl} class = "partner-video" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>}
      
    </div>
  </div>
)

export default DeviceScreenshot