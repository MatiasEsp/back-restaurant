import App from './app';

const server: App = new App();

const port: number = process.env.PORT ? Number(process.env.PORT) : 8080;

server.startServer(port);