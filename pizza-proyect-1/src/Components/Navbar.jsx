import { useNavigate } from 'react-router-dom';
import { formatNumber } from '../utils/formatPrice'

export function Navbar() {
  const token = false
  const total = 25000
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button type="button" className="navbar-brand btn btn-link text-white p-0" onClick={() => navigate('/')}>Pizzería Mamma Mia!</button>
        <div className="d-flex align-items-center gap-2 flex-wrap w-100">
          <div className="d-flex flex-wrap gap-2">
            <button type="button" className="btn btn-outline-light btn-sm" onClick={() => navigate('/')}>🍕 Home</button>
            {token ? (
              <>
                <button onClick={() => navigate('/profile')}
                type="button" className="btn btn-outline-light btn-sm">🔒 Profile</button>
                <button 
                type="button" className="btn btn-outline-light btn-sm">🔒 Logout</button>
              </>
            ) : (
              <>
                <button onClick={() => navigate('/login')}
                type="button" className="btn btn-outline-light btn-sm">🔒 Login</button>
                <button onClick={() => navigate('/register')}
                type="button" className="btn btn-outline-light btn-sm">🔒 Register</button>
              </>
            )}
          </div>
          <button onClick={() => navigate('/cart')}
          type="button" className="btn btn-outline-info btn-sm ms-auto">🛒 Total: ${formatNumber(total)}</button>
        </div>
      </div>
    </nav>
  )
}
