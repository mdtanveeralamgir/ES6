let activity = "http://www.boredapi.com/api/activity/";
let randomImage = "https://picsum.photos/200";

/*
fetch returns a promise (after fetching the data from the url)
then the response needs to be converted into json format
response.json also returns a promise. so we need to 
*/

//Minimized version
/*
first fetch the activity
then fetch the image
*/
fetch(activity) //fetching data from activity and returning a promise
.then(response => response.json()) //Once the fetch is successfully completed then convert the data into json
.then(json => {
	createP(json); //passing that json file and creating paragraph out of data
	return fetch(randomImage); //In the chain of promise for fetch "return" needs to present
})
.then(setImg).catch(err => console.log(err)); //once the image fetch is done then fetch the image and set the image.
//The catch will collect any error that may happened in this whole chain of promise

// fetch(activity).then(response => response.json()).then(createP).catch(err => console.log(err));
// fetch(randomImage).then(setImg).catch(err => console.log(err));

function createP(obj){
	
	for(let key in obj){
		let title = document.createElement("h4");
		let nodeH = document.createTextNode(key);
		title.appendChild(nodeH);
		let paragraph = document.createElement("p");
		let nodeP = document.createTextNode(obj[key]);
		paragraph.appendChild(nodeP);
		document.body.appendChild(title);
		document.body.appendChild(paragraph);
	}
}

function setImg(obj){
	let img = document.createElement("IMG");
	img.setAttribute("src", obj["url"]);
	img.setAttribute("height", "200");
	img.setAttribute("width", "200");
	document.body.appendChild(img);
	// console.log(obj);
}

