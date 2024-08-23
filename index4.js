let summ=0;
for(i=1;i<=100;i++){
    if(i%2==0){
        console.log(`${summ+=i}`);
    }
}
let sum=0;
for(i=1;i<=50;i++){
    if(i%2==0){
        console.log(`${sum+=i}`);
    }
}

let fact=1;
for(i=1;i<=5;i++){

        console.log(`${fact*=i}`);

}

let fact=1;
for(i=1;i<=3;i++){
    console.log(`${fact*=i}`);
}

let i="123";
console.log(`${i.length}`);

let i="4567";
console.log(`${i.length}`);

let a="option8";
switch(a){
    case"option1":console.log("Espresso");
    break;
    case"option2":console.log("Cappuccino");
    break;
    case"option3":console.log("Latte");
    break;
    case"option4":console.log("Mocha");
    break;
    default:console.log("gingeer tea");
}

let shipcost="North America";
switch(shipcost){
    case"North America":console.log("$10 Dollars in the country");
    break;
    case"south America":console.log("$20 Dollars in the country");
    break;
    case"Europe":console.log("$30 Dollars in the country");
    break;
    case"Asia":console.log("$40 Dollars in the country");
    break;
    case"Australia":console.log("$50 Dollars in the country");
    break;
    default:console.log("$300 Dollars in the London country");
}

let distance=80;
if(distance<=5 && distance>=0){
    console.log("$5 Dollars");
}
else if(distance<=10 && distance>=5){
    console.log("$20 Dollars");
}
else if(distance<=20 && distance>=10){
    console.log("$30 Dollars");
}
else if(){
    console.log("$35 Dollars");
}

let discount=120;
if(discount<=5 && discount>=1){
    console.log("no discount of items");
}
else if(discount<=10 && discount>=5){
    console.log("5% discount of items");
}
else if(discount<=20 && discount>=11){
    console.log("10% discount of items");
}
else if(discount<=100 && discount>=20){
    console.log("15% discount of items");
}
else{
    console.log("70% discount for the items");
}

for(i=1;i<=10;i++){
    console.log(`${i*i}`);
}

summ=0;
for(i=1;i<=20;i++){
    if(i%3==0){

     console.log(`${i}`);

     console.log(`adding  = ${summ=summ+i}`);

    }

}

for(i=1;i<=15;i++){
    console.log(`${i**3}`);
}

for(i=1;i<=100;i++){
    if(i%2==0){
    console.log(i);
}

}

for(i=10;i>=0;i--){
    console.log(i);
}

let i=10;
 do {
    console.log(i);
    i--;
 } while (i>=1);

let a=1;
summ=1;
do {
    console.log(`${summ*=a}`);
    a++;
} while (a<=12);

let a = 20;

do {

  console.log(a);
  a--;
  if(a%2!==0){a--};
} while (a>=1);

let a=1;
while(a<=19){
    if(a%5==0){a++};
    console.log(a);
    a++;
}

let a=1;
summ=0;
while(a<=30){
    if(a%4==0)
        {summ+=a
        }

    a++;

}
console.log(summ);

let a=50;
while(a>=1){
    if(a%3==0){
    
    console.log(a);
    }vf
    a--;

}

        let a=prompt("enter a value");
let b=prompt("enter a value");
let c=prompt("enter the condition");
if(c=="+"){
    
    console.log(a+b);
}
else if(c=="-"){
    
    console.log(a-b);
}
else if(c=="*"){
    
    console.log(a*b);
}
else if(c=="/"){
    
    console.log(a/b);
}
else{
    console.log("Is not valid");

let a=prompt("enter the year");
if(a>=500 && a<=2024){
    if(a%4==0){
        console.log("It is a leap year");   
    }
    else{
        console.log("Is not a leap year");
    }
}
else{
    console.log("year enter to the between from 500 to 2024");
}

let a=prompt("Enter a name");
for(i=1;i<=5;i++){
    console.log(`${a.length}`);
}



}