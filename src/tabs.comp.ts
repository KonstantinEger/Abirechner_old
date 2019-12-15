import { TemplateResult, html } from 'lit-html';
import { updateApp } from './index';

let currentTabIndex = 0;
const TabSites = (...tabs: { text: string; site: () => TemplateResult }[]) => {
  return html`
    <style>
      .tablist {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .tab {
        transition: 0.3s;
        padding: 12px;
      }
      .tab.bg-primary-dark {
        font-weight: 600;
      }
      .tabbody {
        padding: 15px;
      }
    </style>
    <div class="tablist">
      ${tabs.map(tab => {
        const tabIndex = tabs.indexOf(tab);
        return html`
          <div
            class="tab ${currentTabIndex === tabIndex ? 'bg-primary-dark' : 'bg-primary'}"
            style="text-align:center"
            @click=${() => {
              currentTabIndex = tabIndex;
              updateApp();
            }}
          >
            ${tab.text}
          </div>
        `;
      })}
    </div>
    <div class="tabbody">${tabs[currentTabIndex].site()}</div>
  `;
};

export { TabSites };
