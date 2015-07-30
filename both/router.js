Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {name:'login'});
Router.route('/chat', {name:'chat',
						 waitOn: function() {     return Meteor.subscribe('messages', Session.get('msg_count'))  }});
// Router.route('/chat/:_id', 
// 				{name:'chatPage',
// 				 waitOn: function() {     return [Meteor.subscribe('messages', this.params._id)]  },
// 				 data: function() { return Messages.find() }
// 				});



var requireLogin = function() {
	if (!Meteor.user()) {
		if (Meteor.loggingIn()) {
			this.render(this.loadingTemplate);
		} else {
		
		this.render('accessDenied');
	}
	} else {
		this.next();
	}
}

Router.onBeforeAction(requireLogin, {except: ['login']});