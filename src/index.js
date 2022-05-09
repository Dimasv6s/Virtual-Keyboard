import './styles.scss';
import getKeyboard from './keyboard';
import en from './en';

const container = document.createElement('div');
container.innerHTML = getKeyboard(en.normal.split(' '));
document.body.append(container);
