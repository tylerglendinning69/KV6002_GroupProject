# How to set up the application

### In order to get our application to run, you will need to download the VS Code Extension named "Live Server"
Name: Live Server
Id: ritwickdey.LiveServer
Description: Launch a development local Server with live reload feature for static & dynamic pages
Version: 5.7.9
Publisher: Ritwick Dey
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

Because our application is local and requires no server-sided logic, there are no relevant system details required.
To login as either volunteer or manager, you can type in anything into the fields. Just as long as there is something in both fields.

### To simulate the application as if you were a manager setting up a scheudle:
1. Open Live Server by right clicking on "Login.html", and then clicking "Open with Live Server", and Login as a Manager.
2. From the homepage, on the right are a trio of buttons. click "Shift Management", then "Change Open Work Hours". From here, you can change the start and end hours of the week. NOTE: If you change this at any point, this will remove existing shift patterns and volunteer's time availability.
3. Navigate back to the homepage, and click "Role Management", then you can either edit the existing roles, or remove them entirely and add new ones. If you plan to test the application with the three default roles, it will not work, so you need to either edit their name, or remove and add new roles.
4. Navigate back to the homepage, and click "Volunteer Management", then "Add volunteer" and fill out the required fields. Repeat this for however many volunteers you would like. I'd recommend 5. From here, click "Edit" from the Actions column, select the volunteer you wish to edit, then click "Edit Times and Roles". From here, once again select which volunteer you are editing preferences for, and highlight the relevant time cells they can work, and the roles they can complete. Click "Submit Preferences" and repeat for every volunteer. You can just reselct which volunteer to edit for from the top. NOTE: this action can also be completed from the volunteer homepage, if you so please.
5. Navigate back to the homepage, and click "Shift Management", then "Add New Shift". You can select a day, start and end time, and relevant roles for the shift. Repeat this for however many shifts you would like in the week.
6. Navigate back to the homepage, and click "Next Week", above the schedule. This should hopefully display the assigned shifts. If not, locate the button at the bottom that refreshes the schedule. This button must be click incase if there are any changes to volunteer preferences, roles, or shift patterns.
7. If some shifts are unassigned, Click "Edit Assigned Shifts", and locate in the shift patterns the unassigned shifts, and assign them to a volunteer. Once complete, click "Save Changes" and navigate back to the schedule, and you should notice that they have been assigned accordingly.

And that should be it! You can now logout and log in a volunteer to view what their homepage looks like if you so please. You will notice a page where they can edit their availability, and that they can view the following week schedule also.
