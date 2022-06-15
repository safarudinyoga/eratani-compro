export default function Eliptor ({ cssClass }) {

    let nodes = document.getElementsByClassName(cssClass)

    const Calculate = () =>
        Array.prototype.forEach.call(nodes, el => {
            const span = el.firstChild

            span.innerHTML = el.dataset.text
            while (span.clientHeight > el.clientHeight) {
                span.innerHTML = span.innerHTML.replace(/\W*\s(\S)*$/, '...')
            }
        })

    return { Calculate }
}