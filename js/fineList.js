"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey){
    var filterDB;
     if (searchKey === document.getElementById("searchInput2").value){
        filterDB = DB.filter ((item) => {
            return item.номер == searchKey;
        });
     } else if ((searchKey === document.getElementById("searchInput").value) && ((searchKey =='Перевищення швидкості') || (searchKey =='Невірне паркування') || (searchKey =='Їзда у не тверезому стані'))){
            filterDB = DB.filter ((item) => {
                return item.тип == searchKey;
            });
        } else alert('Невірний тип чи номер штрафу');
    
    return filterDB;
}


    /*
     Напишіть свій код тут!
     Як ви бачите функція повертає статичні дані.
     Замість масиву який прописаний хардкодом, вам необхідно реалізувати цю функцію
     так, щоб вона повертала масив відповідно переданому значенню в функцію.
     Саме значення - це "Пошук за номером" або "Пошук за типом штрафу"
     Тип штрафу може бути тільки
     - Перевищення швидкості
     - Невірне паркування
     - Їзда у не тверезому стані
     */
