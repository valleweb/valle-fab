import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

class ValleFab extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          border-radius: 50%;
          margin: 8px;
          display: inline-block;
        }

        .fab {
          box-sizing: border-box;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          border: 0;
          background-color: var(--valle-fab-color, #ff6d00);
          border-radius: 50%;
          width: var(--valle-fab-size, 56px);
          height: var(--valle-fab-size, 56px);
          transition: background-color .3s;


          /* Elevation 1 - default */

          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                      0 1px 5px 0 rgba(0, 0, 0, 0.12),
                      0 3px 1px -2px rgba(0, 0, 0, 0.2);

        }

        /* Elevations */

        :host([elevation="2"]) .fab {
          box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                      0 1px 10px 0 rgba(0, 0, 0, 0.12),
                      0 2px 4px -1px rgba(0, 0, 0, 0.4);
        }

        :host([elevation="3"]) .fab {
          box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                      0 1px 18px 0 rgba(0, 0, 0, 0.12),
                      0 3px 5px -1px rgba(0, 0, 0, 0.4);
        }

        :host([elevation="4"]) .fab {
          box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                      0 3px 14px 2px rgba(0, 0, 0, 0.12),
                      0 5px 5px -3px rgba(0, 0, 0, 0.4);
        }

        :host([elevation="5"]) .fab {
          box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                      0 4px 22px 3px rgba(0, 0, 0, 0.12),
                      0 6px 7px -4px rgba(0, 0, 0, 0.4);
        }

        /* UI feedbacks */

        .fab:focus {
          outline-color: var(--valle-fab-color, #ff6d00);
          outline-offset: 5px;
          outline-width: thin;
        }

        .fab:hover {
          cursor: pointer;
          background-image: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3));
        }

        /* States */

        :host([mini]) .fab {
          width: var(--valle-fab-mini-size, 40px);
          height: var(--valle-fab-mini-size, 40px);
        }

        :host([disabled]) .fab {
          background: #e1e1e1;
        }

        :host([disabled]) .fab:hover {
          cursor: default;
          background: #e1e1e1;
        }

        :host([pressed]) .fab {
          background-color: var(--valle-fab-pressed-color, #ff0101);
        }

        /* Icon */

        .fab__icon {
          width: var(--valle-fab-icon-size, 24px);
          height: var(--valle-fab-icon-size, 24px);
          transition: transform .3s;
          fill: var(--valle-fab-default-icon-color, #fff);
        }

        :host([pressed]) .fab__icon {
          transform: rotate(45deg);
        }
      </style>

      <button class="fab" id="fabBtn" disabled=[[disabled]]>

        <template is="dom-if" if="[[sloted]]">
            <slot></slot>
        </template>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fab__icon" style="display: inline-block;" id="defaultIcon">
          <title>[[label]]</title>
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
        </svg>

        <img src=[[icon]] class="fab__icon" alt=[[label]] style="display: none;" id="fabIcon">

      </button>
    `;
	};
	
	static get properties() {
		return {
			icon: {
        type: String,
        value: ''
      },
      sloted: {
        type: Boolean,
        default: false
      },
      mini: {
        type: Boolean,
        value: false
      },
      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      label: {
        type: String,
        value: ''
      },
      toggle: {
        type: Boolean,
        value: false
      },
      pressed: {
        type: Boolean,
        value: false,
        observer: '_togglePressedObserver',
        reflectToAttribute: true
      }
    }
  };
  
  connectedCallback() {
    super.connectedCallback();

    // Set default icon
    if (this.icon) {
      this.$.defaultIcon.style.display = 'none';
      this.$.fabIcon.style.display = 'inline-block';
    }

    // Add toggle powers
    if (this.toggle) {
      this.$.fabBtn.setAttribute('aria-pressed', 'false');
      this.$.fabBtn.addEventListener('click', this._togglePressed.bind(this));
    }

    // Allow inline icon
    if (this.sloted) {
      this.$.defaultIcon.style.display = 'none';
      this.$.fabIcon.style.display = 'none';
    }

  }

  _togglePressed() {

    this.hasAttribute('pressed')
      ? this.removeAttribute('pressed')
      : this.setAttribute('pressed', '');

  }

  _togglePressedObserver(newBooleanValue) {

    if (this.toggle) {
      newBooleanValue
        ? this.$.fabBtn.setAttribute('aria-pressed', 'true')
        : this.$.fabBtn.setAttribute('aria-pressed', 'false');
    }

  }
};

customElements.define('valle-fab', ValleFab);
