function createPaymentSession(data){
  const {amount,currency,matchId,userId} = data

  return {
    provider:'mock',
    checkoutUrl:`https://payment.local/session/${matchId}-${userId}`,
    amount,
    currency
  }
}

module.exports={createPaymentSession}
