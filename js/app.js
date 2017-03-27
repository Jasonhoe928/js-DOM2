/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.fs
Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars*/
var KapiolaniRating = document.getElementById("rating1");
rating1.innerHTML = "5 Stars";


//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Adress: 525 Kapahulu Ave, Honolulu, HI 96815*/
var sunrisePrice = document.getElementById("price2");
sunrisePrice.innerHTML = "$.99";
var sunriseAddress = document.getElementById("addy2");
sunriseAddress.innerHTML = "1234 Sunset Ave.";
//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/
var nakRamen = document.createElement("div");
nakRamen.id = "hours3";
nakRamen.innerHTML = "Hours: 6pm - 12am Sun-Sat";
text3.appendChild(nakRamen);

//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of 
"text4"*/
var kamBowlPrice = document.createElement("div");
kamBowlPrice.id = "price4";
kamBowlPrice.innerHTML = "Price: $$$";
text4.appendChild(kamBowlPrice);
/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/
var newAddy = document.createElement("div");
newAddy.id = "addy4";
newAddy.innerHTML = "Address: 1620 N. School St, Honolulu, HI 96817";
text4.appendChild(newAddy);
/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of 
"text4"
*/
newHours = document.createElement("div");
newHours.id = "hours4";
newHours.innerHTML = "Hours: 9am - 10pm Sun - Sat";
text4.appendChild(newHours);
/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/
var oxUpdate = document.createElement("p");
oxUpdate.id = "update4";
oxUpdate.innerHTML = "I'd leave a blank space for this oxtail soup!";
comment4.appendChild(oxUpdate);

//5. The Death Star Cafe
/*The empire strikes back with a new and improved oxtail soup offering. Help the dark side win back customers by executing the following commands:*/

/*Create the div elements with the following id's:

"name5"
"rating5"
"price5"
"addy5"
"hours5"

Add the following info for each specific div id:

name5: 5. The Death Star Cafe
rating5: Rating: 2 Stars
price5: Price: $$
addy5: Address: A galaxy far, far away.
hours5: Hours: We never close.

Append the div elements to the div id "text5"
*/

