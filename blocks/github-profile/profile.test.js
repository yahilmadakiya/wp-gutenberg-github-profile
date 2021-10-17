const profile = require("./profile")

// @ponicode
describe("fetchSuggestion", () => {
    let inst

    beforeEach(() => {
        inst = new profile.default(987650)
    })

    test("0", () => {
        let callFunction = () => {
            inst.fetchSuggestion({ target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.fetchSuggestion({ target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.fetchSuggestion({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.fetchSuggestion(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("selectEvent", () => {
    let inst

    beforeEach(() => {
        inst = new profile.default(56784)
    })

    test("0", () => {
        let callFunction = () => {
            inst.selectEvent("Dillenberg", { login: 123 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.selectEvent("elio@example.com", { login: "user name" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.selectEvent("Dillenberg", { login: "username" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.selectEvent("elio@example.com", { login: 123 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.selectEvent("Dillenberg", { login: "user123" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.selectEvent(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("fetchUserData", () => {
    let inst

    beforeEach(() => {
        inst = new profile.default("bc23a9d531064583ace8f67dad60f6bb")
    })

    test("0", () => {
        let callFunction = () => {
            inst.fetchUserData("DROP TABLE tmp;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.fetchUserData("SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.fetchUserData("UNLOCK TABLES;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.fetchUserData("DELETE FROM Projects WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.fetchUserData("UPDATE Projects SET pname = %s WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.fetchUserData(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
