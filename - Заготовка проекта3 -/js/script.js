"use strict"
/*
let first_let;//создаём первую переменную
const second_let = "second";//создаём вторую переменную и присваиваем значчение ей
first_let = "first"; //присваиваем значчение first_let
console.warn(first_let,second_let);//выводим две перемеенные
first_let = "not_first";//переприсваиваем first_let
console.log(first_let);//выводим
console.log(second_let)//выводим
console.warn(first_let,second_let);//выводим
console.log("NaN");

// 1
const ten_nuley = 1e10;
console.log(`1) 10 nuley ${ten_nuley}`);

// 2
const sec_number = 1e-6;
console.log(`2) 5 nuley posle , ${sec_number}`);

// 3
const number_three = parseInt("10 naprimer 10");
console.warn(`3) preobrazovanie ${number_three}`);

// 4
const num_f = 0.3, num_ff = 0.6;
console.error('4) okryglenie ',Math.floor(num_f),Math.floor(num_ff),Math.ceil(num_f),Math.ceil(num_ff), Math.round(num_f), Math.round(num_ff));

//5
const f_nerav = 10/"dadagg", s_nerav = 88*"asd";
console.warn(`5) sravnenie ${f_nerav === s_nerav}`);
*/

let stroka = 'JAVASCRIPT'.toLowerCase();
console.log(stroka);
let stroka_sec = 'dsahhr dhdrgrfs efes';
console.log(stroka_sec);

console.log(stroka_sec.charAt(0).toUpperCase()+stroka_sec.substring(1 [-1]));

function truncate(str, maxlength)
{
  if(str.length> maxlength)
  {
    console.log(str.substring(0,maxlength) + `...`);
  }
  else
  {
    console.log(str)
  }
}
truncate("abcdef",3)