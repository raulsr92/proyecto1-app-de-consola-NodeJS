
import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

console.log(yarg)

// ➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤ Desestructurar YARG

    const {b, l, s:showTable}= yarg;

    console.log({b, l, showTable})


// ➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤ Variables y Constantes


let outputMessage = ""
const headerMessage = `
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░ Tabla del ${b} ░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n
`

// ➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤ Agregar la tabla con un ciclo for

for (let i = 1; i <= l; i++) {

    outputMessage += `${b} x ${i} = ${b*i} \n`
    
}

// ➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤ Agregar el header a la variable outputMessage

outputMessage = headerMessage + outputMessage

if (showTable) {
    console.log(outputMessage)
}


// ➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤ Guardar en archivo

const outputPath = `outputs`

fs.mkdirSync(outputPath, {recursive:true})

fs.writeFileSync(`${outputPath}/tabla-${b}.txt`,outputMessage);
console.log("File was created!!")


