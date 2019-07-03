var app = new Vue({
	el: '#app',
	data: {
		title: 'Wards & Punis',
		todo: {
			what: '',
			due_date:'',
			details: '',
			create_date:'',
		},
		to_dos: [
			{
				what: 'Finish Vue HandsOn',
				due_date:'03/07/2019',			
				details: 'Finish the Vue HandsOn app and share on github',
				create_date: new Date(Date.now()).toLocaleString()
			}
		],
		bool: false,
	},
	methods:{
		add() {
			let { what, due_date, details } = this.todo
			this.to_dos.push({
				what, 
				due_date, 
				details, 
				create_date: new Date(Date.now()).toLocaleString()
			})
		},
		remove(index) {
			this.to_dos.splice(index, 1)
		}
	}
})
