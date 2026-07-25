import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";


(async() =>{

    await main();

    console.log("Fin del programa 🚨")

})()


async function main() {

    console.log("Main Ejecutado📢🚀")

    const {b: base, l: limit, s:showTable} = yarg


    ServerApp.run({base, limit, showTable});

}


/*
console.log(process.argv)
console.log(process.argv.length)

//Desestructurar array de argumentos

const [tsnode,app,...argumentos] = process.argv
console.log(argumentos)
*/