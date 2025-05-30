const fs = require('fs')
const filePath = './aboutMe.txt'


// reading file aynchronously if it is existed or not
// We use two types of encoding while reading the file data like utf-8(official and standard) and utf8(informal and shorthand)
const readFile = () => {
    fs.readFile(filePath, 'utf-8', (error,data)=>{
        if(error){
            console.log(error)
            return;
        }
        console.log(data)
    })
}

// write file synchronously if is existed or else create file
const writeFile = (myargument) => {
    fs.writeFileSync(filePath,myargument)
}

// delete file from directory
const deleteFile = () => {
    fs.unlinkSync(filePath)
}

// rename the existed file
const renameFile = () => {
    fs.renameSync(filePath,"./aboutYou.txt", function (error){
        if(error){
            console.log(error)
            return;
        }

        console.log("File renamed successfully !!")
    })
}


const appendFile = (text) => {
    fs.appendFileSync(filePath,text)
}


const command = process.argv[2]
const argument = process.argv[3]

if(command === "read"){
    readFile()
}else if(command === "write"){
    writeFile(argument)
}else if(command === "delete"){
    deleteFile()
}else if(command === "rename"){
    renameFile()
}else if(command === "append"){
    appendFile(argument)
} else{
    console.log("Command is not Found !")
}