window.onload=function(){
    Vue.component('todo-item', {
        props: ['todo'],
        template:"<li>{{ todo }}</li>"
    })
    let app=new Vue({
        el:"#Taskmanager",
        data:{
            blockOne: ['Овощи' ,'Сыр' ,'Мясо' ],
            blockTwo: ['Молоко' ,'Гречка' ,'Лук']
        },
        methods:{
           transfer: function (direction) {
                let first = direction ? this.blockOne : this.blockTwo;
                console.log(first)
                let second = direction ? this.blockTwo : this.blockOne;
                let task = first.pop();
                if (task) {
                    second.unshift(task);
                }
            }
        }
    })

}
