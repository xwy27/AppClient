var app = new Vue({
    el: '#app',
    data: {
        isLogin: true,
        loginForm: {
            account: '',
            password: ''
        },
        hasPhoto: false,
        photoUrl: '',
        registerForm: {
            id: '',
            account: '',
            email: '',
            password: '',
            photo: ''
        }
    },
    methods: {
        clickTab: function() {
            this.isLogin = !this.isLogin;
        },
        login: function() {
            window.location.href = "./administrator/index.html";
            // console.log(this.loginForm);
            // var request = $.ajax({
            //     url: "",
            //     method: "POST",
            //     data: {
            //         "username": this.loginForm.account,
            //         "password": this.loginForm.password
            //     },
            //     dataType: "application/json"
            // });
            
            // request.done(function(res) {
            //     console.log(res);
            // });
            
            // request.fail(function(xhr, textStatus) {
            //     alert("Request failed: " + textStatus);
            // });
        },
        register: function() {
            // console.log(this.registerForm);
            // var request = $.ajax({
            //     url: "",
            //     method: "POST",
            //     data: {
            //         // ...
            //     },
            //     dataType: "application/json"
            // });
            
            // request.done(function(res) {
            //     console.log(res);
            //     this.$refs.upload.submit();
            // });
            
            // request.fail(function(xhr, textStatus) {
            //     alert("Request failed: " + textStatus);
            // });
        },
        uploadPhoto: function(file) {
            console.log(file);
            const isJPGorPNG = (file.raw.type === 'image/jpeg' || file.raw.type === 'image/png');
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPGorPNG) {
                this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            if (isJPGorPNG && isLt2M) {
                this.registerForm.photo = file.name;
                console.log(this.registerForm.photo);
                this.photoUrl = URL.createObjectURL(file.raw);
                this.hasPhoto = true;
            }

            return isJPGorPNG && isLt2M;
        }
    }
})
