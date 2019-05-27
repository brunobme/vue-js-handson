var app = new Vue({
	el: '#app',
	data: {
		title: "Wards & Punis",
		bool: false,
	},
	methods:{
		toggle() {
			var bool = this.bool;
			this.bool = !bool;
			return bool
			// alert(`Success: ${this.randN}`)
		}
	}
})
