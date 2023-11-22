const getTimeData = () => {
    const localTime = new Date();   
    const hours =localTime.getHours()
    const minutes =localTime.getMinutes()
    const seconds =localTime.getSeconds()

    const displayTime=hours>=12? `${hours}:${minutes}:${seconds} PM` : `${hours}:$
    {minutes}:${seconds} AM`
    result.innerHTML=displayTime
    setTimeout(()=>{
        getTimeData()
    },1000)
    }
    getTimeData()