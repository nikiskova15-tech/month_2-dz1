
const firstSelebritySkater = "Tony Hawk"; //выполнил самый сложный трюк
const firstCreator = "Rodney Mullen"; //создатель первых полноценных скейтов
const skateCreator = "California"; //страна в которой был создан скейтбординг
const countryOlympicChampion = "Japan"; //страна победитель в олимп играх по скейтбордингу

const creationYear = 1950; //год создания
const countriesParticipated = 23; //колво стран участниц в олимп играх по скейтбордингу
const olympicYear = 2023; //год в котором проходили олимп игры по скейтбордингу


console.log("Создание скайтбординга:" + " " + skateCreator + " " + creationYear);
console.log("Olympic champion:" + " " + countryOlympicChampion + " " + olympicYear);


//boolean > 1. and($$)
//          2. or(||)
//          3. not(!)


//мама: -сынок купи хлеб и молоко

const isBoughtMilk = true;
const isBoughtBread = true;
const isBoughtMilkAndBread = isBoughtBread && isBoughtMilk;

if (isBoughtMilkAndBread) {
    console.log("Молодец сынок, что купил хлеб и молоко");

} else if (isBoughtBread) {
    console.log("Молодец сынок, что купил хлеб");

} else if (isBoughtMilk) {
    console.log("Молодец сынок, что купил молоко");

} else {
    console.log("Сынок ты не молодец, хлеба и молока нет");

}

const isBoughtMilkOrBread = isBoughtBread || isBoughtMilk;

if (isBoughtMilkOrBread) {
    console.log("Молодец сынок что сходил в магазин и купил");

} else {
    console.log("Сынок ты не молодец, хлеба и молока нет");

}

//мама: -сынок только не покупай сладости, тебе их нельзя

const isBoughtCandy = false;

if (!isBoughtCandy) {
    console.log("Молодец сынок что не купил сладости");
    
}