import {html, css, LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import './components/theme-switch.js';

export class AppController extends LitElement {
  static styles = css`
    aside {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: var(--sidebar-width);
    }
    main {
        position: relative;
        margin-left: var(--sidebar-width);
    }
  `;

  static properties = {};

  constructor() {
    super();
  }

  firstUpdated() {
    // theme-switch
    document.documentElement.style.colorScheme = sessionStorage.getItem('colorScheme');
  }

  render() {
    return html`
        <aside>
            <nav>
                <ul>
                    <li>
                        <h2>Getting Started</h2>
                        <ul>
                            <li>Welcome</li>
                            <li>To My</li>
                            <li>World</li>
                        </ul>
                    </li>
                    <li>
                        <h2>Point 1</h2>
                    </li>
                    <li>
                        <h2>Point 2</h2>
                    </li>
                    <li>    
                        <h2>Point 3</h2>
                    </li>
                </ul>
            </nav>
        </aside>
        <main>
            <article></article>
            <theme-switch></theme-switch>
        </main>
    `;
  }
}
customElements.define('app-controller', AppController);