import {React, useEffect, useState}  from 'react'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mobile from './mobile_screen';
import Desktop from './desktop_screen';

function Main(){
    
    const [mobile, setMobile] = useState(false);

    const resizingHandler = () => {
        window.innerWidth > 800 
        ? setMobile(false) :
        setMobile(true)
      };

      useEffect(() => {
        window.innerWidth > 800 
        ? setMobile(false) :
        setMobile(true)
        window.addEventListener("resize", resizingHandler);
        return () => {
          window.removeEventListener("resize", resizingHandler);
        };
      }, []);

    return(
        <>
            {
                mobile ?
                <Mobile/>
                : <Desktop/>
            }
        </>
    );
}

export default Main;