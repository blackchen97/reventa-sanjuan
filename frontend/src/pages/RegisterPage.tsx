export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Crear Cuenta</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Nombre Completo</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Juan Pérez"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Correo Electrónico</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Contraseña</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="********"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Confirmar Contraseña</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
          >
            Registrarse
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/login" className="text-primary-500 hover:text-primary-600">
            ¿Ya tienes cuenta? Inicia Sesión
          </a>
        </div>
      </div>
    </div>
  );
}
