const MovieUrl = "http://localhost:49203/api/Movie";

Vue.createApp({
    data() {
        return {
            dataArray: [],
            error: null,
            dataMovie: {movieName: null, lengthInMinutes: null, countryOfOrigin: null},
            addMessage: "",
            filterLength: 0,
        }
    },
    methods: {
        async helperGetAndShow(url){
            try{
                const response = await axios.get(url)
                this.dataArray = await response.data
                if(this.filterLength !== 0){
                const testarray = response.data.filter(element => {
                    if(this.filterLength > element.lengthInMinutes){
                        return element;
                    }
                });
                this.dataArray = testarray;}

               
            } catch (ex) {
                alert(ex)
            }
        },
        async GetAllData() {
            this.helperGetAndShow(MovieUrl)
        },
        async addData(){
            console.table(this.dataMovie)
            try{
                response = await axios.post(MovieUrl, this.dataMovie)
                this.addMessage = "response" + response.status + "" + response.statusText
                this.GetAllData()
            } catch(ex){
                alert(ex.message)
            }
        },
        
    }
}).mount("#app")