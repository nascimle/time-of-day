function timerExec(){

    let data = new Date();
    let hour = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();
    
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;

    let img = document.getElementById('image');
    let body = document.getElementById('myBody');

    if(hour >= 0 && hour <= 11){
        img.src = "./img/morning.jpg";
        body.style.background = 'rgb(198,183,138)';
    }else if(hour >= 12 && hour < 19){
        img.src = "./img/evening.jpg";
        body.style.background = 'rgb(159,115,95)';
    }
    else{
        img.src = "./img/night.jpg";
        body.style.background = 'rgb(70,73,72)';
    }

}


let timer = setInterval(timerExec,1000);
