var app = new Vue({
    el: '#app',
    data: {
        isLogin: true,
        loginForm: {
            account: '',
            password: ''
        },
        registerForm: {}
    },
    methods: {
        clickTab: function() {
            this.isLogin = !this.isLogin;
        },
        login: function() {
            window.location.href = "./administrator/index.html";
            // console.log(this.loginForm);
            // var request = $.ajax({
            //     url: "http://172.19.103.164:5000/authorization",
            //     method: "POST",
            //     data: {
            //         "username": this.loginForm.account,
            //         "password": this.loginForm.password
            //     },
            //     dataType: "application/json"
            // });
            
            // request.done(function( msg ) {
            //     console.log(msg);
            // });
            
            // request.fail(function( jqXHR, textStatus ) {
            //     alert( "Request failed: " + textStatus );
            // });
        }
    }
})
