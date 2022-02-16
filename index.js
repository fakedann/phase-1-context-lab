/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 function createEmployeeRecord(employee){
    const worker = {
      firstName: employee[0],
      familyName: employee[1],
      title: employee[2],
      payPerHour: employee[3],
      timeInEvents: [],
      timeOutEvents: []
    }
    return worker
  }
  
  function createEmployeeRecords(employees){
    const groupOfWorkers = []
  
    for( let person of employees){
      groupOfWorkers.push(createEmployeeRecord(person))
    }
  
    return groupOfWorkers
  }
  
  function createTimeInEvent(date){
    const splitDate = date.split(' ')
  
    const clockIn = {
      type: "TimeIn",
      hour: parseInt(splitDate[1]),
      date: splitDate[0]
    }
  
    this.timeInEvents.push(clockIn)
    return this
  }
  
  function createTimeOutEvent(date){
    const splitDate = date.split(' ')
  
    const clockOut = {
      type: "TimeOut",
      hour: parseInt(splitDate[1]),
      date: splitDate[0]
    }
  
    this.timeOutEvents.push(clockOut)
    return this
  }
  
  function hoursWorkedOnDate(date){
    let timeIn = this.timeInEvents.find( elem => elem.date === date)
    let timeOut = this.timeOutEvents.find( elem => elem.date === date )
    return((timeOut.hour-timeIn.hour)/100)
  }
  
  function wagesEarnedOnDate(date){
    let hoursWorked = hoursWorkedOnDate.call(this, date)
    return hoursWorked*this.payPerHour
  
  }
  
  function calculatePayroll(employees){
    const totalPayRoll = employees.reduce((accumulator, currentValue) => {
        return accumulator+allWagesFor.call(currentValue)
    }, 0)
    return totalPayRoll
  }


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(employees, firstName){
    return employees.find( elem => elem.firstName === firstName)
}
