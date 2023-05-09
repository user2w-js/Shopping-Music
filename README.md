# Shopping-Music
Get music while you shop

To start, you will need to download the "TamperMonkey" Add-On

https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/
https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
https://addons.opera.com/en/extensions/details/tampermonkey-beta/

Now that you have TamperMonkey, click on the script in github. ctrl+a then ctrl+c, now go to the tampermonkey extension and click "Dashboard" press the + button (sort of in the top left) Paste it here
Now that you have that script pasted, you can configure it

# CONFIG

Changing the link, if you want to change the link then you need to change the @match to your link
```js 

// @match        https://www.amazon.com  <----HERE
```

If you would like to add more than 1 link, then add more than 1 @match

```js
// @match        https://www.amazon.com
// @match        https://www.google.com  <----HERE
```
## Changing the song

the song is under the l variable
don't forget to use quotes 

```js 
let l = 'https://cdn.discordapp.com/attachments/blah/thisisjustaplaceholder'; // link, USE QUOTES! <--- HERE
```
## Changing the volume

The volume is under the v varible
```js 
let v = 0.09; // volume <--- HERE
```

Post your issues to the Issues, don't send an email.
