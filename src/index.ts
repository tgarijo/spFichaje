// Importa la clase App
import { App } from './app';

const  PORT = 3000;

async function main() {
    const app = new App(PORT);
  
    await app.database();
    
    await app.listen();

}


main();
