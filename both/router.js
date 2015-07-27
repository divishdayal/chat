Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {name:'login'});
Router.route('/chat', {name:'chat'});



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