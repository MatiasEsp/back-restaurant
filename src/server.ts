import App from './app';
// import components from './components';

const server: App = new App();

// // components.forEach(lib =>
// //   require(`./components/${lib}`)(server)
// // )

// const libs: any = require('./components')
// console.log('libs', libs);

// libs.default.forEach((lib: string) => {
//   console.log(`./components/${lib}`);
//   // doc: https://stackabuse.com/reading-and-writing-json-files-with-node-js/
//   return require(`./components/${lib}`)(server);
// })
const port: number = process.env.PORT ? Number(process.env.PORT) : 8080;

server.startServer(port);