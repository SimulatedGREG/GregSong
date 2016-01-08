var fs = require('fs');

/**
 * Create base object and define global variables.
 */
var GregSong = Object.create({
  path: './test.txt',
  status: {
    title: '',
    artist: '',
    action: ''
  }
});

/**
 * Initialize
 */
GregSong._init = function() {
  // TODO: Give meaningful feedback to user on missing file.
  if(this.check())
    this.watcher();
  else
    console.error('File not found at ' + this.path);
};

/**
 * Check if file is accessable.
 * @return {boolean} Does file exist.
 */
GregSong.check = function() {
  try {
    fs.accessSync(this.path, fs.F_OK);
    return true;
  } catch (err) { return false; }
};

/**
 * Watch for file changes and call to analyze if changed.
 */
GregSong.watcher = function() {
  fs.watchFile(GregSong.path, function(curr, prev) {
    GregSong.analyze(fs.readFileSync(GregSong.path, 'ascii').replace(/(\r\n|\n|\r|(o;\?))/gm, ''));
  });
};

/**
 * Updates current status and notifies if media playing.
 * @param  {string} data String read from text file.
 */
GregSong.analyze = function(data) {
  if(data == 'stopped') {
    this.status = {
      action: data,
      title: '',
      artist: ''
    };
  } else {
    this.status = {
      action: data.split(':')[0],
      title: data.split(':')[1].split(' - ')[1],
      artist: data.split(': ')[1].split(' - ')[0]
    };
  }

  if(this.status.action === 'playing'){
		GregSong.notify();}
};

/**
 * Pushes status to DOM and performs animation.
 * TODO: Connect with DOM.
 */
GregSong.notify = function() {
  console.log('hello DOM');
};

GregSong._init();
