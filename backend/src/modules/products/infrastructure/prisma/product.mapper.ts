import { Product } from '@/modules/products/domain/entities/product.entity';
import { Prisma } from '@prisma/client';
import { ProductResponseDto } from '../../presentation/controllers/product.response.to';

export class ProductMapper {
  static toDomain(raw: Prisma.ProductGetPayload<{}>): Product {
    return new Product(
      raw.id,
      raw.name,
      Number(raw.price),
      raw.stock,
      raw.createdAt,
      raw.updatedAt,
    );
  }

  static toResponse(product: Product): ProductResponseDto {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
  }
}