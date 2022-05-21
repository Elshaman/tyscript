"use strict";
//definicion postfija en typescript
//number
let phone;
//phone='caena' // error
let ispr;
ispr = true;
//inferida
let phonenumber = 32134;
//tipo any permite cualquier tipo de dato
function showInfo(user) {
    console.log("user info", user.id, user.username);
}
showInfo({ id: 1, username: "shaman" });
function showFormattedInfo(user) {
    console.log("user info", `
            id: ${user.id}
            username: ${user.username}
    `);
}
showFormattedInfo({ id: 1, username: "lucero" });
