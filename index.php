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
<div class="header">
    <div class="logo">
        <img id="img-logo" src="https://www.belarusinfo.by/ru/images/stories/logo/86262.gif">
    </div>
    <div class="money">
        <h1 class="user-money">0<span> BYN</span></h1>
    </div>
</div>
<div class="menu">
    <div class="field-benzine">
        <input id="field-liters-benzine" type="number" min="1" max="100" placeholder="Введите количество литров бензина">
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
                <th>График изменения цен</th>
                <th>АИ-92</th>
                <th>АИ-95</th>
                <th>АИ-98</th>
                <th>ДТ</th>
            </tr>
            <tr>
                <td>28.01.2022</td>
                <td>2.00 BYN</td>
                <td>2.10 BYN</td>
                <td>2.24 BYN</td>
                <td>2.10 BYN</td>
            </tr>
        </table>
    </div>
</div>
<script src="js/scripts.js"></script>
</body>
</html>