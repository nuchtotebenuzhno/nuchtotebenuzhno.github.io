//////////////////////////////////////////
// В данном скрипте изменяются только   //
// значения кол-ва изображени, массива  //
// со списком изображений и время       //
// вопроизведения                       //
/////////////////////////////////////////

var maximages = 9; // кол-во используемых изображений
var fadespeed = 60; // промежуток времени между показами слайдов 85 = 85 милисекунд

var fadeintimer;  //переменная при наведении мыши на объект
var fadeouttimer; //переменная при убирании мыши с объекта
var fadeincount = 0; //стартовая переменная
var fadeoutcount = maximages-1; //конечная переменная
var fadearray = new Array(maximages); // массив слайдов

//кол-во изображений может быть любое, самое главное чтобы переменная maximages была равна этому числу, в данном случае 6
//изображения выставляются в порядке их воспроизведения
fadearray[0] = "bronze_coin_hov1.png";
fadearray[1] = "bronze_coin_hov2.png";
fadearray[2] = "bronze_coin_hov3.png";
fadearray[3] = "bronze_coin_hov4.png";
fadearray[4] = "bronze_coin_hov5.png";
fadearray[5] = "bronze_coin_hov6.png";
fadearray[6] = "bronze_coin_hov7.png";
fadearray[7] = "bronze_coin_hov8.png";
fadearray[8] = "bronze_coin_hov0.png";

for (var i = 0; i < maximages; i++) {
eval('pic' + i + ' = new Image();');
eval('pic' + i + '.src = fadearray[i];'); // предварительная подгрузка изображений
}
function fade_in() {
clearTimeout(fadeouttimer);
document.images['fade-pic'].src = fadearray[fadeincount];
if (fadeincount != maximages-1) {
fadeincount++;
fadeintimer = setTimeout('fade_in()', fadespeed);
}
else {
clearTimeout(fadeintimer);
fadeincount = 0;
}
}

//////////////////////////////////////////
// В данном скрипте изменяются только   //
// значения кол-ва изображени, массива  //
// со списком изображений и время       //
// вопроизведения                       //
/////////////////////////////////////////

var maximagess = 9; // кол-во используемых изображений
var fadespeeds = 60; // промежуток времени между показами слайдов 85 = 85 милисекунд

var fadeintimers;  //переменная при наведении мыши на объект
var fadeouttimers; //переменная при убирании мыши с объекта
var fadeincounts = 0; //стартовая переменная
var fadeoutcounts = maximagess-1; //конечная переменная
var fadearrays = new Array(maximagess); // массив слайдов

//кол-во изображений может быть любое, самое главное чтобы переменная maximages была равна этому числу, в данном случае 6
//изображения выставляются в порядке их воспроизведения
fadearrays[0] = "silver_coin_hov1.png";
fadearrays[1] = "silver_coin_hov2.png";
fadearrays[2] = "silver_coin_hov3.png";
fadearrays[3] = "silver_coin_hov4.png";
fadearrays[4] = "silver_coin_hov5.png";
fadearrays[5] = "silver_coin_hov6.png";
fadearrays[6] = "silver_coin_hov7.png";
fadearrays[7] = "silver_coin_hov8.png";
fadearrays[8] = "silver_coin_hov0.png";

for (var i = 0; i < maximagess; i++) {
eval('pic' + i + ' = new Image();');
eval('pic' + i + '.src = fadearrays[i];'); // предварительная подгрузка изображений
}
function fade_ins() {
clearTimeout(fadeouttimers);
document.images['fade-pics'].src = fadearrays[fadeincounts];
if (fadeincounts != maximagess-1) {
fadeincounts++;
fadeintimers = setTimeout('fade_ins()', fadespeeds);
}
else {
clearTimeout(fadeintimers);
fadeincounts = 0;
}
}

//////////////////////////////////////////
// В данном скрипте изменяются только   //
// значения кол-ва изображени, массива  //
// со списком изображений и время       //
// вопроизведения                       //
/////////////////////////////////////////

var maximagesg = 9; // кол-во используемых изображений
var fadespeedg = 60; // промежуток времени между показами слайдов 85 = 85 милисекунд

var fadeintimerg;  //переменная при наведении мыши на объект
var fadeouttimerg; //переменная при убирании мыши с объекта
var fadeincountg = 0; //стартовая переменная
var fadeoutcountg = maximagesg-1; //конечная переменная
var fadearrayg = new Array(maximagesg); // массив слайдов

//кол-во изображений может быть любое, самое главное чтобы переменная maximages была равна этому числу, в данном случае 6
//изображения выставляются в порядке их воспроизведения
fadearrayg[0] = "gold_coin_hov1.png";
fadearrayg[1] = "gold_coin_hov2.png";
fadearrayg[2] = "gold_coin_hov3.png";
fadearrayg[3] = "gold_coin_hov4.png";
fadearrayg[4] = "gold_coin_hov5.png";
fadearrayg[5] = "gold_coin_hov6.png";
fadearrayg[6] = "gold_coin_hov7.png";
fadearrayg[7] = "gold_coin_hov8.png";
fadearrayg[8] = "gold_coin_hov0.png";

for (var i = 0; i < maximagesg; i++) {
eval('pic' + i + ' = new Image();');
eval('pic' + i + '.src = fadearrayg[i];'); // предварительная подгрузка изображений
}
function fade_ing() {
clearTimeout(fadeouttimerg);
document.images['fade-picg'].src = fadearrayg[fadeincountg];
if (fadeincountg != maximagesg-1) {
fadeincountg++;
fadeintimerg = setTimeout('fade_ing()', fadespeedg);
}
else {
clearTimeout(fadeintimerg);
fadeincountg = 0;
}
}
