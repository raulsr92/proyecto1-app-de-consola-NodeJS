import { SaveFile } from "./save-file.use-case"
import fs from "fs";

describe('Test in UseCase Save File',()=>{

    const customOptions = {
        fileContent: 'custom content',
        fileDestination:'custom-outputs',
        fileName: 'custom-table-name'
    }

    const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`


    //Borrar carpeta antes de cada prueba

    beforeEach(()=>{

        fs.rmSync('outputs', {recursive:true,force:true})

        fs.rmSync(`${customOptions.fileDestination}`, {recursive:true,force:true})

    })

    afterEach(()=>{

        fs.rmSync('outputs', {recursive:true,force:true})

        fs.rmSync(`${customOptions.fileDestination}`, {recursive:true,force:true})

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


    test('Should save file with custom values ', () => {
      
        const saveFile = new SaveFile();

        /*const options = {
            fileContent: 'custom content',
            fileDestination:'custom-outputs',
            fileName: 'custom-table-name'
        }*/

        /*const filePath = `${options.fileDestination}/${options.fileName}.txt`*/

        const result = saveFile.execute(customOptions)
        const checkFile = fs.existsSync(customFilePath)
        const fileContent = fs.readFileSync(customFilePath,{encoding: "utf-8"})   


        expect(result).toBe(true)
        expect(checkFile).toBe(true)
        expect(fileContent).toContain(customOptions.fileContent)

    })
    

})
