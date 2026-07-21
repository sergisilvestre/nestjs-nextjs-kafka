import { ProductRepository } from '@/modules/products/domain/repositories/product.repository.interface';
import { Product } from '@/modules/products/domain/entities/product.entity';
import { GetProductUseCase } from './get-product.use-case';
import { ProductNotFoundException } from '@/modules/products/domain/exceptions/ProductNotFoundException';


describe('GetProductUseCase', () => {
  let useCase: GetProductUseCase;
  let repository: jest.Mocked<ProductRepository>;


  beforeEach(() => {
    repository = {
      findById: jest.fn(),
      findAll: jest.fn(),
    };

    useCase = new GetProductUseCase(repository);
  });


  it('should return a product', async () => {
    const product = new Product(
      '1',
      'Pizza',
      12,
      50,
      new Date(),
      new Date(),
    );


    repository.findById.mockResolvedValue(product);


    const result = await useCase.execute('1');


    expect(result).toEqual(product);

    expect(repository.findById)
      .toHaveBeenCalledWith('1');
  });


  it('should throw if product does not exist', async () => {

    repository.findById.mockResolvedValue(null);


    await expect(
      useCase.execute('1')
    )
    .rejects
    .toThrow(ProductNotFoundException);


    expect(repository.findById)
      .toHaveBeenCalledWith('1');
  });

});