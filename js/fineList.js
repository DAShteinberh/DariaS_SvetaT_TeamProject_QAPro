"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey){
    
    document.getElementById("searchInput2").value = '';
    document.getElementById("searchInput").value = '';

    return DB.filter ((item) => {
        return item.тип === searchKey || item.номер === searchKey;
        });
}
