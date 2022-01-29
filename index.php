<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Тестовая страница</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="profile-user">
    <div class="window-information">
        <div class="info">
            <h3 class="information-title">Общая информация</h3>
            <div class="info-block">
                <div class="statistics-user">
                    <span class="text-label">Имя:</span>
                </div>
                <div class="statistics-user">
                    <span class="text-label">Фамилия:</span>
                </div>
                <div class="statistics-user">
                    <span class="user-money">Баланс: 0 BYN</span>
                </div>
            </div>
            <div class="photo-user"></div>
        </div>
        <h3 class="information-title">Последний чек</h3>
        <div class="info-transaction">
            <textarea disabled class="window-transaction"></textarea>
        </div>
    </div>
</div>
<div class="header">
    <div class="logo">
        <img id="img-logo" src="https://www.belorusneft.by/sitebeloil/system/modules/by.iba.beloil.templates/resources/i/b-logo.png">
    </div>
    <div class="navigation">
        <select class="list-station">
            <option hidden disabled selected>Выберите заправку</option>
            <option>ул. Богдана Хмельницкого 101, Гомель</option>
            <option>ул. Докутович 57А, Гомель</option>
            <option>улица Украинская, Гомель</option>
            <option>ул. Косарева, Гомель</option>
            <option>Луговая ул. 2д, Гомель</option>
        </select>
    </div>
</div>
<div class="menu">
    <div class="field-benzine">
        <select class="number-station">
            <option hidden disabled selected value="select-number-station">Выберите номер колонки</option>
            <option value="station-one">Колонка №1</option>
            <option value="station-two">Колонка №2</option>
            <option value="station-three">Колонка №3</option>
            <option value="station-four">Колонка №4</option>
        </select>
        <input class="field-liters-benzine" type="number" min="1" max="100" placeholder="Введите количество литров бензина">
        <br>
        <div class="option">
            <input class="gas-button" data="2.00" type="button" value="AИ-92">
            <input class="gas-button" data="2.10" type="button" value="AИ-95">
            <input class="gas-button" data="2.24" type="button" value="AИ-98">
            <input class="gas-button" data="2.10" type="button" value="ДТ">
        </div>
    </div>
</div>
<div class="window-price">
    <div class="table-price">
        <table>
            <tr>
                <th>Лист изменения цен</th>
                <th>АИ-92</th>
                <th>АИ-95</th>
                <th>АИ-98</th>
                <th>ДТ</th>
            </tr>
            <tr>
                <td>16.11.2021</td>
                <td>2.00 BYN</td>
                <td>2.10 BYN</td>
                <td>2.24 BYN</td>
                <td>2.10 BYN</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </div>
</div>
<script src="js/scripts.js"></script>
</body>
</html>