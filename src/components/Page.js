import React from 'react';
import "./componentStyle.css";


const Page = () => {
  return (
    <div className='page-container'>
        <div className='head'>
            <i class="fa-solid fa-x"></i>
            <div>Video shows launch of ISRO's heaviest rocket with 36 satellites on board</div>
        </div>
        <img src='./images/first-img.png' />
        <div>OneWeb has shared a video showing the launch of ISRO's heaviest rocket carrying the startup's 36 broadband satellites on board. The LVM3 rocket lifted off from the Sriharikota spaceport just after midnight, marking its first commercial satellite launch. At 1.42 am on Sunday, the ISRO confirmed that the mission was completed successfully, with all 36 satellites placed into intended orbits."</div>
        <div>
            <span>23 Oct 2022,Sunday</span>
            <span>10:47 am</span>
            <span>by Hiral Goyal</span>
        </div>
    </div>
  )
}

export default Page;