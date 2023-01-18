import React from 'react'
import './rightsidebar.css'
import {CgHashtag} from 'react-icons/cg'

const Rightsidebar = () => {
  return (
    <div className="rightside_container">
      <div className="feed_conatiner">
        <div className="linkdin">
          <p>Add your feed</p>
        </div>
        <div className="hashtags_container">
        <div className="website">
          <div className="hashtag_logo">
          <CgHashtag/>
          </div>
          <div className="Hashtag">
            <p>#Linkedin</p>
            <button>Follow</button>
          </div>
        </div>
        <div className="website">
          <div className="hashtag_logo">
          <CgHashtag/>
          </div>
          <div className="Hashtag">
            <p>#Website</p>
            <button>Follow</button>
          </div>
        </div>
        </div>
        <div className="all_recomontadtion">
          
          <p>view all recomontadtion</p>
        </div>
      </div>
    </div>
  )
}

export default Rightsidebar