const data = {
  "booking_id": "60f95d8b7a439",
  "authenticity_token": "",
  "booking_autocorrect_domain": "1",
  "booking_name": "Esme",
  "dog_name": "Dogtanian",
  "dog_breed": "Pomeranian",
  "booking_email": "dogtanian@texxi.net",
  "booking_phone": "01512036279",
  "services": [
    {"name":"s04","quantum":"2"},               {"name":"s02","quantum":"1"},
    {"name":"s05","quantum":"3"}
  ],
    "booking_service": [
    "s04","s02","s05","s03","s01"
  ],
  "doggo_service":[{"s01":"3"},{"s05":"4"},{"s02":"1"}],
  "booking_total":[1,1,1],
  "token": "fd",
  "authcode": "GOLIATH"
};

const services = {
	"s01":{"index":"s01", "name":"Wash and Dry", "price":"10"},
	"s02":{"index":"s02", "name":"Nail Clipping", "price":"50"},
	"s03":{"index":"s03", "name":"Full Grooming", "price":"45"},
	"s04":{"index":"s04", "name":"Puppy Packages", "price":"60"},
	"s05":{"index":"s05", "name":"Hydrobathing", "price":"20"}
};

const tservices = {
	"s01":{"index":"s01", "name":"Wash and Dry", "price": {
			"small": "15",
			"medium": "20",
			"large": "30"
		}},
	"s02":{"index":"s02", "name":"Nail Clipping", "price": {
			"small": "10",
			"medium": "15",
			"large": "25"
		}},
	"s03":{"index":"s03", "name":"Full Grooming", "price": {
			"small": "15",
			"medium": "25",
			"large": "40"
		}},
	"s04":{"index":"s04", "name":"Puppy Packages", "price": {
			"small": "20",
			"medium": "40",
			"large": "60"
		}},
	"s05":{"index":"s05", "name":"Hydrobathing", "price": {
			"small": "30",
			"medium": "50",
			"large": "75"
		}}
};
Handlebars.registerHelper('fullName', function(person) {
  return person.firstName + " " + person.lastName;
});

Handlebars.registerHelper('price', function(index) {
  return tservices[index].price.small;
});

Handlebars.registerHelper('tpain', function(onb) {
  return tservices[Object.keys(onb)].name + " (" + Object.values(onb) +")" ;
});

Handlebars.registerHelper('totalprice', function(index) {
  return index.quantum * tservices[index.name].price.small;
});

Handlebars.registerHelper('sname', function(index) {
  return tservices[index].name;
});
Handlebars.registerHelper('subtotal', function(items) {
  var result =0;
  for (i=0;i<items.length;i++){
 	 result += parseInt(tservices[items[i]].price.small);
	}
  return result.toString();
});
Handlebars.registerHelper('totalvat', function(price) {
	return parseInt(price)*1.2;
});


//Retrieve the template data from the HTML .
var template = $('#handlebars-demo').html();

var context = { "name" : "Ritesh Kumar", "occupation" : "developer" };

//Compile the template data into a function
var templateScript = Handlebars.compile(template);

var html = templateScript(data);
//html = 'My name is Ritesh Kumar . I am a developer.'

$(document.body).append(html);