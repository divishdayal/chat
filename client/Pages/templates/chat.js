Meteor.startup(function(){
    Session.set('msg_count', 20);
});

Template.chat.helpers({
	messages: function () {
		return Messages.find({}, {sort: {created_at: 1}});
	},
	no_more_msgs: function(){
		return (Messages.find().count() < Session.get('msg_count'));
	}
});

Template.message.helpers({
	isActive: function () {
		return (Meteor.userId()===this.authorId);
	},
	time : function(){
		return moment(this.created_at).calendar();
	},
	messageAuthor: function(){
		current = this.author;
		return this.author;
	},
	isSameAuthor : function(){
		return (current == this.author);
	}
});

Template.chat.events({
	'click #more_msgs': function (e) {
		e.preventDefault();
		var msg_count = Session.get('msg_count');
		Session.set('msg_count', msg_count + 20)
	}
});

Template.message.rendered = function () {
	window.scrollTo(0, document.body.scrollHeight);
	// $("#messageInput").focus();
};