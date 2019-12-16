import { html, TemplateResult } from 'lit-html';
import { updateApp } from '.';

type Tab = { text: string; site: () => TemplateResult };

class TabNav {
  private id: string;
  private currentTabIndex: number;
  private tabs: Tab[];

  constructor(...tabs: Tab[]) {
    this.currentTabIndex = 0;
    this.id =
      'a' +
      Math.random()
        .toString(36)
        .substring(7);
    this.tabs = tabs;
  }

  public render(): TemplateResult {
    return html`
      <style>
        .tablist#${this.id} {
          display: grid;
          grid-template-columns: ${this.tabs.reduce(acc => acc + ' 1fr', '')};
        }
        .tab {
          transition: 0.3s;
          padding: 12px;
        }
        .tab.bg-primary-dark {
          font-weight: 600;
        }
      </style>
      <div class="tablist" id=${this.id}>
        ${this.tabs.map(tab => {
          const tabIndex = this.tabs.indexOf(tab);
          return html`
            <div
              class="tab ${this.currentTabIndex === tabIndex ? 'bg-primary-dark' : 'bg-primary'}"
              style="text-align:center"
              @click=${() => {
                this.currentTabIndex = tabIndex;
                updateApp();
              }}
            >
              ${tab.text}
            </div>
          `;
        })}
      </div>
      <div class="tabbody">${this.tabs[this.currentTabIndex].site()}</div>
    `;
  }
}

export { Tab, TabNav };
