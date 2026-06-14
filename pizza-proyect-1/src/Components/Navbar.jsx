import { formatNumber } from '../utils/formatPrice'

export function Navbar() {
  const token = false
  const total = 25000

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>
        <div className="d-flex align-items-center gap-2 flex-wrap w-100">
          <div className="d-flex flex-wrap gap-2">
            <button type="button" className="btn btn-outline-light">🍕 Home</button>
            {token ? (
              <>
                <button type="button" className="btn btn-outline-light">🔒 Profile</button>
                <button type="button" className="btn btn-outline-light">🔒 Logout</button>
              </>
            ) : (
              <>
                <button type="button" className="btn btn-outline-light">🔒 Login</button>
                <button type="button" className="btn btn-outline-light">🔒 Register</button>
              </>
            )}
          </div>
          <button type="button" className="btn btn-outline-info ms-auto">🛒 Total: ${formatNumber(total)}</button>
        </div>
      </div>
    </nav>
  )
}
