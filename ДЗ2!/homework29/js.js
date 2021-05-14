window.onload=function(){
 
   Vue.component('diagramss-as',{
 
      props: {
        height: Number,
        color: String,
        id: Number,
      },
    
    

    template:`
    <div >
      <div class="parent" >
          <div :style="{height:height+'px',width:80+'px',backgroundColor:color}">{{id}}</div>
      </div>
      <input type="range" min=100 max=300>
        </div>`,
       

   
  })
    
  let app=new Vue ({
    el:"#app",
    data:{ 
      itemsone:[]},
   
    mounted:function(){
      for (let item =1;item<=7;item++){
        let id=item
        let height=this.heightItem(100,300)
        let color= this.color()
        let obj={id:id,color:color,height:height}
        this.itemsone.push(obj)
      } 
    },
    methods:{ 
      sort:function(){
       console.log('sort1')
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