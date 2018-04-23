var app = new Vue({
    el: '#app',
    data: {
        activeTab: 'ImageList',
        images: [
            {name:'A1 image', status:'未分配'},
            {name:'B1 image', status:'未分配'},
            {name:'C1 image', status:'未分配'},
            {name:'D1 image', status:'进行中'},
            {name:'E1 image', status:'进行中'},
            {name:'F1 image', status:'有分歧'},
            {name:'G1 image', status:'有分歧'},
            {name:'H1 image', status:'已完成'}
        ],
        imagePageCurrent: 1,
        imagePageSizes: [2, 10, 30, 50],
        imagePageSize: 10,

        tasks: [
            {name:'A1 task', status:'进行中'},
            {name:'B1 task', status:'进行中'},
            {name:'C1 task', status:'进行中'},
            {name:'D1 task', status:'已提交'}
        ],
        accounts: [
            {id:'A1', status:'无权限', email:'aaa@bb.com'},
            {id:'B2', status:'无权限', email:'aaa@bb.com'},
            {id:'C3', status:'医生', email:'aaa@bb.com'},
            {id:'D4', status:'医生', email:'aaa@bb.com'},
            {id:'E5', status:'客人', email:'aaa@bb.com'},
            {id:'F6', status:'客人', email:'aaa@bb.com'},
            {id:'G7', status:'客人', email:'aaa@bb.com'},
            {id:'H8', status:'客人', email:'aaa@bb.com'},
        ],
        breadcrumb: ['图像列表'],
        currentPage: 'ImageList',
        setAccountStatusDialogVisible: false,
        setAccountStatusForm: {
            accounts: [],
            newStatus: ''
        }
    },
    created: function() {
        this.$notify.info({
            title: '通知',
            message: '有 2 个新的注册申请'
        });
    },
    methods: {
        clickTab: function(tab, event) {
            // console.log(tab.$el.id.split('-')[1]);
            if (tab.$el.innerText) {
                this.breadcrumb = [tab.$el.innerText];
            } else {
                this.breadcrumb = [this.breadcrumb[0]];
            }
            this.currentPage = tab.$el.id.split('-')[1];
        },
        goHome: function() {
            window.location.href = "../index.html";
        },

        clickImage: function(row, event, column) {
            this.breadcrumb.push('图像详情');
            this.currentPage = 'ImageInfo';
        },
        clickTask: function(row, event, column) {
            this.breadcrumb.push('任务详情');
            this.currentPage = 'TaskInfo';
        },
        clickAccount: function(row, event, column) {
            this.setAccountStatusDialogVisible = true;
        },
        setAccountStatus: function() {
            // ...
            this.setAccountStatusDialogVisible = false;
            this.setAccountStatusForm.newStatus = '';
        },

        getImages: function() {
            var len = this.images.length;
            if (this.imagePageSize >= len) {
                return this.images;
            } else {
                var imagePages = [];
                for(var i = 0; i < len; i += this.imagePageSize){
                    if (i + this.imagePageSize >= len) {
                        imagePages.push(this.images.slice(i));
                    } else {
                        imagePages.push(this.images.slice(i, i + this.imagePageSize));
                    }
                }
                return imagePages[this.imagePageCurrent - 1]
            }
        },
        changeImagePageSize: function(val) {
            this.imagePageSize = val;
        },
        changeImagePageCurrent: function(val) {
            this.imagePageCurrent = val;
        }
    }
})

