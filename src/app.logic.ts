
import fs from "fs";


// ➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤ Variables y Constantes

let outputMessage = ""
const base = 5
const headerMessage = `
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░ Tabla del ${base} ░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n
`

// ➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤ Agregar la tabla con un ciclo for

for (let i = 1; i <= 10; i++) {

    outputMessage += `${base} x ${i} = ${base*i} \n`
    
}

// ➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤ Agregar el header a la variable outputMessage

outputMessage = headerMessage + outputMessage

console.log(outputMessage)

// ➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤ Guardar en archivo

const outputPath = `outputs`

fs.mkdirSync(outputPath, {recursive:true})

fs.writeFileSync(`${outputPath}/tabla-${base}.txt`,outputMessage);
console.log("File was created!!")


