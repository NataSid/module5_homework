//const arr = [1, 5, 7, 6, 4, null, 0, 'str'];
const arr = [1, 1,1,1,1];

function arrTwin (item, index, arr) {
    if (index === 0 ) return true; // если индекс = 0, то первый элемент всегда true
    if (arr[index - 1] === item) return true; // если текущий проверяемый элемент равен предыдущему элементу, то возвращаем true
    else
    return false; // во всех остальных случаях возвращаем false
}

console.log(arr.every(arrTwin))