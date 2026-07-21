import { Product } from '../entities/product.entity';
export const PRODUCT_REPOSITORY = Symbol('ProductRepository');

export interface ProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
}