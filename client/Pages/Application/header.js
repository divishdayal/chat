Template.header.events({
	'click #logout': function () {
		Meteor.logout(function() {
			console.log('logged out');
			Router.go('login');
			return;
		})
	}
});