const config = require('../config/pilot-config')

function generateWeeklyMatch(groupId, date){

  const template = config.defaultMatchTemplate

  return {
    groupId,
    date,
    modality: template.modality,
    capacity: template.capacity,
    scheduledDay: template.day,
    scheduledTime: template.time
  }

}

module.exports = {generateWeeklyMatch}
