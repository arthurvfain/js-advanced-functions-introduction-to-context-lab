function createEmployeeRecord(infoArray)
{
    let employeeRecord = 
    {
        firstName: infoArray[0],
        familyName: infoArray[1],
        title: infoArray[2],
        payPerHour: infoArray[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return employeeRecord;
}

function createEmployeeRecords(employeeArray)
{
    return employeeArray.map(createEmployeeRecord)
}

function createTimeInEvent(empRec, timeStamp)
{
    let timeEvent =
    {
        type: TimeIn,
        hour: timeStamp.slice(13),
        date: timeStamp.slice(0,11)
    }
    empRec.timeInEvents.push(timeEvent)
    return empRec
}