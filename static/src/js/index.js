var app = new Vue({
    el: '#app',
    data: {
        activeTab: 'login',
        isLogin: true
    },
    methods: {
        clickTab: function() {
            this.isLogin = !this.isLogin;
        }
    }
})