var app = new Vue({
    el: '#app',
    data: {
        isLogin: true
    },
    methods: {
        // clickTab: function() {
        //     this.isLogin = !this.isLogin;
        // },
        clickTab: test,
        login: function() {
            window.location.href = "./administrator/index.html";
        }
    }
})

function test() {
    this.isLogin = !this.isLogin;
}
