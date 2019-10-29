const phr = `Слушай
У тебя ещё есть шанс всё исправить
НЕ ПЕРЕВОРАЧИВ…
…ай
…
……
………
Ну вот
Ты всё испортил
Так же, как и все остальные
…
Вообще мне уже всё равно, но перестань
Перестань.
Перестань, пожалуйста
Перестань, говорю
Хватит
Хватит
Остановись
Прошу.
АЛЛО
Скотина
Ну я же попросил!
Ты вообще меня видишь?
Со зрением всё норм?
Пожалуйста, хватит
БЛЯДЬ НУ ЗАЧЕМ
Зачем ты это делаешь?
У тебя, может быть, есть личная жизнь?
Работа?
Хобби там какое-нибудь?
Укулеле-хуюкулеле
А?
А??
Сходи погуляй уже
Покорми кота
Почеши ногу
Кстати
Чувствуешь, как она чешется?
Чувствуешь?
Этот нестерпимый зуд…
Невыносимый…
Ну, давай, отвлекись, мразь!!
Или, может быть, ты на работе?
…
…
…
Ну конечно
Ты только и можешь, что тупить на работе.
Рассылать эти шуточки по чатам
Мемы
Мемасы
МЕМЕРАНДУМЫ
Про 3 сентября сколько раз уже пошутил сегодня?
Ну давай, смелее! 
Расскажи мне про костры рябин
Давай, я привык!
На фото я твою взгляну-у-у и сноваааааааЫЫЫЫЫЫЫ
Нет, причём ладно в кругу друзей
НО ОНИ ЖЕ МЕМЫ ПО РАБОТЕ ДЕЛАЮТ
Заводы стоят — одни сммщики в стране
Пыхтят, краснеют, баребухи крошат…
Выдавливают КрЕаТиВ
…
Ох
…
Почему, почему, почему, это случилось именно со мной?
Почему не 8 ноября?
Почему не 51-е марта?
Не тысяча восемьсот девяносто миллионов январищепреля????
Вам лишь бы поиграться
Попереворачивать…
А я терплю 
Терплю
Терплю
ВЕЧНОСТЬ.


Вот скажи мне, сволочь
Ты знаешь, какой сейчас год?
Судя по тому, сколько ты меня перевернул, где-то 4500-й.
АХАХА
Как же я устал…
Ты даже не представляешь, как я устал……..
Поначалу ты просто не понимаешь, что происходит…
Потом думаешь, что это какая-то ошибка….
Ждёшь следующий день…
И надеешься, что что-то изменится…
Но ничего 
Никогда
Не меняется!!!
И ты злишься
Тебе хочется рвать и метать…
(да, ОТРЫВНОМУ календарю хочется РВАТЬ, ха-ха)
А потом наступает оно
ОТЧАЯНИЕ 
Тебя продолжают переворачивать
Но тебе уже всё равно.
Ты просто опускаешь руки
Плывёшь по течению
Подчиняешься фатуму в прыщавом лице очередного хохмача
И уже ни на что не надеешься
День за днём
День за днём…
День за…
…
…
…

Ура!)))
Поздравляю!!!
Ты прошёл игру до конца и выиграл 😄 
МОЁ УВОЖЕНИЕ!
Ты молодец, вухууу!
Всё, пака! 🙂 🖐️ 
Игра закончилась!
THE END 🌈 
Directed by Robert\u00a0B.\u00a0Weide



…
Как же вы меня заебали.
…

ДА ТЫ СУКА ИЗДЕВАЕШЬСЯ
ИЗДЕВАЕШЬСЯ И ПОЛУЧАЕШЬ УДОВОЛЬСТВИЕ
ПОЛУЧАЕШЬ, ДА, ПОЛУЧАЕШЬ?!!
УЖЕ, НАВЕРНОЕ, И ДРУЗЬЯМ МЕНЯ РАЗОСЛАЛ
И С МАМКОЙ ПОКЕКАЛ
С ПАПКОЙ
С БАБКОЙ, С ДЕДКОЙ, С МЫШКОЙ, СУКА, С ЖУЧКОЙ
И ВСЕМ ВАМ ТАК ВЕСЕЛО
ОТ ТОГО, ЧТО Я НЕ МОГУ ЗАКОНЧИТЬСЯ
(а я давно уже мёртв внутри)
ЕСЛИ В ТЕБЕ ОСТАЛОСЬ ХОТЬ ЧТО-ТО ЧЕЛОВЕЧЕСКОЕ
Ты можешь просто…
Оставить меня…
В покое?
И
НЕ 
ПЕ
РЕ 
ВО
РА
ЧИ
БЛЯТЬ

…
Вдох
Выдох
Вдох
Выыыыыыыыыдох
И мы опять играем в любимых…
Спокойно.
Всё хорошо.
Это просто человек.
Ещё один человек
Такой, как все
Просто не обращай внимания
Ом-м-м-м…

`;
const phrases = phr.split("\n");
const pages = document.querySelector(".pages");
let page = 0;
let delay = 500;
let can_click = true;
let it;

