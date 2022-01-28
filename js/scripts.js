let textMoneyUser = document.querySelector(".user-money");
let gasOption = document.querySelectorAll(".gas-button");

let userMoney = 50;

textMoneyUser.innerHTML = userMoney + " BYN";

for (let i = 0; i < gasOption.length; i++){
    gasOption[i].onclick = function (){
        let amountBenzine = document.getElementById("field-liters-benzine").value;
        let priceBenzine = this.getAttribute("data");
        let calculation = amountBenzine * priceBenzine;
        if(amountBenzine == ""){
            alert("Вы не ввели количество бензина");
            return false;
        }
        let dialog = confirm("Стоимость бензина " + gasOption[i].value + " за " + amountBenzine + " литр(а/ов)" + " = " + calculation.toFixed(2) + " BYN");
        if(dialog){
            if(userMoney >= amountBenzine * priceBenzine){
                userMoney-=amountBenzine * priceBenzine;
                textMoneyUser.innerHTML = userMoney.toFixed(2) + " BYN";
                alert("Вы приобрели " + gasOption[i].value + " бензин. Литров: " + amountBenzine + ". Стоимость: " + calculation.toFixed(2) + " BYN");
                console.log("Осуществляется заправка " + gasOption[i].value + " бензина. Литров: " + amountBenzine + " за " + calculation.toFixed(2) + " BYN");
                document.getElementById("field-liters-benzine").value = "";
            }else{
                alert("У Вас не достаточно средств.");
                document.getElementById("field-liters-benzine").value = "";
            }
        }else{
            alert("Мы ждем Вас снова на заправке Беларуснефть!");
            document.getElementById("field-liters-benzine").value = "";
        }
    }
}

/*let nameDayWeek = prompt("Введите день недели: пн вт ср чт пт сб вс");

function getNumberWeek(nameDayWeek){
    let weekList = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

    for (let i = 0; i < weekList.length; i++) {
        if(weekList[i] == nameDayWeek){
            console.log(`${nameDayWeek} - ${i} день недели, начиная с нуля`);
        }
    }
}

getNumberWeek(nameDayWeek);*/
/*let arraySize = 0;
do{
    arraySize = prompt("Введите размер одномерного массива", "0");
}while (arraySize > 3);
arraySize = parseInt(arraySize);
let array = new Array(arraySize);
for (let i = 0; i < array.length; i++) {
    array[i] = prompt("Введите " + i + " элемент массива");
}

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    console.log(array.sort());
}*/

/*function onClickButtonSend(form) {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;

    if (name.length > 20 || name.length < 2 || name == "") {
        console.log("Некорректно введено имя");
        return false;
    } else if (surname.length > 20 || surname.length < 2 || surname == "") {
        console.log("Некорректно введена фамилия");
        return false;
    } else {
        alert("Вы успешно отправили свои данные.")
        return true;
    }
}*/

/*    let answer = confirm("Вы подтверждаете отправку своих данных?");
    if(answer){
        alert("Ваши данные успешно отправлены.");
    }
    alert("type variable = " + typeof answer + " value = " + answer);*/