# ChromeProtocolRepro

### Issue
* Opening a custom protocol URL in Chrome will often cause the target desktop application to flash to the foreground for a brief moment. The target app should get focus and stay in the foreground, but instead Chrome stays in the foreground with focus.
* This can only be observed with Chrome, on OSX El Capitan, with the desktop application already running. (Firefox, OSX Yosemite, etc. all seem to work fine)
* Chrome version <code>48.0.2564.97 (64-bit)</code>

### Instructions to reproduce

* Build and start this application

```
$ ./build
$ open out/ChromeProtocolRepro-darwin-x64/ChromeProtocolRepro.app
```
(note: `npm` will need to be installed)

* Open `chrome-protocol-repro:foo:bar` in Chrome
* This app will flicker, but stay in the background, while Chrome keeps focus and stays in the foreground. (note: this is observed roughly 25% of the time)
* Observe correct behavior opening protocol url in Firefox, or from the command line using `open chrome-protocol-repro:foo:bar`.

Note: this issue can also be observed with Spotify's custom protocol urls in Chrome on El Capitan. With Spotify running, open the below link, and Spotify should flicker, with Chrome staying in the foreground with focus. https://embed.spotify.com/openspotify/?spuri=spotify:track:00qOE7OjRl0BpYiCiweZB2&closedelay=5000
