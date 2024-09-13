function cknum(number){
    if(number>0)
        console.log("Positive");
    else if(number<0)
        console.log("Negative");
    else 
    console.log("zero");       

}
cknum(0);

function getgrade(marks){
    let grade;
    switch(true){
        case marks >=90:
            grade='A';
            break;
        case marks >=80:
            grade ='B';
            break;
        case marks >= 70:
            grade ='C';
            break;
        case marks >=60:
            grade='D';
            break;
        default:
            grade='F';
    }
    console.log("Grade:", grade);
}
getgrade(85);