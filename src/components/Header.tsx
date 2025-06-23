import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#282c34', color: 'white' }}>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0 }}>
          <li><Link to="/home" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
          <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
