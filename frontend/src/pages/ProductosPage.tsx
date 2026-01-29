export default function ProductosPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Todos los Productos</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="text-center p-8 text-gray-500">
          <p>Próximamente: Lista de productos desde el backend</p>
        </div>
      </div>
    </div>
  );
}
