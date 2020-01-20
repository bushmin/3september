import {phr} from './modules/texts.js';
import * as ShareModule from './modules/share.js';

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

if (ShareModule.MobileAndTabletcheck()) {
  pages.addEventListener("touchstart", handleClick);
} else {
  pages.addEventListener("mousedown", handleClick);
}

document.onkeypress = function(e) {
  handleClick();
}