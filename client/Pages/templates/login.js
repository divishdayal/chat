Template.login.events({
	'submit #login-form' : function(e, t){
      e.preventDefault();
      // retrieve the input field values
      var username = t.find('#login-username').value
        , password = t.find('#login-password').value;

        // Trim and validate your fields here.... 

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword({username:username}, password, function(err){
        if (err){ 
                  throwError("invalid username/password");
                  $(".signIn").velocity("callout.shake", { duration: 1000});
                  console.log(err);
                  return;
      }
          // The user might not have been found, or their passwword
          // could be incorrect. Inform the user that their
          // login attempt has failed. 
        else{ console.log("logged is successful");}          // The user has been logged in.
        Router.go('/chat');
        
      });
         return false; 
      }

    //   'submit #logout-form': function(e, t) {
    // e.preventDefault();
    // Meteor.logout(function(err) {
    //   if (err) {
    //     console.log(err);
    //     // Display the logout error to the user however you want
    //   }
    //   else {
    //     Router.go('/');
    //   }
    // });
    




});