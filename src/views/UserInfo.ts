import { html, property } from "lit-element"
import { store } from "../store"
import { connect } from "pwa-helpers"
import { AppState } from "../store/types"
import { NonShadowLitElement } from "./NonShadowLitElement"

export class UserInfo extends connect(store)(NonShadowLitElement) {
	@property()
	name = "???"

	@property({ type: Number })
	age = -1

	stateChanged(store: AppState) {
		this.name = store.data.theUser?.name || "xxx"
		this.age = store.data.theUser?.age || 1
	}

	render() {
		return html`<div class="m-2 p-5 bg-gray-100 rounded shadow-xl text-sm">
			<h1 class="text-gray-800 font-medium underline bg-yellow-300">
				User Information
			</h1>
			<!-- display: inline --><div
				class="inline-block mt-2 pl-1 w-1/4 text-gray-700"
				>Name</div
			><!-- display: inline --><div class="inline-block mt-2 w-3/4"
				>${this.name}</div
			><!-- display: inline --><div
				class="inline-block mt-2 pl-1 text-gray-700 w-1/4"
				>Age</div
			><!-- display: inline --><div class="inline-block mt-2 w-3/4"
				>${this.age}</div
			>
		</div>`
	}
}

customElements.define("user-info", UserInfo)
