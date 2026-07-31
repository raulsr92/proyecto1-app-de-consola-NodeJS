import { CreateTable } from "../domain/use-cases/create-table.use-case"
import { SaveFile } from "../domain/use-cases/save-file.use-case"

interface RunOptions{
    base: number,
    limit: number,
    showTable: boolean,
    fileName: string,
    fileDest: string
}


export class ServerApp{

    static run({base, limit,showTable, fileName, fileDest}:RunOptions){

        console.log("Server running....")
        console.log({base,limit, fileName, fileDest})

        /*Creación de la Tabla*/ 

            const table = new CreateTable().execute({base,limit})
            console.log(`¿Quiere imprimir tabla: ${showTable}`)
            if (showTable) {
                console.log(table)
            }
        /*Creación del archivo */ 

           const wasCreated = new SaveFile()
            .execute({
                fileContent:table,
                fileDestination: `${fileDest}/table-${base}`,
                fileName: fileName
            });

            (wasCreated)? console.log("File was created!!") : console.log("File was not created!!");

    }
 
}
