import style from './header.module.css'
import ignitLogo from '../assets/ignite-logo.svg'

export default function Header() {
  return (
    <header className={style.header}>
      <img src={ignitLogo} alt="" />
    </header>
  )
}
