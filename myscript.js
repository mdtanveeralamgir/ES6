//Creating promise

let cleanRoam = new Promise((resolve, reject) => {
	//Code to clean the room
	let result = false;
	if(result){
		resolve('cleaned');//This argument will be passed to the then callback function.
	} else{
		reject('is not cleaned'); //This argument will be passed to the catch callback function.
	}
});

cleanRoam.then(fromResolved =>{
	console.log(fromResolved); //fronResolved is the argument passed to the resolved in the promise
}).catch(fronReject => {
	console.log(fronReject); //fronResolved is the argument passed to the reject in the promise
});

/*
Chain of promises
clean the room, clear the garbage, get an ice-cream as reward
*/ 

//Clean the room
let cleanRoom = function(){
	return new Promise((resolve, reject) => {
		resolve('Cleaned the room');
	});
}

//Clear the garbage
let clearGarbage = function(message){
	return new Promise((resolve, reject) => {
		resolve(message + ' Cleared the garbage');
	});
}

//Get ice-cream
let getIceCream = function(message){
	return new Promise((resolve, reject) => {
		resolve(message + ' Got ice cream');
	})
}

//Chain of promise
cleanRoom()
.then((msgAfterCleanRoom) => clearGarbage(msgAfterCleanRoom))
.then((msgAfterClearGarbeg) => getIceCream(msgAfterClearGarbeg))
.then((finalMessage) => console.log(finalMessage));

//All finished together
//values param will catch the message (param) for all the promise
Promise.all([cleanRoom(), clearGarbage(), getIceCream()]).then((values) => console.log('All finished ' + values));

//Any promise to be finished
//If any of the 3 promises is finished then we will get the result
Promise.race([cleanRoom(), clearGarbage(), getIceCream()]).then((values) => console.log('One of them is finished ' + values));