/*
Abstraction means hiding the complexity and logic behind every functionalities and show essential data and functionalities.
Abstraction => showing essential features and hiding complexity and unnecessary implementations.
*/

class Mobile{
    powerOff(){
        return `Mobile is shutting down....`
    }

    powerOn(){
        return `Mobile is getting on....`
    }

    playMusic(){
        return `Playing music....`
    }
    playVideo(){
        return `Playing video....`
    }

    call(){
        return `Calling someone....`
    }
    playGame(){
        return `Playing game....`
    }

    allFunctionalities(){
        let msg1 = this.call()
        let msg2 = this.playGame()
        let msg3 = this.playMusic()
        let msg4 = this.playVideo()
        let msg5 = this.powerOn()
        let msg6 = this.powerOff()

        return `${msg1} || ${msg2} || ${msg3} || ${msg4} || ${msg5} || ${msg6}`
    }
}

class Samsung extends Mobile{
    aboutPhone(){
        return `This is a Samsung phone. It is fantastic phone.`
    }
}

let phone = new Samsung()
console.log(phone.allFunctionalities());
console.log(phone.aboutPhone());