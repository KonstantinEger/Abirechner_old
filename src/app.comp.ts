import { html } from 'lit-html';

import { TabNav } from './tabs.comp';
import { GradesSite } from './grades.site';
import { CalculatorsSite } from './calc.site';

const tabnav = new TabNav(
  {
    text: 'Noten',
    site: GradesSite
  },
  {
    text: 'Rechner',
    site: CalculatorsSite
  }
);

const App = () => {
  return html`
    <style>
      .header {
        height: 50px;
      }
      .header .header-name {
        font-size: 20px;
        font-weight: 600;
        position: relative;
        top: 15px;
        left: 30px;
      }
    </style>
    <div class="header bg-primary">
      <span class="header-name">Abirechner</span>
    </div>
    ${tabnav.render()}
  `;
};

export { App };
