export default function Eliptor ({ cssClass }) {

    let objects = document.getElementsByClassName(cssClass)

    const calculate = () => {
        for (let i = 0; i < objects.length; i++) {
            const element = objects[i]
            const span = element.firstChild
            const heightWrapper = element.clientHeight
            const text = element.dataset.text

            span.innerHTML = text
            
            while (span.clientHeight > heightWrapper) {
                span.innerHTML = span.innerHTML.replace(/\W*\s(\S)*$/, '...')
            }
        }
    }

    return {
        Calculate: calculate
    }

}