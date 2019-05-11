
import React from 'react';
import NavigationBar from './navbar/navbar'
import Jumbo from './jumbo/jumbo'
import Footer from './footer/footer'
const heading = "Hey i'am Mimic."
const para1 = "I am a webdeveloper"
const para2 = "How do you take your coffee?"
const heading2 = "Let's work together..."
const HomePage = (props) => {
    return (
      <div>
        <NavigationBar />
        <Jumbo style="jumbo2" caption={true} heading={heading} para={para1}/>
        <Jumbo style="jumbo3" social={true} caption={true} heading={heading2} para={para2}/>
        <Footer />
      </div>
    )

  }


export default HomePage
