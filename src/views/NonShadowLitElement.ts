import { LitElement } from "lit-element"

export class NonShadowLitElement extends LitElement {
	/**
	 * Creates a non-shadow root.
	 * See https://css-tricks.com/web-standards-meet-user-land-using-css-in-js-to-style-custom-elements/#applying-styles-for-litelement
	 */
	createRenderRoot() {
		return this
	}
	/**
	 * Well, it is a recommendation
	 */
	connectedCallback() {
		super.connectedCallback()
	}
}
