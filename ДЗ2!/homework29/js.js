window.onload=function(){
 Vue.component('diagramss-as',{
    model:{
    prop:"height",
    event:"input"
    },
    props: {
      height: Number,
      color: String,
      id: Number,
    },
    template:`
      <div >
        <div class="parent" >
          <div :style="{height:height+'px',width:100+'px',backgroundColor:color}">{{id}}</div>
        </div>
        <input 
          type="range" 
          min=100 
          max=300 
          :value="height" 
          v-on:input="change">
      </div>`,
    methods:{
      change:function(event){
      let value = +event.target.value;
      this.saveLocalStorage(value);
      this.$emit('input', value)
      },
      saveLocalStorage(value) {
      let item = JSON.parse(localStorage.getItem(`${this.$parent.localItem}-${this.id}`));
      item.height = value;
      localStorage.setItem(`${this.$parent.localItem}-${this.id}`, JSON.stringify(item));
      }
    }
  })
    
  let app=new Vue ({
    el:"#app",
    data:{ 
      itemsone:[],
      localItems:"Items",
      localItem:"Item"
    },
    mounted:function(){
      let loc=JSON.parse(localStorage.getItem(this.localItems));
      console.log(this.itemsone)
      if (loc === null) {
       loc = [];
        for (let item =1;item<=7;item++){
          loc.push(item);
          let id=item
          let height=this.heightItem(100,300)
          let color= this.color()
          let obj={id:id,color:color,height:height}
          this.itemsone.push(obj)
          localStorage.setItem(`${this.localItem}-${item}`, JSON.stringify(obj));
        }
        localStorage.setItem(this.localItems, JSON.stringify(loc));
      }else {
        for(let id=0;id<loc.length;id++){
          console.log(loc[id])
          this.itemsone.push(JSON.parse(localStorage.getItem(`${this.localItem}-${loc[id]}`)));
         
        }
      }
    },
    methods:{ 
      sort(){
        let loc = this.itemsone.sort((a, b) => a.height - b.height).map(b => b.id);
        localStorage.setItem(this.localItems, JSON.stringify(loc));
      },
      color(){
        return   `#${(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)}`
      },
      heightItem(min,max){
        return  Math.random() * (max - min) + min;
      }
    } 
  })
}