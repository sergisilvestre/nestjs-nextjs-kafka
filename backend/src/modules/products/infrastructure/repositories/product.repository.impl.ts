import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../domain/repositories/product.repository.interface';
import { PrismaService } from '@/modules/shared/infrastructure/prisma/prisma.service';
import { Product } from '../../domain/entities/product.entity';
import { ProductMapper } from '../prisma/product.mapper';

@Injectable()
export class ProductRepositoryImpl implements ProductRepository {

  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async findAll(): Promise<Product[]> {

    const products = await this.prisma.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return products.map(ProductMapper.toDomain);
  }


  async findById(id: string): Promise<Product | null> {

    const product = await this.prisma.product.findUnique({
      where: {
        id,
      },
    });

    return product
      ? ProductMapper.toDomain(product)
      : null;
  }
}