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

let queue = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];

var doubleColaTests = [
    {
        parameters: [1],
        expectedResult: "Sheldon"
    },
    {
        parameters: [6],
        expectedResult: "Sheldon"
    },
    {
        parameters: [1802],
        expectedResult: "Penny"
    }
];


function doubleCola(n) {
    for (let i=0; i<n-1; i++) {
        queue.push(queue[0], queue[0]);
        queue.shift();
    }

    return queue[0];
}

console.log('"Double Cola"');
doubleColaTests.forEach(element => console.log(doubleCola(element.parameters[0])+' '+'expectedResult:'+element.expectedResult));
console.log('');



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

console.log('"Pretty year"');
prettyYearTests.forEach(element => console.log(prettyYear(+element.parameters[0]) + ' ' + 'expectedResult:' + element.expectedResult));
console.log('');



/**
 * Слишком длинные слова
 *
 * Иногда некоторые слова вроде «localization» или «internationalization» настолько длинны,
 * что их весьма утомительно писать много раз в каком либо тексте.
 *
 * Будем считать слово слишком длинным, если его длина строго больше 10 символов.
 * Все слишком длинные слова можно заменить специальной аббревиатурой.
 *
 * Эта аббревиатура строится следующим образом: записывается первая и последняя буква слова,
 * а между ними — количество букв между первой и последней буквой (в десятичной системе счисления и без ведущих нулей).
 *
 * Таком образом, «localization» запишется как «l10n», а «internationalization» как «i18n».
 *
 * Вам предлагается автоматизировать процесс замены слов на аббревиатуры.
 * При этом все слишком длинные слова должны быть заменены аббревиатурой, а слова, не являющиеся слишком длинными,
 * должны остаться без изменений.
 */

var longWordTests = [
    {
        parameters: ["localization"],
        expectedResult: "l10n"
    },
    {
        parameters: ["internationalization"],
        expectedResult: "i18n"
    },
    {
        parameters: ["word"],
        expectedResult: "word"
    },
    {
        parameters: [""],
        expectedResult: ""
    },
    {
        parameters: ["1"],
        expectedResult: "1"
    }
];


function longWord(word) {
    let abbr;
    if (word.length<10) {
        return word
    } else {
        abbr = word[0] + (word.length-2) + word[word.length-1];
        return abbr;
    }
}

console.log('"Long words"');
longWordTests.forEach(element => console.log(longWord(element.parameters[0]) + ' ' + 'expectedResult:' + element.expectedResult));
console.log('');



/**
 * Выборы
 *
 * В стране Бялечинск начались выборы президента, в которых участвуют n кандидатов.
 * Страна состоит из m городов. Известно, сколько человек в каждом городе проголосовало за каждого кандидата.
 *
 * Система выборов в стране имеет необычный вид. На первом этапе выборов подводятся итоги голосованя по городам:
 * считается, что в городе победил тот кандидат, за которого было отдано наибольшее количество голосов в этом городе,
 * а в случае, если несколько кандидатов набрали максимальное количество голосов — кандидат с наименьшим номером из них.
 *
 * На втором этапе выборов по тому же принципу определяется победитель: победителем выборов считается кандидат,
 * за которого проголосовало максимальное количество городов, а среди набравших максимальное количество
 * голосов — кандидат с наименьшим номером.
 *
 * Определите, кто победит на выборах?
 *
 * Входные данные
 * В функцию передаеться m параметров(строк), n, m(1 ≤ n, m ≤ 100) — количество кандидатов и городов
 * в строках записано по n целых неотрицательных чисел, j-е число в i-й строке aij (1 ≤ j ≤ n, 1 ≤ i ≤ m, 0 ≤ aij ≤ 109)
 * обозначает количество голосов за кандидата номер j в городе номер i.
 * Гарантируется что суммарное количество жителей во всех городах не превосходит 109.
 *
 * Выходные данные
 * Выведите единственное число — номер кандидата, победившего в выборах. Кандидаты нумеруются с единицы.
 */

var electionsTest = [
    {
        parameters: ["1 2 3", "2 3 1", "1 2 1"],
        expectedResult: 2
    },
    {
        parameters: ["10 10 3", "5 1 6", "2 2 2", "1 5 7"],
        expectedResult: 1
    }
];


function elections(m, n) {
    let townFirstTurnVictorsIndex=[];

    for (let i=0; i<n; i++) {
        let townVotes = m[i].split(' ');

        for(let j=0; j<townVotes.length;j++) {
            townVotes[j] = Number(townVotes[j]);
        }

        townFirstTurnVictorsIndex.push(townVotes.indexOf(Math.max(...townVotes))+1);
    }

    let result = townFirstTurnVictorsIndex.reduce(function(acc, el) {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});

    let votesForCandidats = Object.values(result);
    let numberOfVotesForVictor = Math.max(...votesForCandidats);
    let IndexOfVictor = votesForCandidats.indexOf(numberOfVotesForVictor);
    let candidatNumbers = Object.keys(result);
    let victorNumber = candidatNumbers[IndexOfVictor];
    
    return victorNumber;
}

console.log('"Election"');
electionsTest.forEach(element => console.log(elections(element.parameters, element.parameters.length) + ' ' + 'expectedResult:' + element.expectedResult));
console.log('');



/**
 * cAPS lOCK
 *
 * зАЧЕМ НУЖНА КЛАВИША cAPS lOCK?
 * Caps Lock — клавиша компьютерной клавиатуры, предназначенная для автоматической (постоянной) смены регистра
 * букв со строчных на прописные. Будучи случайно нажатой, она приводит к последствиям вроде первого абзаца в
 * условии этой задачи.
 *
 * Будем считать, что слово набрано с ошибочно нажатой клавишей Caps Lock, если:
 * - либо оно полностью состоит из прописных букв;
 * - либо прописными являются все его буквы, кроме первой.
 *
 * В таком случае, нужно автоматически поменять регистр всех букв на противоположный. Например,
 * регистр букв слов «hELLO», «HTTP», «z» должен быть изменен.
 * Напишите программу, которая применяет описанное выше правило или оставляет слово без изменения, если оно не применимо.
 *
 * Входные данные
 * записано слово, состоящее из прописных или строчных букв латинского алфавита. Длина слова — от 1 до 100 символов включительно.
 *
 * Выходные данные
 * Выведите результат обработки данного слова.
 */

var capsLockTests = [
    {
        parameters: ["cAPS"],
        expectedResult: "Caps"
    },
    {
        parameters: ["Lock"],
        expectedResult: "Lock"
    },
    {
        parameters: ["wHY DO wE NEED cAPS lOCK?"],
        expectedResult: "Why do We need Caps Lock?"
    },
    {
        parameters: ["FuNkY iS nOt CaPs!"],
        expectedResult: "FuNkY Is nOt CaPs!"
    }
];


function capsLock(str) {
    const words = str.split(' ');
    
    for (let i=0; i<words.length; i++) {
        const letters = words[i].split('');

        if(letters.every(elem => elem === elem.toUpperCase()) || letters.slice(1).every(elem => elem === elem.toUpperCase())) {

            for(let j=0; j<letters.length; j++) {
                if (letters[j] === letters[j].toUpperCase()) {
                    letters[j] = letters[j].toLowerCase();
                } else {
                    letters[j] = letters[j].toUpperCase();
                }
            }
        }; 
        words[i] = letters.join("");
    }

    str = words.join(" ");

    return str;
}

console.log('"Capslock"');
capsLockTests.forEach(element => console.log(capsLock(element.parameters[0]) + ' ' + 'expectedResult:' + element.expectedResult));
console.log('');