import * as fs from 'fs'
import * as readline from 'readline'
import {join} from 'path'

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'ENTER THE PASS:'
})
console.log('Example: D:\\Users\\Brazzers\\Downloads\\COURSES')
r.prompt()
r.on('line', (dirInput) => {
    dirInput = dirInput.replace(/\\/g, '/')
    console.log(dirInput);
    r.close()

    const renaming = () => {
        fs.readdir(dirInput, (err, files) =>{
            files.forEach((fileName, index) => fs.rename(join(dirInput,fileName), join(dirInput, fileName.replace(/\[.*?]/g, '')), (err) => {
                if (err) console.log('Ошибка в пути', index, fileName) // не удалось переименовать файл
            }))
          })

        }
        renaming()
})
