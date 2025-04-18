// console.log("Hello Javascript :)");





// let name = "Saman";
// let age = 10;
// let isAdd = true;
// let salary = null;
// let gender ;


// name ="kamal";

// const address="Matara";

// address="Panadura";

// let customerNames=["Nimal","Sunil","Kamal","Pamal","Bamal"] ;

// console.log(customerNames[1]);

// for(let i=0;i<customerNames.length;i++){
//     console.log(customerNames[i]);

// }


// for(let name of customerNames){
//     console.log(name);
// }

// let index = 0;

// while(index<5){
//     console.log(customerNames[index]);
//     index++;

// }

// customerNames.forEach(name=>{
//     console.log(name);

// })


// console.log( name);
// console.log( address);
// console.log(typeof age);
// console.log(typeof isAdd);


// class Student{
//     name;
//     age;
//     address;
//     nic;

//    constructor(name,age,address,nic){
//         this.name=name;
//         this.address=address;
//         this.age=age;
//         this.nic=nic;
//     }
// }

// let saman=new Student("saman","19","Matara",22542855);
// console.log(saman);


// let saman = new Student("saman",12,"matara",2545454);
// console.log(saman);
// --------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------




// console.log(objkamal.address);
// console.log(objkamal.age);
// console.log(objkamal.name);
// console.log(objkamal.nic);


// let objkamal={
//     name:"Kamal",
//     age:21,
//     address:"Matale",
//     nic:"2525422"
// }
// document.getElementById("b2").innerText=objkamal;

// let hello="Hello javascript";
// document.getElementById("b").innerText=hello;

function calcSum(){
    
    document.getElementById("b2").innerText =
    parseInt(document.getElementById("txtHello").value) +
    parseInt(document.getElementById("txt1Hello").value);

}