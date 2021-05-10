var app = new Vue({
    el: '#root',
    data: {
        rooms: [],
        room_data: null
    },
    mounted(){
        axios.get('http://localhost/php-mysql-stanze/api/stanze-api.php')
        .then(response => {
            
            this.rooms = response.data.response;
        })
    },
    methods: {
        getRoomInfo: function(id){
            axios.get('http://localhost/php-mysql-stanze/api/stanze-api.php?id=' + id)
        .then(response => {
            
            this.room_data = response.data.response[0];
            console.log(this.room)
        })
        }
    }
})