Meteor.publish('messages', function(limit) {
  return Messages.find({}, {sort: {created_at: -1}, limit: limit || 20})  });
