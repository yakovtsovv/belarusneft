let textMoneyUser = document.querySelector(".user-money");
let numberStation = document.querySelector(".number-station");
let gasOption = document.querySelectorAll(".gas-button");

let userMoney = 50;

textMoneyUser.innerHTML = userMoney + " BYN";

for (let i = 0; i < gasOption.length; i++){
    gasOption[i].onclick = function (){
        let amountBenzine = document.getElementById("field-liters-benzine").value;
        let priceBenzine = this.getAttribute("data");
        let calculation = amountBenzine * priceBenzine;
        if(amountBenzine == "" || numberStation.selectedIndex == 0){
            alert("Ошибка! Вы не выбрали номер колонки или не указали кол-во бензина.");
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