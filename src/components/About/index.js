import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <div>
      <div className='boxContainer'>
        <div className='boxLeft'>
          <img
            src={profilePic}
            id='profilePicture'
            alt='blonde woman with glasses'
          ></img>
        </div>
        <div className='boxRight'>
          <h2>About Me</h2>
          <p>Hello! My name is Sarah King and I am a data engineer from Connecticut. It's very nice to meet you! My main languages are Python, HTML/CSS, Javascript, and mySQL. 
                    I currently work for a market analysis firm called Bridgeton Research Group where we use Python to analyze and predict trends in the commodities and financials markets.
                    I have also recently graduated from a bootcamp course through Uconn to strengthen my web development skills.
                </p>
                <p>In my free time, I like to make video games. My most recent work in progress is a top-down 2-D ARPG called Pixel Witch. 
                    I also have a tabby cat named Rowan who likes to help me code (at least, he thinks he's helping, but really all he does is walk on my keyboard and chew on my wires).
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}

export default About;
