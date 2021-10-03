window.onload = () => {
    window.setInterval(() => {
        var now = new Date();
        var clock = document.getElementById("clock");
        var info = document.getElementById("info");
        clock.innerHTML = now.toLocaleTimeString([], { timeStyle: 'short' });

        var t_sec = 6 * now.getSeconds();  //Определяем угол для секунд

        var x = Math.round(Math.sin(Math.PI - t_sec * (Math.PI / 180))*10);
        var y = Math.round(Math.cos(Math.PI - t_sec * (Math.PI / 180))*10);

        info.innerHTML = now.toLocaleTimeString() + ' ' + x + ' ' + y;

        let shadow = '';

        for (let i = 0; i < 200; i++) {
            x = direction(x, -x/100);
            y = direction(y, -y/100);
            shadow += (shadow ? ',' : '') + x + 'px ' + y + 'px #357697';
        }

        for (let i = 0; i < 1000; i++) {
            x = direction(x, x/100);
            y = direction(y, y/100);
            shadow += (shadow ? ',' : '') + x + 'px ' + y + 'px #357697';
        }

        clock.style.textShadow = shadow;
    }, 1000);

    for (let i = 0; i < 60; i++) {
        t_sec = i * 6;
        var x = Math.round(Math.sin(Math.PI - t_sec * (Math.PI / 180))*10);
        var y = Math.round(Math.cos(Math.PI - t_sec * (Math.PI / 180))*10);
        console.log(i, x, y);
    }
};

const direction = (val, inc) => {
    return val == 0 ? 0 : val + inc
}