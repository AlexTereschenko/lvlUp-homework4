/**
 * Double Cola
 *
 * Шелдон, Леонард, Пенни, Раджеш и Говард стоят в очереди к автомату по продаже баночек с напитком «Double Cola»,
 * других людей в очереди нет. Первый в очереди (Шелдон) покупает баночку, выпивает ее содержимое и раздваивается!
 * Получившиеся два Шелдона встают в конец очереди. Затем следующий в очереди (Леонард) покупает баночку,
 * выпивает и встает в конец очереди в двойном экземпляре, и так далее. Этот процесс продолжается до бесконечности.
 *
 * Например, третью баночку колы выпьет Пенни, и очередь будет выглядеть так:
 * Раджеш, Говард, Шелдон, Шелдон, Леонард, Леонард, Пенни, Пенни.
 *
 * Напишите программу, которая выведет имя человека, выпившего n-ую баночку.
 *
 * Обратите внимание, что в самом начале очередь выглядит так: Шелдон, Леонард, Пенни, Раджеш, Говард.
 * Первым человеком является Шелдон.
 *
 * Входные данные
 * Входные данные состоят из единственного целого числа n.
 *
 * Выходные данные
 * Выведите единственную строку — имя человека, который выпьет n-ую баночку колы. Баночки нумеруются от 1.
 * Обратите внимание, что следует выводить имена в следующем написании: "Sheldon", "Leonard", "Penny", "Rajesh", "Howard".
 * Именно в этом порядке друзья стоят в очереди изначально.
 */

// let queue = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];

//  var doubleColaTests = [
//     {
//         parameters: [1],
//         expectedResult: "Sheldon"
//     },
//     {
//         parameters: [6],
//         expectedResult: "Sheldon"
//     },
//     {
//         parameters: [1802],
//         expectedResult: "Penny"
//     }
// ];


// function doubleCola(n) {
//     for (let i=0; i<n-1; i++) {
//         queue.push(queue[0], queue[0]);
//         queue.shift();
//     }

//     return queue[0];
// }

// doubleColaTests.forEach(element => console.log(doubleCola(element.parameters[0])+' '+'expectedResult:'+element.expectedResult));


/**
 * Красивый год
 *
 * А знали ли Вы забавный факт о том, что 2013 год является первым годом после далекого 1987 года,
 * в котором все цифры различны?
 *
 * Теперь же Вам предлагается решить следующую задачу: задан номер года, найдите наименьший номер года,
 * который строго больше заданного и в котором все цифры различны.
 *
 * Входные данные
 * В единственной строке задано целое число y (1000 ≤ y ≤ 9000) — номер года.
 *
 * Выходные данные
 * Выведите единственное целое число — минимальный номер года, который строго больше y, в котором все цифры различны.
 * Гарантируется, что ответ существует.
 */

var prettyYearTests = [{
        parameters: ["1987"],
        expectedResult: 2013
    },
    {
        parameters: ["2013"],
        expectedResult: 2014
    },
    {
        parameters: ["8796"],
        expectedResult: 8901
    }
];


function prettyYear(y) {
    let nextYear = y+1;

    StringNewYear = String(nextYear);

        if (StringNewYear[0] !== StringNewYear[1] && StringNewYear[0] !== StringNewYear[2] && StringNewYear[0] !== StringNewYear[3] && StringNewYear[1] !== StringNewYear[2] && StringNewYear[1] !== StringNewYear[3] && StringNewYear[2] !== StringNewYear[3]) {
            return StringNewYear;
        } else {
            prettyYear(y+1);
        };

        return StringNewYear;
}

prettyYearTests.forEach(element => console.log(prettyYear(+element.parameters[0]) + ' ' + 'expectedResult:' + element.expectedResult));