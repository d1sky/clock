# clock
reflections on clock

Угол поворота всех стрелок за 1 секунду:
    *Секундная стрелка повернется на угол — (1/60)*360o = 6o
    *Минутная стрелка повернется на угол — (1/60)*6o = 0,1o
    *Часовая стрелка повернется на угол — (1/60)*0,1o ≈ 0,0017o

var t_sec = 6*d.getSeconds();  //Определяем угол для секунд
var t_min = 6*(d.getMinutes() + (1/60)*d.getSeconds()); //Определяем угол для минут
var t_hour = 30*(d.getHours() + (1/60)*d.getMinutes());  //Определяем угол для часов

lengthSeconds*Math.cos(Math.PI/2 - t_sec*(Math.PI/180))
lengthSeconds*Math.sin(Math.PI/2 - t_sec*(Math.PI/180))
