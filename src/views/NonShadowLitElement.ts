import { LitElement } from "lit-element"

export abstract class NonShadowLitElement extends LitElement {
	createRenderRoot() {
		return this
	}
	connectedCallback() {
		super.connectedCallback()
	}
}
