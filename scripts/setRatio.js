export default function SetRatio ({ cssClass }) {
    let objects = document.getElementsByClassName(cssClass)

    const calculate = () => {
        for (let i = 0; i < objects.length; i++) {
            const element = objects[i];
            const ratioData = element.dataset
    
            const elWidth = element.clientWidth
            const elHeight = elWidth / parseFloat(ratioData.ratioW) * parseFloat(ratioData.ratioH)
            elHeight = (elHeight <= parseFloat(ratioData.ratioMinH)) ? parseFloat(ratioData.ratioMinH) : elHeight

            objects[i].style.height = elHeight + 'px'
            objects[i].style.position = 'relative'
        }
    }

    return {
        Calculate: calculate
    }

}