var fs = require('fs');

var GregSong = new Object.create({
	currentStatus: {
		title: '',
		artist: '',
		action: 'stopped'
	}
});

GregSong._init = function() {
	if(this.checks()){
		this.watcher();
	}
};

GregSong.checks = function() {

};

GregSong.watcher = function() {
	fs.watchFile(process.env.USERPROFILE + '/Desktop/text.txt',
		function(curr, prev) {
			fs.readFile(process.env.USERPROFILE + '/Desktop/text.txt',
				'utf8',
				function(err, data) {
					if(err) throw err;
					console.log(data);
				});
		});
};

GregSong.onPlay = function() {

};

GregSong.onPause = function() {

};

GregSong.onStop = function() {

};