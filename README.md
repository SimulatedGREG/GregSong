GregSong [in development]
===
A simple on stream overlay to denote the current song being played. Useful for Twitch broadcasters.

How it works
---
GregSong was originally created to be used with [foobar2000](https://www.foobar2000.org), but has been build to support a dynamic text file that is updated with the current song information by the media player. GregSong will watch for file changes and notify the overlay accordingly.

### File Format
There are 2 basic states that GregSong looks for in the text file, playing and stopped. There is no plan to customize this format at the moment, but may be reconsidered in the future.

```
playing: <Artist> - <Song Name>
stopped
```

Example
```
playing: Rick Astley - Never Gonna Give You Up
```
### Setup

#### foobar2000
1. Download and extract the [Now Playing Simple](http://skipyrich.com/wiki/Foobar2000:Now_Playing_Simple) component.
2. Move extracted contents to `C:\Program Files (x86)\foobar2000\components`
3. Open foobar2000 preferences and configure the file location to `C:\Program Files (x86)\foobar2000` and name the file `gregsong.txt`.
