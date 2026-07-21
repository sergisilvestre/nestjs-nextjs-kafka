import { Product } from '@/modules/products/domain/entities/product.entity';
import { Prisma } from '@prisma/client';

export class ProductMapper {

  static toDomain(
    raw: Prisma.ProductGetPayload<{}>
  ): Product {

    return new Product(
      raw.id,
      raw.name,
      Number(raw.price),
      raw.stock,
      raw.createdAt,
      raw.updatedAt,
    );
  }

}