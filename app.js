/**
 * Create base object and define global variables.
 */
var GregSong = Object.create({
  status: {
    title: '',
    artist: '',
    action: '',
    raw: ''
  }
});

/**
 * Initialize
 */
GregSong._init = function() {
  this.watcher();
};

/**
 * Check for file changes.
 */
GregSong.watcher = function() {
  $('#files').on('change', function(e) {
    $('#file-block').hide();
    var reader = new FileReader();
    reader.onload = function() {
      GregSong.analyze(reader.result.replace(/(\r\n|\n|\r)/gm, ''));
    };
    setInterval(function() {
      reader.readAsText(e.target.files[0], 'utf8');
    }, 1000);
  });
};

/**
 * Analyzes file text and updates status if changed.
 * @param  {string} data String read from text file.
 */
GregSong.analyze = function(data) {
  if(this.status.raw !== data) {
    if(data === 'stopped') {
      this.status = {
        action: data,
        title: '',
        artist: '',
        raw: data
      };
    } else {
      this.status = {
        action: data.split(':')[0],
        title: data.split(':')[1].split(' - ')[1],
        artist: data.split(': ')[1].split(' - ')[0],
        raw: data
      };
    }

    if(this.status.action === 'playing')
      GregSong.notify();
  }
};

/**
 * Pushes status to DOM and performs animation.
 */
GregSong.notify = function() {
  var notif = $('.notif');
  notif.find('.notif-title').text(this.status.title);
  notif.find('.notif-artist').text(this.status.artist);

  notif
    .animate({ marginLeft: '0px', opacity: '1' }, 2000, 'swing')
    .delay(2000)
    .animate({ marginLeft: '-=100%', opacity: '0' }, 2000, 'swing');
};

GregSong._init();
