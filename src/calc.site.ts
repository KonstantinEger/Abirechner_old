import { html, TemplateResult } from 'lit-html';
import { updateApp } from './index';

import { checkIfConstellationPossible } from './finals';

const state = {
  p1: '',
  p2: '',
  p3: '',
  p4: '',
  p5: ''
};

let conPossible = checkIfConstellationPossible(state);

function CalculatorsSite(): TemplateResult {
  function checkOnChange() {
    const p1: HTMLSelectElement = document.querySelector('#p1');
    const p2: HTMLSelectElement = document.querySelector('#p2');
    const p3: HTMLSelectElement = document.querySelector('#p3');
    const p4: HTMLSelectElement = document.querySelector('#p4');
    const p5: HTMLSelectElement = document.querySelector('#p5');

    state.p1 = p1.options[p1.selectedIndex].value;
    state.p2 = p2.options[p2.selectedIndex].value;
    state.p3 = p3.options[p3.selectedIndex].value;
    state.p4 = p4.options[p4.selectedIndex].value;
    state.p5 = p5.options[p5.selectedIndex].value;

    conPossible = checkIfConstellationPossible(state);
    updateApp();
  }

  return html`
    <style>
      select {
        display: block;
      }
    </style>
    <h3>Rechner</h3>
    <p>Gib hier deine Prüfungsfächer ein und lass dir eine Abinote errechnen.</p>
    <hr />
    <select id="p1" @change=${checkOnChange}>
      <option value="ma">Mathematik</option>
      <option value="de">Deutsch</option>
      <option value="" disabled selected hidden>P1 / Leistungskurs 1</option>
    </select>
    <select id="p2" @change=${checkOnChange}>
      <option value="en">Englisch</option>
      <option value="ge">Geschichte</option>
      <option value="phy">Physik</option>
      <option value="che">Chemie</option>
      <option value="bio">Biologie</option>
      <option value="" disabled selected hidden>P2 / Leistungskurs 2</option>
    </select>
    <select id="p3" @change=${checkOnChange}>
      <option value="ma">Mathematik</option>
      <option value="de">Deutsch</option>
      <option value="" disabled selected hidden>P3</option>
    </select>
    ${(() => {
      let arr = [];
      for (let i = 4; i < 6; i++) {
        arr.push(html`
          <select id="p${i}" @change=${checkOnChange}>
            <option value="en">Englisch</option>
            <option value="ge">Geschichte</option>
            <option value="phy">Physik</option>
            <option value="che">Chemie</option>
            <option value="bio">Biologie</option>
            <option value="geo">Geographie</option>
            <option value="eth">Ethik</option>
            <option value="mu">Musik</option>
            <option value="" disabled selected hidden>P${i}</option>
          </select>
        `);
      }
      return arr;
    })()}
    ${(() => {
      if (conPossible === true) {
        return html`
          <button>Berechnen</button>
        `;
      } else {
        return html`
          <button disabled>Berechnen</button>
        `;
      }
    })()}
  `;
}

export { CalculatorsSite };
