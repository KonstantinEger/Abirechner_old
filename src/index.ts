import { render } from 'lit-html';
import { App } from './app.comp';
import './theme.scss';

const appElement = document.querySelector('#app');

function updateApp() {
  render(App(), appElement);
}

updateApp();

export { updateApp };
