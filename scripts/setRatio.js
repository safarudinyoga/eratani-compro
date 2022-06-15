export default function SetRatio ({ cssClass }) {

    let nodes = document.getElementsByClassName(cssClass)

    const Calculate = () =>
        Array.prototype.forEach.call(nodes, el => {
            const ratioData = el.dataset
    
            let height = el.clientWidth / parseFloat(ratioData.ratioW) * parseFloat(ratioData.ratioH)
            height = (height <= parseFloat(ratioData.ratioMinH)) ? parseFloat(ratioData.ratioMinH) : height

            el.style.height = height + 'px'
            el.style.position = 'relative'
        })

    return { Calculate }
}