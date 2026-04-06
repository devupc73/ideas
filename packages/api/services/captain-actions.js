// Captain actions service

function canStartDraw(userRole){
  return userRole === 'captain'
}

function canConfirmPayment(userRole){
  return userRole === 'captain'
}

module.exports={
  canStartDraw,
  canConfirmPayment
}
