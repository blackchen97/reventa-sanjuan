import { Request, Response } from 'express';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products: Product[] = [
      { id: 1, title: 'Bicicleta', price: 50000, description: 'Bicicleta de montaña' },
      { id: 2, title: 'Laptop', price: 150000, description: 'Laptop gamer' },
      { id: 3, title: 'Celular', price: 80000, description: 'Smartphone último modelo' },
    ];
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product: Product = {
      id: parseInt(req.params.id),
      title: 'Producto de ejemplo',
      price: 10000,
      description: 'Descripción del producto'
    };
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener producto' });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { title, price, description } = req.body;
    const newProduct: Product = {
      id: Date.now(),
      title,
      price,
      description
    };
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto' });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { title, price, description } = req.body;
    const updatedProduct: Product = {
      id: parseInt(req.params.id),
      title,
      price,
      description
    };
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar producto' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
};
