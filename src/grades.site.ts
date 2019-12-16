import { html, TemplateResult } from 'lit-html';

import { Tab, TabNav } from './tabs.comp';
import { Subject } from './subject.comp';

const subjects: Subject[] = [
  new Subject('bio', 'Biologie'),
  new Subject('che', 'Chemie'),
  new Subject('de', 'Deutsch'),
  new Subject('en', 'Englisch'),
  new Subject('eth', 'Ethik'),
  new Subject('geo', 'Geographie'),
  new Subject('ge', 'Geschichte'),
  new Subject('inf', 'Informatik'),
  new Subject('ma', 'Mathematik'),
  new Subject('mu', 'Musik'),
  new Subject('phy', 'Physik'),
  new Subject('spo', 'Sport')
];

const tabs: Tab[] = [
  {
    text: 'HJ 1',
    site: () =>
      html`
        ${subjects.map(s => s.render(1))}
      `
  },
  {
    text: 'HJ 2',
    site: () =>
      html`
        ${subjects.map(s => s.render(2))}
      `
  },
  {
    text: 'HJ 3',
    site: () =>
      html`
        ${subjects.map(s => s.render(3))}
      `
  },
  {
    text: 'HJ 4',
    site: () =>
      html`
        ${subjects.map(s => s.render(4))}
      `
  }
];
const tabnav = new TabNav(...tabs);

function GradesSite(): TemplateResult {
  return html`
    ${tabnav.render()}
  `;
}

export { GradesSite };
