Package.describe({
	summary: "Koretech LDAP authentication",
	version: '0.1.0'
});

Package.onUse(function(api){

	Npm.depends({
		"activedirectory": "0.5.1"
	});

	api.use([
		'underscore',
		'accounts-base',
		'kt-core@0.1.0'
	], ['client', 'server']);

	api.use([
		'meteorhacks:npm@1.2.0'
	], 'server');

	api.imply([
		'accounts-base'
	]);

	api.addFiles([
		'namespaces.js'
	], ['client', 'server']);

	api.addFiles(['components/client.js'], 'client');
	api.addFiles(['components/server.js'], 'server');

});