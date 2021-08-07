# Just a basic homepage and newtab configuration for Firefox and Chromium!

You can see an example of this homepage at:

https://jhrush.github.io/homePage/hp.html

# Install for Firefox

Simply run:

>sh installForFirefox.sh

then go to about:preferences and click Home in the sidebar

change the home url to a custom url at:

>file:///usr/lib/firefox/hp/hp.html

# For Chrome

Simply run:

>sh installForChrome.sh

then go to chrome://extensions and click the Developer mode checkbox on the top right.

Click the Load unpacked extension… button

Navigate to your folder and click select

# Old instructions
In autoconfig.cfg make sure to change line:

>var newTabURL = "file:///home/jake/Projects/homePage/hp.html";

to whatever directory you place hp.html.

autoconfig.cfg goes in:	/usr/lib/firefox/

autoconfig.js goes in:	/usr/lib/firefox/defaults/pref

Then simply set newtab to default and homepage to what you set your newTabURL to. 
It should be set to something similar to the line below:

>file:///home/jake/Projects/homePage/hp.html

