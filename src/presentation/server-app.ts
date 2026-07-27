import { CreateTable } from "../domain/use-cases/create-table.use-case"

interface RunOptions{
    base: number,
    limit: number,
    showTable: boolean
}


export class ServerApp{

    static run({base, limit,showTable}:RunOptions){

        console.log("Server running....")
        console.log({base,limit})

        const table = new CreateTable().execute({base,limit})

        console.log(`¿Quiere imprimir tabla: ${showTable}`)
        
        if (showTable) {
            console.log(table)
        }

    }
 
}

