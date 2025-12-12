## Nestjs course

### What Is NestJS?

### NestJS architecture

![alt text](nestjs-architecture.png)

- NestJS uses a ```modular architecture``` that enables developers to generate reusable code and organize individual modules for specific concerns. Here are some building blocks in NestJS:

- ```Modules```: A module is a class mark with the ```@Module() decorator```. It serves as a container for related ```controllers```, ```providers```, and other related codes. NestJS provides a powerful module system that allows developers to create ```reusable modules``` and organize their code.

- ```Controllers```: A controller is responsible for ```handling incoming requests and returning responses``` to the client. ```It is a TypeScript class annotated with the @Controller() decorator```. Controllers are used to ```define routes and endpoint handlers for the application```.

- ```Services```: In NestJS, ```a service is a TypeScript class annotated with the @Injectable() decorator```. It is responsible for handling business logic, performing data operations, and providing functionality to other parts of the application ```through the NestJS dependency injection system```.

- ```Pipes```: Pipes can be applied to ```individual route handlers```, controllers, or the entire application to ```transform input data before it is processed by a controller```, making them useful for tasks such as ```validation and transformation```.

- ```Guards```: A guard ```is a class mark with the @Injectable() decorator and implements the CanActivate interface```. NestJS applications use it to ```control access to endpoints by performing tasks such as authentication, authorization, and rate limiting```.

- ```Middleware```: Middleware functions access the request, response, and the next middleware in the stack. ```Middleware functions execute code, modify the request and response objects, end the request-response cycle```, or call the next middleware in the stack.

- Interceptors: NestJS uses interceptors as ```classes that intercept incoming HTTP requests and outgoing HTTP responses```. Interceptors handle ```logging, error handling, caching, or response transformation```.

### Nestjs request lifecycle
![alt text](request-life-cycle.png)


### Use cases
NestJS is a versatile framework that facilitates the development of various types of applications. Here are some types of applications we can build with NestJS:

- ```Real-time applications```: NestJS provides built-in support for web sockets, making it an excellent choice for developing real-time applications or live-streaming platforms.

- ```Microservices```: NestJS’s modular architecture and support for message brokers such as RabbitMQ and Kafka make it a perfect choice for building scalable and distributed microservices.

- ```API-based applications```: NestJS offers a built-in capability to develop RESTful APIs and seamlessly integrate them with popular front-end frameworks like Angular or React, making it an ideal platform for creating modern web applications.


### What we will be learning in this course ?

[] Getting started: Get introduced to NestJS and its components, and build a simple application.

[] NestJS CLI: Learn how to use the NestJS command-line interface to speed development.

[] Building a REST API: Learn how to design and develop a RESTful API using NestJS.

[] Validation and error handling: Learn how to validate data and handle errors in your application.

[] Working with databases: Understand how to use TypeORM for database interactions.

[] App configuration: Manage different application settings and configurations.

[] Authentication: Implement user authentication using JSON Web Tokens (JWTs).

[] Authorization: Manage user permissions and roles.

[] Testing: Write and run tests for services, controllers, and end-to-end operations.

[] Logging: Implement logging for monitoring and debugging purposes.