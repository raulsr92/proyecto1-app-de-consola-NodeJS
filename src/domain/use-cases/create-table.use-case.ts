
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Interfaces 

export interface CreateTableUseCase{
    execute:(options: CreateTableOptions)=>string;
}

export interface CreateTableOptions{
    base: number,
    limit?: number,
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Clase de caso de uso 


export class CreateTable implements CreateTableUseCase{
    constructor(){
        /**
         * DI - Dependency Injection
         * 
         * 
         * **/
    }

    execute({base, limit=10}:CreateTableOptions){

        let outputMessage= "";

        //Ciclo for para crear la tabla

        for (let i = 1; i <= limit; i++) {

            outputMessage += `${base} x ${i} = ${base*i} \n`
            
        }

        return outputMessage;
    }

}
