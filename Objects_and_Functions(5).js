// В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)

let terminal = {
    saved_name : 'kelt',
    detect(enteredName){
        if(enteredName === terminal.saved_name){
            return 'hello ' + enteredName
        }
        else{
            return 'not a valid name'
        }
    }
}

console.log(terminal.detect('kelt'));
console.log(terminal.detect('asumarin'));