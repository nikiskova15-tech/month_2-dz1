const firstSelebritySkater = "Tony Hawk"; //выполнил самый сложный трюк
const firstCreator = "Rodney Mullen"; //создатель первых полноценных скейтов
const skateCreator = "California"; //страна в которой был создан скейтбординг
const countryOlympicChampion = "Japan"; //страна победитель в олимп играх по скейтбордингу

const creationYear = 1950; //год создания
const countriesParticipated = 23; //колво стран участниц в олимп играх по скейтбордингу
const olympicYear = 2023; //год в котором проходили олимп игры по скейтбордингу


console.log("Создание скайтбординга:" + " " + skateCreator + " " + creationYear);
console.log("Olympic champion:" + " " + countryOlympicChampion + " " + olympicYear);


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