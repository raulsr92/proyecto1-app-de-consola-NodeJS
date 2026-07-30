import fs from "fs";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Interfaces 
export interface SaveFileUseCase{

    execute:(options: SaveFileOptions)=>boolean;  
}

export interface SaveFileOptions{
    fileContent   : string,
    fileDestination?  : string,
    fileName?     : string
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Clase de caso de uso 

export class SaveFile implements SaveFileUseCase {
    constructor(){
        /**
         * Repository: Storage Respository
         * 
         * 
         * **/
    }
    execute({
            fileContent, 
            fileDestination = 'outputs', 
            fileName ='table'
        }:SaveFileOptions):boolean{

        try {
            fs.mkdirSync(fileDestination, {recursive:true})

            fs.writeFileSync(`${fileDestination}/${fileName}.txt`,fileContent);
            
            return true
        } catch (error) {
            console.log(error)
            return false
            
        }
    }
}
