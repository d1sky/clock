window.onload = () => {
    window.setInterval(() => {
        var now = new Date();
        var clock = document.getElementById("clock");
        clock.innerHTML = now.toLocaleTimeString([], {timeStyle: 'short'});

        var t_sec = 6*now.getSeconds();  //Определяем угол для секунд

        console.log(t_sec);
        console.log(Math.cos(Math.PI/2 - t_sec*(Math.PI/180))*10);
        console.log(Math.sin(Math.PI/2 - t_sec*(Math.PI/180))*10);

        var x = Math.trunc(Math.sin(Math.PI/2 - t_sec*(Math.PI/180) + 90)*10)*2
        var y = Math.trunc(Math.cos(Math.PI/2 - t_sec*(Math.PI/180) + 90)*10)*2

        clock.style.textShadow = `${x}px ${y}px 10px  rgba(0, 0, 0, 0.5)`;
    }, 1000);
};