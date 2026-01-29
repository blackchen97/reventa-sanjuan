type Props = {
  title: string;
  price: number;
  description?: string;
  onClick?: () => void;
};

export default function ProductCard({ title, price, description, onClick }: Props) {
  return (
    <div 
      className="border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white"
      onClick={onClick}
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {description && (
        <p className="text-gray-600 mb-3">{description}</p>
      )}
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-green-600">${price.toLocaleString()}</span>
        <button className="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600 transition-colors">
          Ver detalles
        </button>
      </div>
    </div>
  );
}
