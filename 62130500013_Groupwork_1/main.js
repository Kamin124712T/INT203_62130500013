const app = {
    data() {
        return {
            img:"./images/Dek_D_1.png",
            imgs:["./images/Dek_D_1.png","./images/Dek_D_2.png"],

            ad:["./images/ad1.jfif","./images/ad2.png","./images/ad3.jfif","./images/ad4.jfif","./images/ad5.png","./images/ad6.png"],
            adImgs:"./images/ad1.jfif",
            adClassAll:["cursor-pointer w-2 h-2 bg-yellow-500 mx-3 rounded-full","cursor-pointer w-2 h-2 bg-gray-500 mx-3 rounded-full","cursor-pointer w-2 h-2 bg-gray-500 mx-3 rounded-full","cursor-pointer w-2 h-2 bg-gray-500 mx-3 rounded-full","cursor-pointer w-2 h-2 bg-gray-500 mx-3 rounded-full","cursor-pointer w-2 h-2 bg-gray-500 mx-3 rounded-full"],
            adClass:"cursor-pointer w-2 h-2 bg-gray-500 mx-3 rounded-full",
            adClassShow:"cursor-pointer w-2 h-2 bg-yellow-500 mx-3 rounded-full",
            adShow:0,

            dTYtext:[["อยากเพิ่มน้ำหนักต้องกินอะไร? | NUGIRL TALK","รู้มั้ยทำไมผมถึงยาวช้า? | NUGIRL TALK"],["Review คณะเกษตรศาสตร์ มช. ห้องปฏิบัติการสุดล้ำ! แถมที่ฝึกงานวิวสวยระดับล้าน!","CP Young Innovator Scholarship"],["TR12 :   Review! อุปกรณ์วาดรูปสำหรับว่าที่เด็กสถาปัตย์ เค้าใช้อะไรกันบ้างนะ ?","TR12 : กัปตันอันน์ รีวิว! การเป็นเด็กกิจกรรมได้ประสบการณ์มากกว่าที่คิด!"],["คุยมันๆ กับ \"แพรวา บิวกิ้น พีพี\" พร้อมซิงเกิลสุดพิเศษ #มันดีเลย  | Dek-D Live","ไขความสัมพันธ์ของ \"เซ้นต์ มีน พีค ฟ้า\" จากหนัง \#วอนเธอ"]],
            dTY:["https://www.youtube.com/embed/v7rfZlOJy-Y","https://www.youtube.com/embed/QfqUWwu4j8E","https://www.youtube.com/embed/L_IhPokFNg8","https://www.youtube.com/embed/LVJwhixYEmc"],
            dTYShowURL:"https://www.youtube.com/embed/v7rfZlOJy-Y",
            dTYClassAll:["cursor-pointer box-content flex-none w-auto h-auto rounded-full text-yellow-500 bg-yellow-100 p-1 m-1 text-xs","cursor-pointer box-content flex-none w-auto h-auto rounded-full bg-white hover:text-yellow-500 hover:bg-yellow-100 p-1 m-1 text-xs","cursor-pointer box-content flex-none w-auto h-auto rounded-full bg-white hover:text-yellow-500 hover:bg-yellow-100 p-1 m-1 text-xs","cursor-pointer box-content flex-none w-auto h-auto rounded-full bg-white hover:text-yellow-500 hover:bg-yellow-100 p-1 m-1 text-xs"],
            dTYClass:"cursor-pointer box-content flex-none w-auto h-auto rounded-full bg-white hover:text-yellow-500 hover:bg-yellow-100 p-1 m-1 text-xs",
            dTYClassShow:"cursor-pointer box-content flex-none w-auto h-auto rounded-full text-yellow-500 bg-yellow-100 p-1 m-1 text-xs",
            dTYShow:0,
          }
    },
    methods: {
        logomouseover: function(){
          this.img = this.imgs[1]
        },    
        logomouseleave: function(){
          this.img = this.imgs[0]
        },
        adclick: function(n){
          this.adImgs = this.ad[n];
          this.adClassAll[n] = this.adClassShow;
          this.adClassAll[this.adShow] = this.adClass;
          this.adShow = n;
        },
        dTYclick: function(n){
          this.dTYShowURL = this.dTY[n];
          this.dTYClassAll[n] = this.dTYClassShow;
          this.dTYClassAll[this.dTYShow] = this.dTYClass;
          this.dTYShow = n;
        }
      }
}
Vue.createApp(app).mount('#app')