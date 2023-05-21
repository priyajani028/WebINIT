console.log("log")
console.info("info")
console.warn("warn")
console.error("err")
console.assert("err" != false)
console.assert("err" == false)

console.time("forLoop")

for (let i = 0; i < 50; i++) {
  console.log(233)
}

console.timeEnd("forLoop")

console.time("whileLoop")

let i = 0;
while (i < 500) {
  console.log(233)
  i++;
}

console.timeEnd("whileLoop")




//alert, prompt, confirm
// alert("Enter the value of a!")
// let a = prompt("Enter a here", "578")
a="8"
a = Number.parseInt(a)
// alert("You entered a of type " + (typeof a))
// let write = confirm("Do you want to write it to the page")
let write=true;
if (write) {
  document.write(a)
}
else {
  document.write("Please allow me to write")
}