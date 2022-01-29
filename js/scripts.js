let textMoneyUser = document.querySelector(".user-money");
let numberStation = document.querySelector(".number-station");
let gasOption = document.querySelectorAll(".gas-button");

let userMoney = 100;

textMoneyUser.innerHTML = "Ваш баланс: " + userMoney + " BYN";

for (let i = 0; i < gasOption.length; i++){
    gasOption[i].onclick = function (){
        let amountBenzine = document.querySelector(".field-liters-benzine").value;
        let priceBenzine = this.getAttribute("data");
        let calculation = amountBenzine * priceBenzine;
        if(amountBenzine == "" || numberStation.selectedIndex == 0){
            alert("Ошибка! Вы не выбрали номер колонки или не указали количество бензина.");
            return false;
        }
        let dialog = confirm("Вы выбрали колонку №" + numberStation.selectedIndex + ". " + "Стоимость бензина " + gasOption[i].value + " за " + amountBenzine + " литр(а/ов)" + " = " + calculation.toFixed(2) + " BYN");
        if(dialog){
            if(userMoney >= calculation){
                userMoney-=calculation;
                textMoneyUser.innerHTML = "Ваш баланс: " + userMoney.toFixed(2) + " BYN";
                alert("Вы приобрели " + gasOption[i].value + " бензин. Литров: " + amountBenzine + ". Стоимость: " + calculation.toFixed(2) + " BYN");
                console.log("Осуществляется заправка " + gasOption[i].value + " бензина. Литров: " + amountBenzine + " за " + calculation.toFixed(2) + " BYN");
                document.querySelector(".field-liters-benzine").value = "";
                let date = new Date();
                let windowTransaction = document.querySelector(".window-transaction").value = "============КАССОВЫЙ ЧЕК============" + "\n\n" + "Колонка №" + numberStation.selectedIndex + "\n" + "Дата и время: " + date.getDate() + "." + date.getMonth()+1 + "." + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + "\n" + "Тип бензина: " + gasOption[i].value + "\n" + "Цена: " + calculation.toFixed(2) + " BYN" + "\n\n" + "====Счастливого пути! Ждем Вас снова!====";
                document.querySelector(".number-station").value = numberStation.options[0].value;
            }else{
                alert("У Вас не достаточно средств.");
                document.querySelector(".field-liters-benzine").value = "";
                document.querySelector(".number-station").value = numberStation.options[0].value;
            }
        }else{
            alert("Мы будем снова рады видеть Вас на АЗС Беларуснефть!");
            document.querySelector(".field-liters-benzine").value = "";
            document.querySelector(".number-station").value = numberStation.options[0].value;
        }
    }
}

function addMoney(amountMoney){
    userMoney+=parseInt(amountMoney);

    return textMoneyUser.innerHTML = "Ваш баланс: " + userMoney + " BYN";
}