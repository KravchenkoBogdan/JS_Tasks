// 1. navigation - done
// 2. add event listener - done
// 3. create data structure with quotes - done
// 4. get random quote
// 5. display random quote


var button = document.querySelector('button');
var p = document.getElementById('quotes');

var quotes = ['Люблю подкаты больше, чем секс',
'Итальянский футбол – это игра страха. Двое нападают, 10 защищаются, а молодые игроки сидят в запасе',
'Футбол – самое важное дело из всех неважных дел',
'Моя работа в «Ливерпуле» не всегда была успешной. Однажды мы стали вторыми',
'Проблема судей в том, что они знают правила игры, но не понимают самой игры',
'Игра забывается, результат остаётся',
'Лучшее место для защиты ворот – в чужой штрафной',
'Даже если это и была рука, то это была рука бога',
'Брошенных в меня камней хватило бы на памятник',
'Победы не надоедают. Выиграйте 10 игр подряд, и вы ещё больше захотите выиграть 11-ю',];


function get_random_quote() {
    var random_number = Math.floor(Math.random() * (quotes.length));
    p.innerHTML = quotes[random_number];
}

get_random_quote();

button.addEventListener('click', get_random_quote)
