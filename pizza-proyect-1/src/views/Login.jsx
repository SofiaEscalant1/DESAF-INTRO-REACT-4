import { useState } from "react"

export const FormularioMUI = ({ usuarios, setUsuarios }) => {
  const [fullName, setFullName] = useState({
    id: "",
    nombre: "",
    apellido: "",
    email: ""
  })
  const [error, setError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  // funcion para 
  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      fullName.nombre.trim() === "" ||
      fullName.apellido.trim() === "" ||
      fullName.email.trim() === ""
    ) {
      setError(true)
      return
    }

    const emailExiste = usuarios.some(
      (usuario) => usuario.email === fullName.email
    )

    if (emailExiste) {
      setEmailError(true)

      setTimeout(() => {
        setEmailError(false)
        setFullName({
          id: "",
          nombre: "",
          apellido: "",
          email: ""
        })
      }, 3000)
      return
    }

    const id = crypto.randomUUID()
    setUsuarios((prev) => [...prev, { ...fullName, id }])

    setFullName({
      id: "",
      nombre: "",
      apellido: "",
      email: ""
    })

    setError(false)
    setEmailError(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFullName({
      ...fullName,
      [name]: value
    })
    setError(false)
    setEmailError(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div className="flex flex-col gap-1">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          value={fullName.nombre}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          placeholder="Ingrese su nombre"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="apellido">Apellido</label>
        <input
          id="apellido"
          name="apellido"
          value={fullName.apellido}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          placeholder="Ingrese su apellido"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={fullName.email}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          placeholder="Ingrese su email"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
      >
        Enviar
      </button>

      {error && (
        <p className="text-red-600">Todos los campos son obligatorios.</p>
      )}
      {emailError && (
        <p className="text-red-600">Este email ya existe.</p>
      )}
    </form>
  )
}

export function Login() {
  const [usuarios, setUsuarios] = useState([])

  return (
    <main className="container py-4">
      <h1>Login</h1>
      <FormularioMUI usuarios={usuarios} setUsuarios={setUsuarios} />
    </main>
  )
}
