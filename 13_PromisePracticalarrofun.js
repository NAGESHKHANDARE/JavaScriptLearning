
let isNotesPrepared = false;
let promiseToShareNotes = new Promise(function(success, reject){
    if (isNotesPrepared) {
        success("Hey guys take this notes please..");    
    }else{
        reject("Sorry guys, I didn't get time today..")
    }
});

promiseToShareNotes.then(fulfilled=>console.log(fulfilled))
.catch( rej=>{  console.log("Sir why have not hared notes..");
                console.log(rej);})
.finally(()=>{
    console.log(" ");
    console.log("----------------this part alway exucted--------");
    console.log("I must have note whether sir will give or not");
    console.log("in case sir shared notes - I will use it ");
    console.log("in case sir does not shared notes - I will prepare my own ntes..");
})