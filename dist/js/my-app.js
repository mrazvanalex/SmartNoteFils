var $$ = Dom7;
var logged = false;
var usersDB = new PouchDB('users');

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

$$(document).on('pageInit', function (e) {
        var page = e.detail.page;
        // Code for About page
        if (page.name === 'tasks') {
                console.log("On tasks page");
                // Let's see how many tasks this user has and get them
                var listCount = thisuser.tasks.length;
                // Now we can generate some dummy list
                var listHTML = '<ul>';
                //Debugging message
                console.log("This user:");
                console.log(thisuser);
                console.log("Displaying this user's tasks");
                //Displaying tasks
                for (var i = 0; i < listCount; i++) {
                        switch(thisuser.tasks[i].importance){
                                case 'easy':
                                taskType = "green-task";
                                break;
                                case 'light':
                                taskType = "lime-task";
                                break;
                                case 'normal':
                                taskType = "yellow-task";
                                break;
                                case 'medium':
                                taskType = "orange-task";
                                break;
                                case 'hard':
                                taskType = "red-task";
                                break;
                                default:
                                taskType = "green-task";
                                break;
                        }
                        var textList = '<li class="'+ taskType +'"><button class="delete-note right red-task close-red-task">x</button><p class="list-item">'+ thisuser.tasks[i].name +'</p></li>'
                        listHTML += textList;
                }

                listHTML += '</ul>';
                // And insert generated list to page content
                $$(page.container).find('.myList').append(listHTML);
        }
        // Code for addTask Page
        if (page.name === 'new_task') {
                console.log("On add task page");
                $$("#submit_task_form").on('click', function (e){
                        var oForm = document.getElementById('addTaskForm');
                        var type = oForm.elements['type'].value;
                        var name = oForm.elements['name'].value;
                        var start_date = oForm.elements['start_date_day'].value + "/" + oForm.elements['start_date_month'].value + "/" + oForm.elements['start_date_year'].value;
                        var end_date = oForm.elements['end_date_day'].value + "/" + oForm.elements['end_date_month'].value + "/" + oForm.elements['end_date_year'].value;
                        var description = oForm.elements['description'].value;
                        var difficulty = oForm.elements['diff'].value;
                        // PREPARE FOR SPAGHETTI CODE
                        if(valid(oForm)){
                                var task={
                                        "name":name,
                                        "type":type,
                                        "start_date":start_date,
                                        "end_date":end_date,
                                        "description":description,
                                        "importance":difficulty
                                };
                                // update tasks
                                tasks = thisuser.tasks;
                                tasks.push(task);
                                usersDB.get(thisuser.email, function (error, doc) {
                                        if (error) {
                                                console.log("Some ajax went wrong");
                                        } else {
                                                var task={
                                                        "name":name,
                                                        "type":type,
                                                        "start_date":start_date,
                                                        "end_date":end_date,
                                                        "description":description,
                                                        "importance":difficulty
                                                };
                                                // update tasks
                                                doc.tasks=tasks;
                                                thisuser = doc;
                                                return usersDB.put(doc);

                                        }

                                });
                                thisuser.tasks=tasks;
                                console.log(thisuser);
                                mainView.router.loadPage("tasks.html");
                        }else{
                                console.log("Form not valid. Can not go further. Throw some error");
                                alert("You missed something");
                        }
                });


                // on form submit, take data.
                // update tasks . get length, add task(length+1);
                //display tasks list.
                //EASY.
        }
});

function valid(oForm){
        var error = false;
        if(oForm.elements['type'].value == "" || oForm.elements['type'].value == " "){
                error=true;
                console.log("Bad type");//debugging
        }else if(oForm.elements['name'].value == "" || oForm.elements['name'].value == " "){
                error=true;
                console.log("Bad name") //debugging
        }
        else if(oForm.elements['start_date_day'].value == "" || oForm.elements['start_date_day'].value == " " || oForm.elements['start_date_year'].value == ""){
                error=true;
                console.log("Bad start_date") //debugging
        }
        else if(oForm.elements['end_date_day'].value == "" || oForm.elements['end_date_day'].value == " " || oForm.elements['end_date_year'].value == ""){
                error=true;
                console.log("Bad end_date") //debugging
        }
        else if(oForm.elements['description'].value == "" || oForm.elements['description'].value == " "){
                error=true;
                console.log("Bad description") //debugging
        }
        else if(oForm.elements['diff'].value == "" || oForm.elements['diff'].value == " "){
                error=true;
                console.log("Bad difficulty") //debugging
        }
        if(error){
                return false;
        }else{
                return true;
        }
}
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
        email = oForm.elements['email'].value;
        password = oForm.elements['password'].value;
        //Check if mail exists in DB

        usersDB.get(email).then(function (doc) {
                if (email == doc.email && password == doc.password) {
                        logged =  true;
                        console.log("You are now logged in");
                        thisuser= doc;
                }else{
                        logged =  false;
                        usersDB.get(email).then(function (doc) {
                                alert("This password does not match the email " + doc.email);
                        });
                        console.log("Sorry, we didn't find this username and pass combination.");
                }
        }).catch(function (err) {
                logged =  true;
                //Create user Object
                var user = {
                        "_id": email,
                        "email": email,
                        "password":password,
                        "tasks": []};
                        //Store user Object;
                        usersDB.put(user);

                        //Set user Object;
                        thisuser = user;

                });
                mainView.router.loadPage("tasks.html");

        }
