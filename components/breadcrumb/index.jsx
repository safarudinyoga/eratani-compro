import styles from './breadcrumb.module.sass'
import Link from 'next/link'

const Breadcrumb = ({ nav }) => (
  <nav className={styles.breadcrumb}>
    <ol>
      {nav.map((item, i) =>
        i === 0 ? <li key={i}><a onClick={() => item.link.back()}>{item.name}</a></li> :
        <li key={i}><Link href={item.link}><a>{item.name}</a></Link></li>
      )}
    </ol>
  </nav>
)

Breadcrumb.propTypes = {}

export default Breadcrumb