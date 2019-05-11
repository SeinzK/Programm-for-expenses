

var startPayment = document.getElementById('start'),
    budget = document.getElementsByClassName('budget-value'),
    dayBudget = document.getElementsByClassName("daybudget-value"),
    levelIncome = document.getElementsByClassName('level-value'),
    expensesCosts = document.getElementsByClassName('expenses-value'),
    optionalExpenses = document.getElementsByClassName('optionalExpenses-value'),
    income = document.getElementsByClassName('income-value'),
    monthSavings = document.getElementsByClassName('monthsavings-value'),
    yearSavings = document.getElementsByClassName('yearsavings-value'),
    mandatoryExpenses = document.getElementsByClassName('choose-expenses'),
    approveBtn = document.getElementsByClassName('optionalexpenses-btn'),
    countBtn = document.getElementsByClassName('count-budget-btn'),
    nonBindingExpenses = document.querySelectorAll('.optionalexpenses'),
    possibleIncome = document.querySelector('.data .choose-income-label'),
    checksavings = document.querySelector('.data .checksavings'),
    lsbelHtml = document.getElementsByTagName('label'),
    yearHtml = document.querySelector('.time-data .year'),
    monthHtml = document.querySelector('.time-data .month'),
    dayHtml = document.querySelector('.time-data .day');

console.log(checksavings);
console.log(sumHtml);
console.log(yearHtml);
console.log(monthHtml);
console.log(dayHtml);

var money, time;

function start () {
    money = +prompt ("Ваш бюджет на месяц?", ""), 
    time = prompt ("Введите дату в формате YY-MM-DD: ", ""); 
    
    while ( isNaN(money) || money == "" || money == null ) {
        money = +prompt ("Ваш бюджет на месяц?", "");
    }
    return money;
}
start();

var appData = { // создание обекта с даными
    budget: money, // месячный бюджет пользователя
    expenses: {},    // обязательные вытраты
    optionalExpenses: {}, // необязательные вытраты
    income: [], // дополнительный доход 
    timeData: time,
    savings: true, // заощадження
    
    chooseExpenses: function() { // спрашивает пользовотаеля за его обязательные расходы
        for ( var i = 0; i < 1; i++ ) {
            var a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt ("Во сколько обойдеться?", "");

            if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' &&   a.length < 50) {
                appData.expenses[a] = b;   
            } 
            else {
                i = i - 1; 
            }
        } 
    },
    
    detectDayBudget: function() { // функция для нахождения среднего значения на день 
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ( appData.moneyPerDay );  
    },
    
    detectLevel: function() { // подчеркивание финансового состояния пользователя 
       if ( appData.moneyPerDay < 100 ) {
        console.log("Ну ты и бомж!");
        } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
            console.log("Тввоего дохода хватит на еду в маке"); 
        } else if ( appData.moneyPerDay > 2000) {
            console.log("Ничего себе, да ты БОГАТ! Дашь свой номерок?");
        } else {
            console.log("Произошла досаднейшая проблема. Я не знаю как ее решить")
        } 
    }, 
    
    chooseOptExpenses: function() { // добавление необязательных расходов 
        for ( var i = 0; i < 3; i++ ) {
            var optExpensesName = prompt ("Введите необязательный расход: ", ""); 

            if ((typeof(optExpensesName)) === "string" && (typeof(optExpensesName)) != null && optExpensesName != '' && optExpensesName.length < 50) {
                appData.optionalExpenses[i] = optExpensesName;
            }
            else {
                i = i - 1;
            }
        }   
    },
    
    checkSavings: function() { // размер накоплений и доход в год пользователя 
        var save = prompt ("Каков размер Ваших накомлений?", ""),
            percent = prompt ("Каков процент накопления?","");
        appData.savings = save; 
        appData.monthIncome = save/100 * percent; 
        alert ( "Ваш доход от накоплений в месяц равен: "+ appData.monthIncome.toFixed()); 
    },
    
    chooseIncome: function() { // дополнительный доход пользователя 
        for ( var i = 0; i < 1; i++ ) {
            var items = prompt ("Что принесет дополнительный доход? (Перечислите значения через запятую)","");
            if ( (typeof(items)) === 'string' && items != '' && (typeof(items)) != null ) {
                appData.income = items.split(', ');  
                appData.income.push( prompt ('Может быть, что-то еще?'));
                appData.income.sort(); 
            } else {
                i--;
            }
        }
        appData.income.forEach ( function (item) {
            alert ("Способы доп. заработка: " + item);
        })
    }
};

appData.chooseIncome();
for (var key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
};
