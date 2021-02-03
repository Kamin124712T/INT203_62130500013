const app = {
    data() {
        return {
            firstname:"Kamin",
            lastname:"Tohpradu",
            job:"front-end developer",
            article:4,
            followers:100,
            ratings:4.12,
            img:"./images/myprofile.jpg"
        }
    },
}

var mountedApp = Vue.createApp(app).mount('#app')