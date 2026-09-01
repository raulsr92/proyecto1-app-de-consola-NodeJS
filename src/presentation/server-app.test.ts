import { ServerApp } from "./server-app"

describe('Test in Server App', () => {

    test('Should create ServerApp instance',()=>{

        const severApp = new ServerApp()

        expect(severApp).toBeInstanceOf(ServerApp)
        expect(typeof ServerApp.run).toBe("function")

    })
  
})
