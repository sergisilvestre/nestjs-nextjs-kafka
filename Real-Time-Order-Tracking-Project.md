# Real-Time Order Tracking System

## Goal

Build a production-style event-driven application using TDD and Clean
Architecture.

## Tech Stack

  -----------------------------------------------------------------------
  Area                    Technology              Responsibility
  ----------------------- ----------------------- -----------------------
  Frontend                Next.js + TypeScript    UI, routing,
                                                  authentication,
                                                  real-time order
                                                  tracking

  Styling                 Tailwind CSS            Styling

  Backend                 NestJS + TypeScript     REST API, business
                                                  orchestration

  Database                PostgreSQL              Persistent storage

  ORM                     Prisma                  Database access

  Messaging               Kafka                   Asynchronous
                                                  communication between
                                                  services

  Real-time               WebSockets              Push live updates to
                                                  clients

  Testing                 Jest                    Unit tests

  API Testing             Supertest               Integration/E2E API
                                                  tests

  Containers              Docker                  Local development &
                                                  packaging

  Orchestration           Kubernetes              Deployment and scaling

  CI                      GitHub Actions          Lint, test, build,
                                                  deploy
  -----------------------------------------------------------------------

## Responsibilities

### Next.js

-   Menu & checkout
-   Order history
-   Live order status via WebSockets
-   Admin dashboard

### NestJS

-   REST endpoints
-   Validation
-   Publish Kafka events
-   Receive events
-   WebSocket gateway

### Kafka

-   Event bus between backend services.
-   Topics:
    -   order.created
    -   order.preparing
    -   order.ready
    -   order.delivered
    -   payment.completed

### WebSockets

-   Notify connected users instantly.
-   Events:
    -   order:update
    -   notification:new

### PostgreSQL

-   Orders
-   Products
-   Payments

## Architecture

-   Clean Architecture
-   TDD
-   SOLID
-   Dependency Injection

Layers: 1. Presentation 2. Application (Use Cases) 3. Domain 4.
Infrastructure

## Microservices

-   API Gateway
-   Order Service
-   Kitchen Service
-   Delivery Service
-   Notification Service
-   Analytics Service

## Feature Roadmap

### Phase 1

-   [ ] Project setup
-   [ ] Docker Compose
-   [ ] PostgreSQL
-   [ ] Prisma
-   [ ] JWT Authentication
-   [ ] User CRUD

### Phase 2

-   [ ] Create Order
-   [ ] Order History
-   [ ] Validation
-   [ ] Swagger

### Phase 3

-   [ ] WebSocket live order updates
-   [ ] Customer notifications

### Phase 4

-   [ ] Kafka integration
-   [ ] Publish order events
-   [ ] Consume kitchen events
-   [ ] Notification service

### Phase 5

-   [ ] Split into microservices
-   [ ] Shared contracts

### Phase 6

-   [ ] Kubernetes deployments
-   [ ] Services
-   [ ] ConfigMaps
-   [ ] Secrets
-   [ ] Ingress
-   [ ] Horizontal Pod Autoscaler

## Testing Strategy

### Unit (Jest)

-   Domain entities
-   Use cases
-   Services

### Integration (Supertest)

-   Controllers
-   REST endpoints

### E2E

-   Login
-   Create order
-   Track order

## TDD Workflow

1.  Write a failing test.
2.  Write the minimum implementation.
3.  Refactor.
4.  Repeat.

## Nice-to-have

-   Redis cache
-   Email notifications
-   Stripe payments
-   OpenTelemetry
-   Prometheus + Grafana
-   ELK logging
-   Rate limiting
-   Feature flags
