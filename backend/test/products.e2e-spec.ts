import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';

import { AppModule } from '../src/app.module';

describe('Products API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    await app.init();
  });

  afterAll(async () => {
    if (app) {
      await app.close();
    }
  });

  describe('GET /products', () => {
    it('should return products', async () => {
      const response = await request(app.getHttpServer())
        .get('/products')
        .expect(200);

      expect(response.body).toBeInstanceOf(Array);
    });
  });

  describe('GET /products/:id', () => {
    it('should return product by id', async () => {
      const products = await request(app.getHttpServer()).get('/products');

      const productId = products.body[0].id;

      const response = await request(app.getHttpServer())
        .get(`/products/${productId}`)
        .expect(200);

      expect(response.body.id).toBe(productId);
    });

    it('should return 404 for invalid product', async () => {
      await request(app.getHttpServer())
        .get('/products/not-existing')
        .expect(404);
    });
  });

});
