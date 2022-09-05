import { DateTime } from './luxon.js'
// Текущая дата.
let dateCurrent = DateTime.local();

function getDate (dateTo) {

    if (dateCurrent > dateTo) {
      [dateTo, dateCurrent] = [dateCurrent, dateTo]
    }
  
    const dateToObj = DateTime.fromISO(dateTo)
  
    return dateToObj.diff(dateObj, ['years', 'months', 'days', 'hour', 'minute', 'second']).toObject()
  
  }
  
  export default getDate