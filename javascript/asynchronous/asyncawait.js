function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather Data");
            resolve("Success");
        },2000);
       
    })
}
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data : ",dataId);
            resolve("Success")
        },2000)
    })
}
async function weatherApi(){
    await api();//1st
    await api();//2nd
}
//async-await chain
async function getAllData() {
    console.log("Fetching data1");
    await getData(1);
    console.log("Fetching data2");
    await getData(2);
    console.log("Fetching data3");
    await getData(3);
    console.log("Fetching data4");
    await getData(4);
    
}
getAllData();
//IIFE==>Immediate Invoke Function expression
// if yyou are using iife means no need to call function like this getAllData()
//it will excute it immediately once after defing and can be used once
(async function getAllData() {
    console.log("Fetching data1");
    await getData(1);
    console.log("Fetching data2");
    await getData(2);
    console.log("Fetching data3");
    await getData(3);
    console.log("Fetching data4");
    await getData(4);
    JSON.parse
    
})();