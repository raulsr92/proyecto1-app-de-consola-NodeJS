import { yarg } from "./config/plugins/yargs.plugin";


//console.log(process.argv)
//console.log("-------------------------------")
//console.log(yarg)

(async() =>{

    await main();

    console.log("Fin del programa 🚨")

})()


async function main() {
    console.log("Main Ejecutado📢🚀")
    console.log(yarg)   

    //Desestructurar

    const {b, base}= yarg;
    console.log(b)
    console.log(base)

}


/*
console.log(process.argv)
console.log(process.argv.length)

//Desestructurar array de argumentos

const [tsnode,app,...argumentos] = process.argv
console.log(argumentos)
*/