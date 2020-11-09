module.exports = class Vars {
vars = {
    
city:'Электросталь',
countries:'Россия, Белоруссия, Украина, Грузия, Киргизия, Узбекистан, Таджикистан, Армения, Азербайджан, Молдавия, Казахстан, Туркмения, Другое',
movementTypes:'Пеший, На велосипеде, На электровелосипеде, На машине, На мотоцикле',
distribution:'В Еду -> 100%',
documents:'Паспорт с регистрацией в любом виде, СНИЛС, ИНН,  Банковская карта',
    
}}    
    
//ЗАПОЛНЕНИЕ РАСПИСАНИЯ ДЛЯ СЕГОДНЯШНЕГО ДНЯ
// fillTodayScedule: function (nameOfDay) {
//     cy
//     .get('label[class = "control-label schedule__item-from-label"]').contains(`${nameOfDay}`)
//     .next().children().first().click()
//     .get('input[formcontrolname="hoursFrom"]').clear().type('0')
//     .get('input[formcontrolname="minutesFrom"]').clear().type('1')
//     .get('input[formcontrolname="hoursTo"]').clear().type('23')
//     .get('input[formcontrolname="minutesTo"]').clear().type('59')
//     },
    
    
// defineToday:function (dayOfWeek) {
//     switch (dayOfWeek +1) {
//     case 1:
//         fillTodayScedule('Пн');
//         break;
//     case 2:
//         fillTodayScedule('Вт');
//         break;
//     case 3:
//         fillTodayScedule('Ср');
//         break;
//     case 4:
//         fillTodayScedule('Чт');
//         break;
//     case 5:
//         fillTodayScedule('Пт');
//         break;
//     case 6:
//         fillTodayScedule('Сб');
//         break;
//     case 7:
//         fillTodayScedule('Вс');
//         break;
//     default: cy.log('PROBLEMS');
//     }
// }
// }