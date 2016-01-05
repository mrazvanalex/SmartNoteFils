var $$ = Dom7;
var logged = false;
var usersDB = new PouchDB('users');
var tasksDB = new PouchDB('tasks');


usersDB.get('mrazvanalex').then(function (doc) {
  console.log(doc);
});



// Initialize your app
var myApp = new Framework7({
	//Let's check routing!
	preroute: function (view, options) {
		if (!logged) {
           		view.router.loadPage('auth.html'); //load another page with auth form
          		return false; //required to prevent default router action
         	 }
        },
    // Default title for modals
    modalTitle: 'NoteSmart',

    // If it is webapp, we can enable hash navigation:
    pushState: true,

    // Hide and show indicator during ajax requests
    onAjaxStart: function (xhr) {
    	myApp.showIndicator();
    },
    onAjaxComplete: function (xhr) {
    	myApp.hideIndicator();
    }
  });
// Export selectors engine



// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
  });
var aboutView = myApp.addView('.about-view', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
  });

function CheckLogin(){
	var oForm = document.getElementById('loginform');
	//console.log(oForm.elements);
	email1 = "admin"
	pass1 = "barosan";
	email = oForm.elements['email'].value;
	password = oForm.elements['password'].value;
	if (email == email1 && password == pass1) {
                var doc = {
                  "_id": "mrazvanalex",
                  "name": "Razvan Merdescu",
                  "email":email,
                  "password":pass1,
                  "occupation": "BossBaro$an",
                  "hobbies": [
                    "playing with balls of yarn",
                    "chasing laser pointers",
                    "lookin' hella cute"
                  ]
                };
                usersDB.put(doc);
		logged =  true;
		console.log("You are now logged in");
		mainView.router.loadPage("tasks.html")
	}else{
		logged =  false;
                usersDB.get('mrazvanalex').then(function (doc) {
                  alert("Bai.... "+doc.name+" vezi ca ai gresit aici'sha... datele");
                });
		console.log("Sorry, we didn't find this username and pass combination.");
	}
}
