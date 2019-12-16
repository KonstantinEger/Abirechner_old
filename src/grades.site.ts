import { html, TemplateResult } from 'lit-html';

import { Tab, TabNav } from './tabs.comp';

const tabs: Tab[] = [
  {
    text: 'HJ 1',
    site: () => html``
  },
  {
    text: 'HJ 2',
    site: () => html``
  },
  {
    text: 'HJ 3',
    site: () => html``
  },
  {
    text: 'HJ 4',
    site: () => html``
  }
];
const tabnav = new TabNav(...tabs);

function GradesSite(): TemplateResult {
  return html`
    ${tabnav.render()}
  `;
}

export { GradesSite };
