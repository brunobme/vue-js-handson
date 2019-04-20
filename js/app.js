var app = new Vue({
	el: '#app',
	data: {
		skills : [
			{
				text: 'interpersonal',
				type: 'soft',
				level: 8
			},
			{
				text: 'communication',
				type: 'soft',
				level: 9
			},
			{
				text: 'high achiver',
				type: 'soft',
				level: 10
			},
			{
				text: 'organization',
				type: 'soft',
				level: 8
			},
			{
				text: 'php',
				type: 'technical',
				source: 'work',
				level: 6
			},
			{
				text: 'java',
				type: 'technical',
				source: 'academic',
				level: 5
			}
		],
		randN: Math.floor(Math.random() * 10) + 1,
		bool: false
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