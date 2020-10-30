import { html, property } from "lit-element"
import { store } from "../store"
import { NonShadowLitElement } from "./NonShadowLitElement"
import { connect } from "pwa-helpers"
import { AppState } from "../store/types"

export class MessageBox extends connect(store)(NonShadowLitElement) {
	@property()
	uiState = ""

	@property()
	message = ""

	stateChanged(state: AppState) {
		this.uiState = state.uiState
		this.message = state.message
	}

	render() {
		return html`<div class="m-2 p-5 bg-gray-100 rounded shadow-xl text-sm">
			<h1 class="text-gray-800 font-medium underline bg-yellow-300">
				Message Box
			</h1>
			<!-- display: inline --><div
				class="inline-block mt-2 pl-1 w-1/4 text-gray-700"
				>UI State</div
			><!-- display: inline --><div class="inline-block mt-2 w-3/4"
				>${this.uiState}</div
			><!-- display: inline --><div
				class="inline-block mt-2 pl-1 text-gray-700 w-1/4"
				>Message</div
			><!-- display: inline --><div class="inline-block mt-2 w-3/4"
				>${this.message}</div
			>
		</div>`
	}
}

customElements.define("message-box", MessageBox)
