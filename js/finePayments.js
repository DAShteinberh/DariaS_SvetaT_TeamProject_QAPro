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

buttonSubmit.addEventListener('click',payFine);
function payFine() {

    var regPassport = /^[А-ЩЬЮЯҐЄІЇ]{2}\d{6}$|^\d{9}$/g;
    var regCard = /^[4-6]+\d{15}$/g;
    var regCVV = /^\d{3}$/g;

    if (DB.find((v)=>{return (v.номер === fineNumber.value) && (v.сума === +amount.value)}) === undefined) {
         alert("Номер штрафу або Сума не співпадає");
    } else if (!regPassport.test(passport.value)) {
        alert ("Не вірні паспортні дані");
    } else if (!regCard.test(creditCardNumber.value)) {
         alert ("Не вірний номер кредитної картки");
    } else if (!regCVV.test(cvv.value)) {
         alert ("Не вірний cvv");
    } else {
        alert ("Штраф сплачено");
        
        for (let i = DB.length; i--; ) {
            if (DB[i].номер === fineNumber.value && DB[i].сума === +amount.value) {
              DB.splice(i, 1);
        }
      } 
        fineNumber.value = '';
        passport.value = '';
        creditCardNumber.value = '';
        cvv.value = '';
        amount.value = '';
    };
};
