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
            {name:'H1 image', status:'已完成'},
        ]
    },
    methods: {
        clickTab: function(tab, event) {
            activeTab = tab.$el.innerText;
            console.log(activeTab);
        },
        goHome: function() {
            window.location.href = "../index.html";
        }
    }
})