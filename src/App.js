import IMAGE from './img/Eid_Mubarak.jpg'
import LOGO from './img/003-linkedin-logo.svg'
import './styles/style.scss'
import { ClickCounter } from './components'

export const App = () => {
  return (
    <div>
      <h1>React Webpack Boilerplate - {process.env.NODE_ENV}</h1>
      <img src={IMAGE} alt="" width="300" />
      <img src={LOGO} alt="" width="300" />
      <ClickCounter />
    </div>
  )
}
