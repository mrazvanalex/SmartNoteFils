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
                        console.log(type+"\n"+name+"\n"+start_date+"\n"+end_date+"\n"+description+"\n"+difficulty)
                        //mainView.router.loadPage("tasks.html");
                });



                // on form submit, take data.
                // update tasks . get length, add task(length+1);
                //display tasks list.
                //EASY.
        }
});

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
                        "tasks": [{
                                "id":1, //kinda useless here
                                "name":"Bake for mom",
                                "type":"Task",
                                "start_date":"12312521",
                                "end_date":"12314125",
                                "description":"Some description",
                                "importance":"low"
                        }
                ]};
                //Store user Object;
                usersDB.put(user);

                //Set user Object;
                thisuser = user;

        });
        mainView.router.loadPage("tasks.html");

}
