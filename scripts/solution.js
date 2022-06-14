export default function Solution ({ cssClass }) {
    const els = document.getElementsByClassName(cssClass)
    for (let i = 0; i < els.length; i++) {
        const el = els[i];
        const caption = el.getElementsByClassName('__SolutionCaption__')[0]
        const title = el.getElementsByClassName('__SolutionTitle__')[0]
        
        caption.style.bottom = (caption.clientHeight / 2) * -1 + 'px'
        el.onmouseenter = () => {
            caption.style.bottom = '80px'
            title.style.bottom = caption.clientHeight + 'px'
        }
        el.onmouseleave = () => {
            caption.style.bottom = (caption.clientHeight / 2) * -1 + 'px'
            title.style.bottom = '40px'
        }
    }
}