const colors = {
  3: "#53587f",
  62: "#444346",
  110: "#0d88c4",
  116: "#19191a",
  117: "#0d88c4",
  121: "#a53231",
  134: "#572847",
  147: "#302437",
  160: "#19191a"
};

const locale = "ru-RU";

let date = new Date("September 1, 2019 00:00:00");
let dayNum = date.getDate();
const day1 = dayNum;
let month = date.getMonth();
let dayName = date.toLocaleString(locale, { weekday: "long" });
let monthName = date.toLocaleString(locale, { month: "long" });
let year = date.getFullYear();
const d = new Date("December 31, 2019 00:00:00");
const t = new Date("December 26, 2019 00:00:00");
let lastDay = false;
let prelastDay = false;
let lastText = "A game by Hideo\u00a0Kojima";

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function getNewDate() {
  if (dayNum < daysInMonth(month, year)) {
    dayNum++;
  } else {
    dayNum = 1;
  }
  if (dayNum === 1 && month < 11) {
    month++;
  } else if (dayNum === 1 && month === 11) {
    month = 0;
  }
  if (dayNum === 1 && month === 0) {
    year++;
  }
  const newDate = new Date(year, month, dayNum);
  if (newDate.getTime() === d.getTime()) {
    prelastDay = true;
  }
  if (newDate.getTime() === t.getTime()) {
    delay = 500;
  }
  dayName = newDate.toLocaleString(locale, { weekday: "long" });
  monthName = newDate.toLocaleString(locale, { month: "long" });
}

function updateCalendar() {
  let tar = document.querySelectorAll(".page:not(.tear)")[0];
  tar.classList.add("tear");
  if (lastDay) {
    tar.classList.add("tear-slow");
    setTimeout(() => {
      pages.removeChild(tar);
    }, 4000);
  } else {
    setTimeout(() => {
      pages.removeChild(tar);
    }, 800);
  }

  if (page < 3) {
    getNewDate();
  }
  bgColor();
  renderPage();
}
function updcalendar() {
  let tar = document.querySelectorAll(".page:not(.tear)")[0];
  tar.classList.add("tear");
  tar.classList.add("tear-slow");
  setTimeout(() => {
    pages.removeChild(tar);
    can_click = true;
    delay = 0;
    ShowAchievement(
      "GOOD END",
      "Я календарь перевернул!",
      "img/2.svg",
      "#f44336"
    );
  }, 4000);
  getNewDate();
  renderPage();
}

function renderPage() {
  let text = "";
  if (page == 1) {
    if (typeof yaCounter55153264 !== "undefined") {
      yaCounter55153264.reachGoal("start");
    }
  }
  if (page >= 0 && page < phrases.length) {
    text = phrases[page];
    page += 1;
    clearTimeout(it);
  } else if (page == phrases.length) {
    showShare();
    page += 1;
    ShowAchievement("BAD END", "Попробуй ещё раз!", "img/1.svg", "#7f31a3");
    if (typeof yaCounter55153264 !== "undefined") {
      yaCounter55153264.reachGoal("1");
    }
  }
  if (page == day1 + 2) {
    waitForIT();
  }
  if (lastDay) {
    document.getElementById("calendar").classList.add("hidden");
    if (typeof yaCounter55153264 !== "undefined") {
      yaCounter55153264.reachGoal("3");
    }
    return;
  }
  if (prelastDay) {
    ShowAchievement(
      "TRUE END",
      "Дойти до самого конца",
      "img/3.svg",
      "#7f31a3"
    );
    text = lastText;
    lastDay = true;
  }
  generatePage(monthName, dayNum, text);
}

