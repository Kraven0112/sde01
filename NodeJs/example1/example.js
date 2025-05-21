/*
This is process of manipulating the file in javascript using node js 

File Syste is module in node js whihc provides API to interact with files and directories in any operating system.

fs.writeFile(filePath, data)
- It is used to write data in a file
- It is used to replace file if it exist
= It is used to create if it is not exist

fs.readFile(filePath)
- It is used to read a file if the file is existed.

fs.appendFile(filePath, data)
- It is used to create file if it is not exist
- It is used to add data in file

fs.open(filePath, mode)
- It is used to open the description of file for reading or writing the file

Modes in file system :
r - It is used for read only file. Throws error if file does not exist
r+ = It is usd for reading and writing file. Throws error if file does not exist
w - It is used for write only file. create file if it is not exist
w+ = It is used for reading and writing file. create file if it is not existed
a - It is used for appending data (write at the end). create file if it is not existed
a+ - It is usd for reading and appending. Create file if it is not existed 
*/


// 
const fs = require('fs')
const filePath = 'example.json'

const loadTask = () => {
    try {
        const bufferData = fs.readFileSync(filePath)
        const dataJSON = bufferData.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const saveTask = (tasks) => {
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync(filePath, dataJSON)
}

const addTask = (task) => {
    const tasks = loadTask()
    tasks.push({task})
    saveTask(tasks)

    console.log("Task added - ", task);
}

const listTask = () => {
    const tasks  = loadTask()
    console.log(tasks)
}

const command = process.argv
const argument = process.argv[3]

if (command[2] === 'add') {
    addTask(argument)
}else if(command[2] === 'list'){
    listTask()
} else {
    console.log("Command not found !");
}