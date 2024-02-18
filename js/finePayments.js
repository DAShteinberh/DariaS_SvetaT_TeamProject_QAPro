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

function finePayments() {
    let fineNumberValue = fineNumber.value;
    let passportValue = passport.value;
    let creditCardNumberValue = creditCardNumber.value;
    let cvvValue = cvv.value;
    let amountValue = amount.value;

    if (fineNumberValue !== DB.fineNumber || amountValue !== DB.amount) {
        alert("Номер або Сума не співпадає");
    } else if (!/^[А-ЩЬЮЯҐЄІЇ]{2}\d{6}$|^\d{9}$/g.test(passportValue)) {
        alert("Не вірний паспортний номер");
    } else if (!/^[4-6]+\d{15}$/g.test(creditCardNumberValue)) {
        alert("IНе вірна кредитна картка");
    } else if (!/^\d{3}$/g.test(cvvValue)) {
        alert("Не вірний cvv");
    } else {
        buttonSubmit.addEventListener('click',payFine);
        function payFine(){
        alert("Штраф сплачено");
        }
        delete DB.finesData;
    }
}

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