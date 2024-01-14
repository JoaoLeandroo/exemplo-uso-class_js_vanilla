const button = document.querySelector(".button")
const infos = document.querySelector(".infos")

class Person {
    constructor(name, level) {
        this.name = name;
        this.level = level
    }

    restrictionLevelMaximo() {
        if(this.level < 250) {
            return "é necesserario atigir o level maximo para aceitar essa missão"
        }

        return "Missão aceita com sucesso"
    }
}

const LoolRaider = new Person("LoolRaider", 250)

button.addEventListener("click", () => {

    infos.innerHTML = `Seu level atual é ${LoolRaider.level}`
    alert(LoolRaider.restrictionLevelMaximo())
})