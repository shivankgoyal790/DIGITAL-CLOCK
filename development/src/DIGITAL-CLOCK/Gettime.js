import React, { useState } from 'react'
import "./Gettime.css"

const Gettime = () => {

        let t1 = new Date().getHours();
        let t2 = new Date().getMinutes();
        let t3 = new Date().getSeconds();

            let [hours , setTime1] = useState(t1);
            let [minutes , setTime2] = useState(t2);
            let [seconds , setTime3] = useState(t3);
        const UpdateTime1 = () =>{
            let t1 = new Date().getHours();
            setTime1(t1);
        }
        const UpdateTime2 = () =>{
            let t2 = new Date().getMinutes();
            setTime2(t2);
        }
        const UpdateTime3 = () =>{
            let t3 = new Date().getSeconds();
            setTime3(t3);
        }



        setInterval(UpdateTime1,1000);    
        setInterval(UpdateTime2,1000);  
        setInterval(UpdateTime3,1000); 

return(

    <>
    <h1>DIGITAL CLOCK 🕝</h1>
    <div className="flex-container">
        <div className="flex-box">
        <h3>HOURS</h3>
        {hours}</div>
        <div className="flex-box"><h3>MINUTES</h3> {minutes}</div>
        <div className="flex-box"><h3>SECONDS</h3> {seconds}</div>
    </div>

    </>
);

}


export default Gettime;
