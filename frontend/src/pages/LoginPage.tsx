export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h1>
        <form className="space-y-4">
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
          <button
            type="submit"
            className="w-full bg-primary-500 text-white p-3 rounded-lg hover:bg-primary-600 transition-colors font-medium"
          >
            Iniciar Sesión
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/register" className="text-primary-500 hover:text-primary-600">
            ¿No tienes cuenta? Regístrate
          </a>
        </div>
      </div>
    </div>
  );
}
