'use strict';
    
/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof(a) != 'number' || typeof(b) != 'number') {
        throw new TypeError('В аргумент переданы не числа');
    } 
    return Number(a) + Number(b);
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (typeof(year) != 'number') {
        throw new TypeError('в качестве года передано не число');
    } 
    if(year < 0) {
        throw RangeError('год не может быть отрицательным');
    }
    return Math.ceil(year/100);
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (typeof(hexColor) != 'string') {
        throw new TypeError('цвет передан не строкой');
    } 
    if (!(/#[\d[A-F]{6}$/.test(hexColor.toUpperCase()) )) {
        throw RangeError('значения цвета выходят за пределы допустимых');
    }
let r = hexColor[1] + hexColor[2];
let g = hexColor[3] + hexColor[4];
let b = hexColor[5] + hexColor[6];
return `(${parseInt(r,16)}, ${parseInt(g,16)}, ${parseInt(b,16)})`;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (typeof(n) != 'number') {
        throw new TypeError('в качестве положения в ряде передано не число');
    } 
    if (n <= 0 || !Number.isInteger(n)) {
        throw new RangeError('положение в ряде не является целым положительным числом');
    } 
   
    // Ваше решение
    if (n == 1 || n == 2) return 1;
    let a = 1;
    let b = 1;
    let c = a + b;
    for (let i = 3; i < n; i++) {
    a=b;
    b=c;
    c = a + b;
    }
    return c;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {

    function isMatrix(arr) {
        if (!Array.isArray(arr)) return false;
         return arr.every(v => Array.isArray(v));
        }
    if (!isMatrix(matrix)) {
        throw new TypeError('в функцию передаётся не двумерный массив');
    }
    let matrixT = [];
    for (let i = 0; i < matrix[0].length; i++) {
    matrixT[i] = []; 
    for (let j = 0; j < matrix.length; j++) {
        matrixT[i][j] = matrix[j][i];
    }
    
    }
    return matrixT;
}

/**
 * Переводит число в другую систему счисления
 * @param {Number} n Число для перевода в другую систему счисления
 * @param {Number} targetNs Система счисления, в которую нужно перевести (Число от 2 до 36)
 * @throws {TypeError} Когда переданы аргументы некорректного типа
 * @throws {RangeError} Когда система счисления выходит за пределы значений [2, 36]
 * @returns {String} Число n в системе счисления targetNs
 */
function numberSystemProblem(n, targetNs) {
    if (typeof(targetNs) !== 'number' || typeof(n) !== 'number') {
        throw new TypeError('переданы аргументы некорректного типа');
    } 
    if (targetNs < 2 || targetNs > 36 ) {
        throw new RangeError('система счисления выходит за пределы значений [2, 36]');
    }
    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (typeof(phoneNumber) !== 'string') {
        throw new TypeError('в качестве аргумента передается не строка');
    } 
    return /8-800-\d\d\d-\d\d-\d\d$/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof(text) !== 'string') {
        throw new TypeError('в качестве аргумента передается не строка');
    } 
    return (text.split(':-)').length - 1) + (text.split('(-:').length - 1)

}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    // |01 02 03|
    // |04 05 06|
    // |07 08 09|
    //

    let [[first, second, third],[fourh,fifth,sixth],[seventh,eigth, nineth]]= field;
    // все горизонтальные
    if (first == second && second== third) {
        return first;
    }
    if (fourh == fifth && fifth == sixth) {
        return fourh;
    }
    if (seventh == eigth && eigth == nineth) {
        return seventh;
    }

    // все вертикальные
    if (first == fourh && fourh == seventh) {
        return first;
    }
    if (second == fifth && fifth == eigth) {
        return second;
    }
    if (third == sixth && sixth == nineth ) {
        return third;
    }

    // диагонали
    if (first == fifth && fifth == nineth) {
        return first;
    }
    if (third == fifth && fifth == seventh) {
        return third;
    } 
    
    return 'draw';

}

// module.exports = {
//     abProblem,
//     centuryByYearProblem,
//     colorsProblem,
//     fibonacciProblem,
//     matrixProblem,
//     numberSystemProblem,
//     phoneProblem,
//     smilesProblem,
//     ticTacToeProblem
// };