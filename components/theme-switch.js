import {html, css, LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class ThemeSwitch extends LitElement {
	static styles = css`
		:host {
			position: fixed;
			top: 0;
			right: 20px;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 2px 10px 2px;
			height: 30px;
			background: #ccc;
			border-bottom-right-radius: 10px;
			border-bottom-left-radius: 10px;
		}
	`;

  static properties = {};

	constructor() {
		super();
		this.icon = 'sun';
		this.checked = false;
	}

	firstUpdated() {
		if (document.documentElement.style.colorScheme === 'dark') {
			this.icon = 'moon';
			this.checked = true;
		}
		const sw = this.shadowRoot.querySelector('sl-switch');
		sw.addEventListener('sl-change', (e) => {
			this.checked = e.target.checked;
			if (this.checked) {
					document.documentElement.style.colorScheme = 'dark';
					this.icon = 'moon';
			} else {
					document.documentElement.style.colorScheme = 'light';
					this.icon = 'sun';
			}
			sessionStorage.setItem('colorScheme', document.documentElement.style.colorScheme);
			this.requestUpdate();
		})
		this.requestUpdate();
	}

	render() {
		return html`
			<sl-switch ?checked="${this.checked}"><sl-icon name="${this.icon}"></sl-icon></sl-switch>
		`;
	}
}
customElements.define('theme-switch', ThemeSwitch);