import logo from '../imagens/logo.svg'
import './style.css'

function Logo() {
     return(
        <div className='logo'>
          <img 
          src={logo} 
          alt='Logotipo Alura Books'
          className='logo-img'
          />
          <p><strong>Alura</strong>Books</p>
        </div>
     )
}

export default Logo;