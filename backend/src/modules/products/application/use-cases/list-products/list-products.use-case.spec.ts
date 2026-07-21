import { ListProductsUseCase } from './list-products.use-case';
import { ProductRepository } from '@/modules/products/domain/repositories/product.repository.interface';
import { Product } from '@/modules/products/domain/entities/product.entity';


describe('ListProductsUseCase', () => {
  let useCase: ListProductsUseCase;
  let repository: jest.Mocked<ProductRepository>;


  beforeEach(() => {
    repository = {
      findById: jest.fn(),
      findAll: jest.fn(),
    };

    useCase = new ListProductsUseCase(repository);
  });


  it('should return all products', async () => {
    const products = [
      new Product(
        '1',
        'Pizza',
        12,
        50,
        new Date(),
        new Date(),
      ),
      new Product(
        '2',
        'Burger',
        10,
        30,
        new Date(),
        new Date(),
      ),
    ];


    repository.findAll.mockResolvedValue(products);


    const result = await useCase.execute();


    expect(result).toEqual(products);

    expect(repository.findAll)
      .toHaveBeenCalledTimes(1);
  });


  it('should return an empty array when there are no products', async () => {
    repository.findAll.mockResolvedValue([]);


    const result = await useCase.execute();


    expect(result).toEqual([]);

    expect(repository.findAll)
      .toHaveBeenCalledTimes(1);
  });


  it('should propagate repository errors', async () => {
    repository.findAll.mockRejectedValue(
      new Error('Database error'),
    );


    await expect(
      useCase.execute(),
    )
      .rejects
      .toThrow('Database error');


    expect(repository.findAll)
      .toHaveBeenCalledTimes(1);
  });

});