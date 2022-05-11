import './styles.scss';
import getKeyboard from './keyboard';
import en from './en';
import ru from './ru';

let pressKey = null;
let caps = false;
let lang = localStorage.getItem('lang') || 'en';
let value = '';

function switchLang() {
  lang = lang === 'en' ? 'ru' : 'en';
  localStorage.setItem('lang', lang);
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

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
keyboard.innerHTML = getKeyboard(getLang().normal.split(' '));
const info = document.createElement('p');
info.innerHTML = 'Виртуальная клавиатура создана на ОС Windows. Для переключения языка нажать ctrl+alt';
wrapper.append(textarea, keyboard, info);
document.body.append(wrapper);
textarea.focus();

function actionKey(key) {
  const k = keyboard.querySelector(`[data-index='${key}']`).firstChild;
  if (k.innerHTML.length === 1 && k) {
    value += k.innerHTML;
  }
  if (key === 'Tab') {
    value += '\t';
  }
  if (key === 'Backspace') {
    value = value.slice(0, -1);
  }

  if (key === 'Enter') {
    value += '\n';
  }
  if (key === 'Space') {
    value += ' ';
  }
  textarea.value = value;
}

document.body.addEventListener('keydown', (event) => {
  event.preventDefault();
  actionKey(event.code);
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
  if (event.code === 'AltLeft' && event.ctrlKey) {
    keyboard.innerHTML = getKeyboard(switchLang().normal.split(' '));
  }
  keyboard.querySelector(`[data-index='${event.code}']`).classList.add('active');
});

document.body.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (caps) {
      keyboard.innerHTML = getKeyboard(getLang().caps.split(' '));
    } else {
      keyboard.innerHTML = getKeyboard(getLang().normal.split(' '));
    }
  }
  keyboard.querySelector(`[data-index='${event.code}']`).classList.remove('active');
});

document.body.addEventListener('mousedown', (event) => {
  event.preventDefault();
  const key = getKey(event.target);
  if (key) {
    actionKey(key);
  }
  pressKey = key;
  if (key === 'CapsLock') {
    if (caps) {
      keyboard.innerHTML = getKeyboard(getLang().normal.split(' '));
      caps = false;
    } else {
      keyboard.innerHTML = getKeyboard(getLang().caps.split(' '));
      caps = true;
    }
  }
  if (key === 'ShiftLeft' || key === 'ShiftRight') {
    if (caps) {
      keyboard.innerHTML = getKeyboard(getLang().capsOnShift.split(' '));
    } else {
      keyboard.innerHTML = getKeyboard(getLang().shift.split(' '));
    }
  }
  keyboard.querySelector(`[data-index='${pressKey}']`).classList.add('active');
});

document.body.addEventListener('mouseup', () => {
  if (pressKey === 'ShiftLeft' || pressKey === 'ShiftRight') {
    if (caps) {
      keyboard.innerHTML = getKeyboard(getLang().caps.split(' '));
    } else {
      keyboard.innerHTML = getKeyboard(getLang().normal.split(' '));
    }
  }
  keyboard.querySelector(`[data-index='${pressKey}']`).classList.remove('active');
  pressKey = null;
});
