
// new then .catch .finally
let isNotesPrepared = false;
let promiseToShareNotes = new Promise(function(success, reject){
    if (isNotesPrepared) {
        success("Hey guys take this notes please..");    
    }else{
        reject("Sorry guys, I didn't get time today..")
    }
});

promiseToShareNotes.then(function suced(fulfilled){//.then suce
                                console.log(fulfilled);
})
.catch(function failure(rej){//catch  fail
                                console.log("Sir why have not hared notes..");
                                console.log(rej);
                            })
.finally(function(){// finally ok
                        console.log(" ");
                        console.log("----------------this part alway exucted--------");
                        console.log("I must have note whether sir will give or not");
                        console.log("in case sir shared notes - I will use it ");
                        console.log("in case sir does not shared notes - I will prepare my own ntes..");
                    })