// Importa la clase App
import { App } from './app';

const  PORT = 3000;

 export async function main() {
    const app = new App(PORT);
  
    await app.listen();
    await app.database();
    
    

}


main();
