
function writeCards(names, event) {
  let message = []
  for (let i = 0; i < names.length; i++) {
    message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return message
}

function countDown(num){
  let i = [10] 
  while (i > -1) {
    console.log(i--)
  }
}