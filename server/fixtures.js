

if (!Meteor.users.findOne()){
	var id1 = Accounts.createUser({
                            username: 'Divish',
                            password : '0129',
                            

    });
    var id2 = Accounts.createUser({
                            username: 'Tanya',
                            password : '1703',
                            

    });
}

if (Messages.find().count() === 0) {
	var mes1Id = Messages.insert({ author: 'Divish', message: 'Testing', authorId: id1, created_at: new Date()});
	var mes2Id = Messages.insert({ author: 'Tanya', message: 'Testing', authorId: id2, created_at: new Date()});
	// for (var i = 0; i < 15; i++) {
 //    Messages.insert({ author: 'user1', message: 'hey'+i, authorId: id1, created_at: new Date()});
 //  }
 //  for (var i = 0; i < 15; i++) {
 //    Messages.insert({ author: 'user2', message: 'hey'+i, authorId: id2, created_at: new Date()});
 //  }
	
}
