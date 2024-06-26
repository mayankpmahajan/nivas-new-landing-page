import { logo } from '../assets'


const Logo = () => {
  return (
    <section>
        <img className="absolute z-10 h-20 ml-2" src={logo} alt="logo" />
    </section>
  )
}

export default Logo