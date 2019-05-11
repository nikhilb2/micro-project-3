import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import "./jumbo.css"
import SocialIcons from '../socialicons/socialicons'
const Jumbo = (props) => {
  const { style, heading, caption,para, social } = props
  return (
    <div>
      <Jumbotron className={style}>
        {caption
          ? <div className="mt-5">
             <h2>
               { heading }
             </h2>
             <p>{para}</p>
             { social ? <SocialIcons/> : null}
          </div>
          : null
        }

      </Jumbotron>
  </div>
  )
}

export default Jumbo
