const loading = document.querySelector('.loading')
const loadingWrapper = document.querySelector('.loading__wrapper')
const wrapper = document.querySelector('.wrapper')
const contentWrapper = document.querySelector('.content__wrapper')



function loadingFunc () {
    let i = 0
    let loadingInterval = setInterval(() => {
        i++
        loading.style.width = `${i}%`

        if(i >= 100) {
            clearInterval(loadingInterval)
            loadingWrapper.style.opacity = '0'
            loadingWrapper.style.pointerEvents = 'none'
            loadingWrapper.style.display = 'none'
            wrapper.classList.remove('load')
            contentWrapper.style.display = 'block'
        }
    }, 100)
}
loadingFunc()