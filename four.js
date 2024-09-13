function cknum(age){
    if(age<12)
        console.log("child");
    else if(age>=13 && age<=19)
        console.log("Teenager");
    else if(age>=20 && age<=64)
        console.log("Adult");
    else 
    console.log("Older");       

}
cknum(90);