if(Posts.find().count() === 0){
	Posts.insert({
		title: 'Introducting Telescope',
		url: 'http://sachargerif.com'
	});

	Posts.insert({
		title: 'Meteor',
		url: 'http://meteor.com'
	});

	Posts.insert({
		title: 'The Meteor Book',
		url: 'http://meteor.com'
	});
}