// Write a JavaScript program to get the current date
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let now = new Date();
console.log(`${now.getMonth()+1}-${now.getDate()}-${now.getFullYear()}`)
console.log(`${now.getMonth()+1}/${now.getDate()}/${now.getFullYear()}`)
console.log(`${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}`)
console.log(`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`)