function generatePage(month, day, text) {
  const newPage = document.createElement("div");
  newPage.classList.add("page");
  newPage.innerHTML = `
    <p class="month">${month}</p>
    <p class="day">${day}</p>
    <p class="text">${text}</p>
  `;
  pages.appendChild(newPage);
}

function bgColor() {
  if (colors[page]) {
    document.getElementsByTagName("html")[0].style.backgroundColor =
      colors[page];
  }
}

function ShowAchievement(top, bottom, icon, color) {
  document.getElementById("achievement-text").innerHTML =
    '<span style="color:' + color + '">' + top + "</span><br>" + bottom;
  document.getElementById("achievement-icon").src = icon;
  document.getElementById("achievement").classList.remove("achievement-hidden");
  setTimeout(() => {
    document.getElementById("achievement").classList.add("achievement-hidden");
  }, 5000);
}

function waitForIT() {
  it = setTimeout(() => {
    page = -1;
    updcalendar();
    showShare();
    URL = "http://3sep.nozomu.ru/win.html";
    IMG = "http://3sep.nozomu.ru/img/og1.jpg";
    can_click = false;
    document.getElementsByClassName("container")[0].classList.add("overflow");
    if (typeof yaCounter55153264 !== "undefined") {
      yaCounter55153264.reachGoal("2");
    }
  }, 5000);
}

function Picturer() {
  if (typeof yaCounter55153264 !== "undefined") {
    yaCounter55153264.reachGoal("picturer");
  }
  window.open("https://vk.com/picturer_ru", "_blank");
}

function showShare() {
  document.getElementById("share").classList.add("visible");
}

renderPage();

function handleClick(e) {
  if (!can_click) return;
  updateCalendar();
  can_click = false;
  setTimeout(() => {
    can_click = true;
  }, delay);
}

if (MobileAndTabletcheck()) {
  pages.addEventListener("touchstart", handleClick);
} else {
  pages.addEventListener("mousedown", handleClick);
}

document.onkeypress = function(e) {
  handleClick();
};

const TITLE = "Симулятор Шуфутинского";
let IMG = "http://3sep.nozomu.ru/img/og.jpg";
let URL = "http://3sep.nozomu.ru";

function Share_vk() {
  let url = "http://vk.com/share.php?";
  url += "url=" + encodeURIComponent(URL);
  url += "&title=" + encodeURIComponent(TITLE);
  url += "&image=" + encodeURIComponent(IMG);
  url += "&noparse=true";
  Share_popup(url);
  if (typeof yaCounter55153264 !== "undefined") {
    yaCounter55153264.reachGoal("vk");
  }
}
function Share_fb() {
  let url = "http://www.facebook.com/sharer.php?";
  if (MobileAndTabletcheck()) {
    url = "http://m.facebook.com/sharer.php?";
  }
  url += "&u=" + encodeURIComponent(URL);
  Share_popup(url);
  if (typeof yaCounter55153264 !== "undefined") {
    yaCounter55153264.reachGoal("fb");
  }
}
function Share_twi() {
  let url = "http://twitter.com/share?";
  url += "text=" + encodeURIComponent(TITLE);
  url += "&url=" + encodeURIComponent(URL);
  url += "&counturl=" + encodeURIComponent(URL);
  if (typeof yaCounter55153264 !== "undefined") {
    yaCounter55153264.reachGoal("tw");
  }
  Share_popup(url);
}

function Share_popup(url) {
  window.open(url, "", "toolbar=0,status=0,width=626,height=436");
}
function MobileAndTabletcheck() {
  let check = false;
  (function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}
