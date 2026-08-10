import { SaveFile } from "./save-file.use-case"
import fs from "fs";

describe('Test in UseCase Save File',()=>{
    //Borrar carpeta antes de cada prueba

    beforeEach(()=>{

        fs.rmSync('outputs', {recursive:true,force:true})

    })

    afterEach(()=>{

        fs.rmSync('outputs', {recursive:true,force:true})

    })
    
    test('Should save file with default values',()=>{

        const saveFile = new SaveFile();
        const filePath = 'outputs/multiplication-table.txt'
        const options = {
            fileContent: 'test content'
        }

        const result = saveFile.execute(options)
        const checkFile = fs.existsSync(filePath)
        const fileContent = fs.readFileSync(filePath,{encoding: "utf-8"})   
        
        expect(result).toBe(true)
        expect(checkFile).toBe(true)
        expect(fileContent).toContain(options.fileContent)
    })
})
