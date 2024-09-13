var str ="I love my Country";
let counter =0;
let vowels=['a','e','i','u','o'];
for(ch of str.toLocaleLowerCase()){
    if(vowels.includes(ch))
    {
        counter++
    }
}
console.log(counter);