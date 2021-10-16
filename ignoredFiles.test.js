const ignoredFiles = require("./ignoredFiles")
// @ponicode
describe("ignoredFiles", () => {
    test("0", () => {
        let callFunction = () => {
            ignoredFiles(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            ignoredFiles("http://placeimg.com/640/480")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            ignoredFiles(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            ignoredFiles(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            ignoredFiles(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            ignoredFiles(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
