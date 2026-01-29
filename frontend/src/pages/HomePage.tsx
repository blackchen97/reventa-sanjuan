import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const products = [
    { title: "Bicicleta de Montaña", price: 50000, description: "Bicicleta profesional con 21 velocidades" },
    { title: "Laptop Gamer", price: 150000, description: "Laptop con RTX 3060 y 16GB RAM" },
    { title: "iPhone 14 Pro", price: 120000, description: "Smartphone en perfecto estado" },
    { title: "Consola PS5", price: 80000, description: "Consola con 2 juegos incluidos" },
  ];

  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Bienvenido a Reventa San Juan</h1>
        <p className="text-gray-600 mb-6">
          La mejor plataforma para comprar y vender productos de segunda mano en San Juan.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              description={product.description}
              onClick={() => console.log(`Ver ${product.title}`)}
            />
          ))}
        </div>
      </section>

      <section className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">¿Cómo funciona?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <div className="text-4xl mb-2">1️⃣</div>
            <h3 className="font-bold mb-2">Regístrate</h3>
            <p className="text-gray-600">Crea tu cuenta gratis en menos de 2 minutos</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <div className="text-4xl mb-2">2️⃣</div>
            <h3 className="font-bold mb-2">Publica</h3>
            <p className="text-gray-600">Sube fotos y detalles de lo que quieres vender</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <div className="text-4xl mb-2">3️⃣</div>
            <h3 className="font-bold mb-2">Vende</h3>
            <p className="text-gray-600">Conecta con compradores y cierra tu venta</p>
          </div>
        </div>
      </section>
    </div>
  );
}
