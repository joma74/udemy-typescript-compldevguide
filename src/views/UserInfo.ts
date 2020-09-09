import { html } from "lit-element"
import { NonShadowLitElement } from "./NonShadowLitElement"

export class UserInfo extends NonShadowLitElement {
	template = html`<div class="m-2 p-5 bg-gray-100 rounded shadow-xl text-sm">
		<h1 class="text-gray-800 font-medium underline bg-yellow-300">
			User Information
		</h1>
		<h1 id="root"></h1>
		<!-- display: inline --><div
			class="inline-block mt-2 pl-1 w-1/4 text-gray-700"
		>
			Name </div
		><!-- display: inline --><div class="inline-block mt-2 w-3/4">Sam</div
		><!-- display: inline --><div
			class="inline-block mt-2 pl-1 text-gray-700 w-1/4"
		>
			Age </div
		><!-- display: inline --><div class="inline-block mt-2 w-3/4">20</div>
	</div>`

	render() {
		return this.template
	}
}

customElements.define("user-info", UserInfo)
