function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("Data",dataId);
        if(getNextData){
            getNextData();
        }

    },2000)
}
//call back hell(or)Pyramid of Doom
//Nested callbacks stacked below one anthoer forming apyramid structure
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4)
        });
    });
});