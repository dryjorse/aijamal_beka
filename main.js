// const loading = document.querySelector('.loading')
// const loadingWrapper = document.querySelector('.loading__wrapper')
// const wrapper = document.querySelector('.wrapper')
// const contentWrapper = document.querySelector('.content__wrapper')
const date = new Date()
console.log(date)



const time = document.querySelector('.time')

function timerFunc () {
    
    setInterval(() => {
        const nowDate = new Date()
        const date = '2022-09-29T03:00:00.000Z'
        let currentDate = Date.parse(new Date());
        let days = (currentDate - Date.parse(date))/86400000;
        let hours = nowDate.getHours()
        let minutes = nowDate.getMinutes()
        let seconds = String(nowDate.getSeconds()).length === 1 ? `0${nowDate.getSeconds()}` : nowDate.getSeconds()
        time.innerHTML = `${Math.round(days)}/${hours}/${minutes}:${seconds}`
    }, 1000)
}
timerFunc()

const swiper = new Swiper('.swiper', {
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });