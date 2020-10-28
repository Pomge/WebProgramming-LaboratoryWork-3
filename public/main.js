function func() {
  getRandomPhrase();
  changeColor();
}

function changeColor() {
  var elements = document.getElementsByClassName('th-weekday');

  var red     = [255, 0, 0];
  var yellow  = [255, 165, 0];
  var green   = [255, 255, 0];
  var blue    = [0, 165, 0];
  var pink    = [0, 0, 255];
  var colors = [red, yellow, green, blue, pink];

  var colorId = new Array();
  for (let i = 0; i < colors.length; i++) colorId[i] = i;

  var a = setInterval(function() {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = buildRgbaCSSProperty(colors[colorId[i]], 0.3);
      colorId[i]++;
      if (colorId[i] == colors.length) colorId[i] = 0;
    }
  }, 250);
}

function buildRgbaCSSProperty(color, alpha) {
  return 'rgba(' + color[0] + ', ' + color[1] + ', ' + color[2] + ', '+ alpha + ')';
}

function soundClickE() {
  var audio = new Audio();
  audio.src = 'static/resources/e.mp3';
  audio.autoplay = true;
}

function soundClickCalling() {
  var audio = new Audio();
  audio.src = 'static/resources/calling.mp3';
  audio.autoplay = true;
}

function getRandomPhrase() {
  var phrases = [
    "Хочешь вызвать интерес мужчины? Не думай о нем, думай о себе…",
    "Мой темперамент не задушишь, не убьёшь… Спокойной жизни я, увы, не обещаю… Руками голыми меня пусть не возьмёшь… Зато я добрая, и многое прощаю!!!",
    "Мои дела? Для всех «норм», для него — «лучше всех». И только для лучших подруг:» Девки… это пипец!».",
    "Нельзя отказывать себе любимой! Захотелось макарон, купи билет в Италию))",
    "Вредная, зато многие говорят, что глаза красивые…",
    "Для кого- то я СОЛНЫШКО. Для кого- то я СОЛНЕЧНЫЙ УДАР.А кому- то вообще НЕ СВЕТИТ.",
    "Пусть буду я такая, какая я есть. Чем гнуть из себя королеву…"];

    var element = document.getElementById('about');
    element.innerHTML = phrases[getRandomInt(phrases.length)];
  }

  function changeColorOnClick(elementId) {
    var color = [getRandomInt(255), getRandomInt(255), getRandomInt(255)];
    var alpha = 1;

    var a = setInterval(function() {
      document.getElementById(elementId).style.backgroundColor =
      buildRgbaCSSProperty(color, alpha);
      alpha -= 0.005;
      console.log("alpha = " + alpha);
    }, 1);
    setTimeout(() => { clearInterval(a);; }, 1000);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
