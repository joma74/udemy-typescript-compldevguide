import { html } from "lit-element"
import { NonShadowLitElement } from "./NonShadowLitElement"

export class UserForm extends NonShadowLitElement {
	template = html`<form onsubmit="return false;">
		<div class="m-2 p-5 bg-gray-100 rounded shadow-xl text-sm">
			<h1 class="text-gray-800 font-medium underline bg-yellow-300">
				User Update
			</h1>
			<!-- display: inline --><label
				class="inline-block mt-2 pl-1 text-gray-700 w-1/4"
				for="name"
			>
				Name </label
			><!-- display: inline --><div class="inline-block mt-2 w-3/4"
				><!-- display: inline --><input
					class="inline-block pl-1 px-5 text-gray-700 bg-gray-200 rounded italic shadow-md w-1/2"
					style="transform: skew(-2deg)"
					id="name"
					name="name"
					type="text"
					placeholder="Sam"
					aria-label="Name"
				/><!-- display: inline --><button
					class="hover:bg-yellow-300 inline-block pl-1 px-5 tracking-wider rounded bg-gray-100 text-xs text-center italic border-gray-700 border-2 shadow-md w-1/2"
					style="transform: skew(-2deg)"
					type="submit"
				>
					Update Name
				</button>
			</div>
			<label class="inline-block mt-2 pl-1 text-gray-700 w-1/4"> Age </label
			><!-- display: inline --><div class="inline-block mt-2 w-3/4">
				<!-- display: inline --><span
					class="inline-block pl-1 px-5 rounded w-1/2"
				></span
				><!-- display: inline --><button
					class="hover:bg-yellow-300 inline-block pl-1 px-5 tracking-wider rounded bg-gray-100 text-xs text-center italic border-gray-700 border-2 shadow-md w-1/2"
					style="transform: skew(-2deg)"
					type="submit"
				>
					Set Random
				</button>
			</div>
			<!-- display: inline --><button
				class="hover:bg-yellow-300 inline-block mt-4 px-5 py-1 tracking-wider rounded bg-white text-sm text-center italic font-semibold border-black border-2 shadow-md w-1/4"
				style="transform: skew(-4deg)"
				type="submit"
				>Save</button
			><!-- display: inline --><div class="inline-block mt-4 w-3/4"></div>
		</div>
	</form>`

	render() {
		return this.template
	}
}

customElements.define("user-form", UserForm)
