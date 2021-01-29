const app = {
    data() {
        return {
            img:"./images/Dek_D_1.png",
            imgs:["./images/Dek_D_1.png","./images/Dek_D_2.png"]
        }
    },
    methods: {
        logomouseover: function(){
          this.img = this.imgs[1]
        },    
        logomouseleave: function(){
          this.img = this.imgs[0]
        }
      }
}
Vue.createApp(app).mount('#app')