import { html } from 'lit-html';

import { TabSites } from './tabs.comp';
import { GradesSite } from './grades.site';
import { CalculatorsSite } from './calc.site';

const App = () => html`
  <style>
    .header {
      height: 50px;
    }
    .header .header-name {
      font-size: 20px;
      font-weight: 600;
      position: absolute;
      top: 15px;
      left: 30px;
    }
  </style>
  <div class="header bg-primary">
    <span class="header-name">Abirechner</span>
  </div>
  ${TabSites(
    {
      text: 'Noten',
      site: GradesSite
    },
    {
      text: 'Rechner',
      site: CalculatorsSite
    }
  )}
`;

export { App };
