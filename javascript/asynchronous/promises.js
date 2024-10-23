/*promise has 3 stated--
        1.pending
        2.fullfilled(resolved) ==>resolve(result)
        3.rejected ==>reject(error)
    promise is object.promises has function handler(resolve,reject)
    resolve,reject callbacks by javascript

        */
let promise=new Promise((resolve,reject)=>{
    console.log("Promise");
    // resolve(123);
    reject(123);
})
console.log(promise);
//api returns promise
function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data : ",dataId);
            resolve("success");
            if(getNextData)
                {
                    getNextData();
                }
        },5000)
    })
}
/* request --->wather api--->response
  if the response- 1.resolved 
                   2.rejected
    receiving promise if it is resovled ==>promise.then(res()=>{..})
                               rejected ==>promise.catch(err()=>{..})

*/ 

const pro=()=>{
    return new Promise((resolve,reject)=>{
        // resolve("success");
        reject("rejected")
    })
}
let promise1=pro();
promise1.then((res=>{
    console.log("promise resolved",res)

}))
promise1.catch((err)=>{
    console.log("promise rejected",err);
})

function asynFunction1(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("Data1");
                resolve("Success");
            },4000);
        })
}
function asynFunction2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data2");
            resolve("Success");
        },4000);
    })
}
// console.log("Feteching data1");
// asynFunction1().then((res)=>{
//     console.log(res);

// })
// console.log("Feteching data2");
// asynFunction2().then((res)=>{
// console.log(res);
// })


console.log("Feteching data1");
asynFunction1().then((res)=>{
    console.log(res);
    console.log("Feteching data2");
    asynFunction2().then((res)=>{
        console.log(res);
    })

})
//promise chain
console.log("Feteching data1");
asynFunction1().then((res)=>{
    console.log("Feteching data2");
    return asynFunction2();
}).then((res)=>{
    console.log("Fetching data3");
    return asynFunction1();
}).then((res)=>{
    console.log(res);
})