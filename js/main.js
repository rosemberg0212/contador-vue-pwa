const app = Vue.createApp({
	data(){
		return{
			title: "Contador App - vue",
			count:0
		};
	},

	methods:{
		modCount(instruction = "add", limit = 2){
			if(instruction === 'dis')
			{
				this.count -= limit;	
			}
			else{
				this.count += limit;
			}
		},
	},
});