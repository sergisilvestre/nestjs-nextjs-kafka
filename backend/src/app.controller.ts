import { Controller, Get, Header } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller()
export class AppController {
  @Get()
  @Header('Content-Type', 'text/html')
  getRoot() {
    return `
      <h2>Real-Time Order Tracking API</h2>
      <p>Backend is running successfully.</p>
      <p><a href="/docs">📚 Open Swagger Documentation</a></p>
    `;
  }
}