const sections = document.querySelectorAll('section')
const bubble = document.querySelector('.bubble')


const gradients = [
    "linear-gradient(to right top, #f46b45, #eea849)",
    "linear-gradient(to right top, #005c97, #363795)",
    "linear-gradient(to right top, #e53935, #e35b5b)",
]

const options = {
    threshold: 0.7 
}

let observer = new IntersectionObserver(navCheck, options)

function navCheck(entires){
    entires.forEach(entry => {
        // console.log(entry)
        const className = entry.target.className // Vai dar o nome da class
        // console.log(className)
        const activeAnchor = document.querySelector(`[data-page=${className}]`)
        const gradientIndex = entry.target.getAttribute(`data-index`)
        const coords = activeAnchor.getBoundingClientRect() // Dar a posição do usuario
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left,

        }
        if (entry.isIntersecting){
            bubble.style.setProperty(`left`, `${directions.left}px`)
            bubble.style.setProperty(`top`, `${directions.top}px`)
            bubble.style.setProperty(`width`, `${directions.width}px`)
            bubble.style.setProperty(`height`, `${directions.height}px`)
            bubble.style.background = gradients[gradientIndex]
        }
    })
}

sections.forEach(section => {
    observer.observe(section)
})