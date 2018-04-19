var app = new Vue({
    el: '#app',
    data: {
        isLogin: true
    },
    methods: {
        clickTab: function() {
            this.isLogin = !this.isLogin;
        },
        login: function() {
            window.location.href = "./administrator/index.html";
        }
    }
})