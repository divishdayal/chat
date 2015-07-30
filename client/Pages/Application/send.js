Template.send.events({
	'submit #newMessage': function (e,t) {
		e.preventDefault();   
		var message = t.find('.messageInput').value;
		if(message === ""){
    		throwError("Empty message!");
    		return;
  		}	
        var author = Meteor.user().username;
        Messages.insert({message: message, author: author, authorId: Meteor.userId(),
        				created_at: new Date() }, function(){
        	console.log('message inserted');
            document.getElementById("messageInput").value = '';
        	window.scrollTo(0, document.body.scrollHeight);
            // document.getElementById("messageInput").focus();
            // t.$("#messageInput").focus();
        });
		
	}
});