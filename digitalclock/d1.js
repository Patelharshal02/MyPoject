function timer(){
    const see=setInterval(()=>{
        const now=new Date();
        let hours=now.getHours().toString()
        console.log(hours); 
        const minutes=now.getMinutes().toString()
        console.log(minutes);
        const sec=now.getSeconds().toString()
        console.log(sec);
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const final=hours +":"+minutes+":"+sec
        document.getElementById("hours").textContent = hours;
        document.getElementById("min").textContent = minutes;
        document.getElementById("sec").textContent = sec;
        document.getElementById("ampm").textContent=ampm;
    },1000)

}
timer();