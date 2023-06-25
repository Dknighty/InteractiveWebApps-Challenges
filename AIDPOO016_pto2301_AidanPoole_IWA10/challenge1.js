const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment
function checkforId(id) {
    if (id == 9) {
        console.log("ID 9 not created")
    }
}

holidays[6][1] = "X-mas";
holidays[6][2] = "new Date(`25 December ${currentYear} ')";
const copied = "Christmas Day"; 
correctDate = copied.date
correctDate.hours = 0
correctDate.minutes = 0
const isEarlier = copied.date < holidays[6].date
console.log('New date is earlier:', isEarlier)
if (isEarlier) copied.date = correctDate
console.log('ID change:', holidays[christmas].id != copied.id || copied.id)
console.log('Name change:', holidays[christmas].name != copied.name || copied.name)
console.log('Date change:', holidays[christmas].date != copied.date || copied.date)

console.log(holidays.futureId.newName || "ID 9 not created yet")

const firstHolidayTimestamp = holidays[0].date.getTime();

const lastHolidayTimestamp = holidays[8].date.getTime();


const firstDay = firstHolidayTimestamp.getDate();
const firstMonth = firstHolidayTimestamp.getMonth();
const lastDay = lastHolidayTimestamp.getDate();
const lastMonth = lastHolidayTimestamp.getMonth();
checkforId()
console.log(firstDay + firstMonth + currentYear)
console.log(lastDay + lastMonth + currentYear)

const randomHoliday = holidays[Math.random]
console.log(randomHoliday.date)