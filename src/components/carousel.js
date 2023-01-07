import React, { useState , useEffect} from 'react'
const Carousal = () => {
    const[currentIndex,setCurrentIndex]=useState(0);
    const images = [
        {url:"images/image1.jpg"},
        {url:"images/image2.jpg"},
        {url:"images/image3.jpg"},
        {url:"images/image4.jpg"},
    ]
    const containerStyle={
        width:"95%",
        height:"300px",
        margin:"10px auto",
        position:"relative"
    }
    const styles={
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundImage:`url(${images[currentIndex].url})`,
        // backgroundRepeat:"no-repeat"

    }
    const btncontainerstyle={
        margin:"0 auto",
        height:"20px",
        position:"absolute",
        bottom:"5%",
        left:"42%",
        display:"flex",
        zindex:1,
    }
    const btnstyle={
        width:"10px",
        height:"10px",
        borderRadius:"50%",
        backgroundColor:"black",
        margin:" 8px",
        cursor:"pointer",

    }
    useEffect(() => {
        const interval = setInterval(()=>{
            if(currentIndex===images.length-1){
                setCurrentIndex(0);
            }
            else{
                setCurrentIndex(currentIndex+1);
            }
        },10000);
      return () => clearInterval(interval);
    },);
    return (
        <>
        <div style={containerStyle}>
            <div style={btncontainerstyle}>
                <div style={btnstyle} onClick={()=>setCurrentIndex(0)} ></div>
                <div style={btnstyle} onClick={()=>setCurrentIndex(1)}></div>
                <div style={btnstyle} onClick={()=>setCurrentIndex(2)}></div>
                <div style={btnstyle} onClick={()=>setCurrentIndex(3)}></div>
            </div>
            <div style={styles}>
            </div>
        </div>
        </>
    )
}
export default Carousal