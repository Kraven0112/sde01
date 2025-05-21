// playing with the existed file


const fs = require('fs')
const filePath = "./groot.txt"

// adding data in a file synchronously
const addData = (data) => {
    try {
        fs.writeFileSync(filePath, data)
        console.log("Write successfully in file.")
    } catch (error) {
        console.log(error)
    }
}

// appending data in file synchronously
const appendData = (data) => {
    try {
        fs.appendFileSync(filePath, data)
        console.log("append data successfully.")
    } catch (error) {
        console.log(error)
    }
}

// reading file asynchronously
const readData = () => {
    fs.readFile(filePath, 'utf-8', function (error, data) {
        if (error) {
            console.log("error : ", error)
            return;
        }
        console.log("Actual data : ", data)
    })
}

// process.argv is a property returns array containing command line arguments passed when the Node.js process was launched.

const command = process.argv[2]
const argument = process.argv[3]

if (command === "add") {
    addData(argument)
} else if (command === "append") {
    appendData(argument)
} else if (command === "read") {
    readData()
} else {
    console.log("File is not existed !")
}