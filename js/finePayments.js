"use strict";
/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;
var searchFineNumber =  DB.find(item => item.номер == fineNumber.value);
var searchAmount =  DB.find(item => item.сума == amount.value);

buttonSubmit.addEventListener('click',payFine);

function payFine() {

    var regPassport = /^[А-ЩЬЮЯҐЄІЇ]{2}\d{6}$|^\d{9}$/g;
    var regCard = /^[4-6]+\d{15}$/g;
    var regCVV = /^\d{3}$/g;


    if (fineNumber.value !== searchFineNumber.номер) {
         alert("Номер штрафу не співпадає");
        // console.log(searchFineNumber)
    } else if (!regPassport.test(passport.value)) {
        alert ("Не вірні паспортні дані");
    } else if (!regCard.test(creditCardNumber.value)) {
         alert ("Не вірний номер кредитної картки");
    } else if (!regCVV.test(cvv.value)) {
         alert ("Не вірний cvv");
    } else if (amount.value !== searchAmount.сума) {
            alert("Сума штрафу не співпадає");
                console.log(searchAmount)
    } else {
        for (let i = DB.length; i--; ) {
            if (DB[i].номер === fineNumber & DB[i].amount === amount) {
              DB.splice(i, 1);
        }
      } 
    };
};



/**
Вам необхідно реалізувати наступний функціонал.
Зробити валідацію до всіх полів
1. Номер та сума повинні бути однакові як в існуючого штрафу - якщо ні видавати
alert "Номер не співпадає" або "Сума не співпадає"

2. Паспортні дані у форматі - перші дві літери укр алфавіту, та 6 цифр.
Якщо не співпадає то видавати alert "Не вірний паспортний номер"

3. Номер кредитної карки 16 цифр -
якщо не співпадає то видавати alert "Не вірна кредитна картка"

4. cvv 3 цифри - якщо не співпадає то видавати alert "Не вірний cvv".

Якщо валідація проходить успішно, то виконати оплату,
 тобто вам потрібно видалити обєкт з DB
 */