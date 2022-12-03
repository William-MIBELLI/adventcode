const fs = require('fs')
const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const data = fs.readFileSync('./input_day3.txt', 'utf-8').split('\n')


const part2 = () => {

  let result = 0

  for(let i = 0 ; i < data.length ; i+=3){

    let added = false
    let temp = data[i].split('')

    temp.forEach(letter => {

      if(data[i+1].includes(letter) && data[i+2].includes(letter) && !added){
        added = true
        result += alpha.indexOf(letter)+1
      }

    })
  }
  console.log(result)
}


const part1 = () => {

  let result = 0

  data.forEach(item => {

    let added = false
    const comp1 = item.slice(0, item.length/2+1)
    const comp2 = item.slice(item.length/2)

    comp1.split('').forEach(letter => {

      if(comp2.includes(letter) && !added){
        result += alpha.indexOf(letter)+1
        added = true
      } 

    }) 
  })
  console.log(result)
}
 part2()