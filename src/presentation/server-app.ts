import { CreateTable } from "../domain/use-cases/create-table.use-case"
import { SaveFile } from "../domain/use-cases/save-file.use-case"

interface RunOptions{
    base: number,
    limit: number,
    showTable: boolean
}


export class ServerApp{

    static run({base, limit,showTable}:RunOptions){

        console.log("Server running....")
        console.log({base,limit})

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
                fileDestination: `outputs/table-${base}`
            });

            (wasCreated)? console.log("File was created!!") : console.log("File was not created!!");

    }
 
}
