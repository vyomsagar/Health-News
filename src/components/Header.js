import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { gsap } from 'gsap';


function Header() {
    useEffect(() => {
    
            var siteName = document.querySelector("#siteName h1");
            var sname = siteName.textContent;
            
            var newname = sname.split("");
            
            var newSiteName = "";
            
            newname.forEach(function(char, index){
                if(index<6){
                newSiteName += `<span class="rightName">${char}</span>`;
            }
            else if (index ==6){
                newSiteName += `<span class="rightName">&nbsp</span>`;
            }
            else{
                newSiteName += `<span class="leftName">${char}</span>`;
            }
            })
            
            siteName.innerHTML= newSiteName;
            
            gsap.from("#siteName h1 .rightName",{
                opacity:0,
                y:150,
                duration:0.7,
                stagger:0.2
            })
            gsap.from("#siteName h1 .leftName",{
                opacity:0,
                y:50,
                duration:0.7,
                stagger:-0.2
            })
            
            gsap.from("#siteName p",{
                x:-150,
                duration:1
            })
            
    })

  return (
    <header className="header">
        <div className='header-L' id='siteName'>
            {/* <img src={logo} alt="logo" /> */}
            <span className='icon'>
            <ion-icon name="medkit-outline"></ion-icon>
            </span>
            <div className="header-l">
            <h1>Health News</h1>
            <p>created by Vyom  Sagar</p>
            </div>
        </div>
        <nav>
            <Link to="/">
                <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                <span className='text'>Home</span>
            </Link>
            <Link to="/bookmarks">
                <span className="icon"><ion-icon name="document-attach-outline"></ion-icon></span>
                <span className='text'>Bookmarks</span>
            </Link>
      </nav>
    </header>
  );
}

export default Header;
