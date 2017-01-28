

const cityUrl = "https://restcountries.eu/rest/v1/all";

let promise = new Promise((resolve,reject)=>{

    let request = new XMLHttpRequest();
    request.open("GET", cityUrl);


    request.onload= function() {

        if (request.status == 200) {
            resolve(request.response);
        }
        else {
            reject(Error("problem"));
        }
    };

    request.send();
})

promise.then(function(result){
    console.log(result);
},function(error){
    console.log(error);
}).then(()=>{
    console.log("prueba!!!!!")
});


