import './styles.scss';
import getKeyboard from './keyboard';
import en from './en';
import ru from './ru';

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
keyboard.innerHTML = getKeyboard(en.normal.split(' '));
const info = document.createElement('p');
info.innerHTML = 'Виртуальная клавиатура создана на ОС Windows';
wrapper.append(textarea, keyboard, info);

let pressKey = null;
let caps = false;
let lang = 'en';

document.body.append(wrapper);

function switchLang() {
  lang = lang === 'en' ? 'ru' : 'en';
  return lang === 'en' ? en : ru;
}

function getKey(e) {
  if (!(e === document.body)) {
    if (e.dataset.index) {
      return e.dataset.index;
    }
    return getKey(e.parentNode);
  }
  return false;
}

function getLang() {
  return lang === 'en' ? en : ru;
}

document.body.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (caps) {
      keyboard.innerHTML = getKeyboard(getLang().capsOnShift.split(' '));
    } else {
      keyboard.innerHTML = getKeyboard(getLang().shift.split(' '));
    }
  }
  if (event.code === 'CapsLock') {
    if (caps) {
      keyboard.innerHTML = getKeyboard(getLang().normal.split(' '));
      caps = false;
    } else {
      keyboard.innerHTML = getKeyboard(getLang().caps.split(' '));
      caps = true;
    }
  }
});

document.body.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (caps) {
      keyboard.innerHTML = getKeyboard(getLang().caps.split(' '));
    } else {
      keyboard.innerHTML = getKeyboard(getLang().normal.split(' '));
    }
  }
  if (event.code === 'AltLeft' && event.ctrlKey) {
    keyboard.innerHTML = getKeyboard(switchLang().normal.split(' '));
  }
});

document.body.addEventListener('mousedown', (event) => {
  const key = getKey(event.target);
  pressKey = key;
  if (key === 'ShiftLeft' || key === 'ShiftRight') {
    keyboard.innerHTML = getKeyboard(getLang().shift.split(' '));
  }
});

document.body.addEventListener('mouseup', () => {
  if (pressKey === 'ShiftLeft' || pressKey === 'ShiftRight') {
    keyboard.innerHTML = getKeyboard(getLang().normal.split(' '));
  }
  pressKey = null;
});
