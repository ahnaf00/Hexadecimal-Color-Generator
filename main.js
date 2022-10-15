window.onload = () => {
    main()
}

function main()
{
    const root = document.getElementById("root")
    const btn = document.getElementById("change-btn")
    const output = document.getElementById("output")
    
    btn.addEventListener("click", function(){
        const bgColor = hexColorGenerator()
        root.style.backgroundColor = bgColor
        output.value = bgColor
    })
}

function hexColorGenerator()
{
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)

    return `#${red.toString(16)}${green.toString(16)}${red.toString(16)}`

}