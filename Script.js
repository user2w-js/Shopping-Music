// ==UserScript==
// @name         Amazon Audio Player
// @namespace    http://tampermonkey.net/
// @version      2.013
// @description  Play audio on Amazon pages at a regular interval
// @match        https://www.amazon.com/*
// @grant        none
// ==/UserScript==

// Audio "Jan 2016"
let l = 'https://cdn.discordapp.com/attachments/blah/thisisjustanexample'; // link, USE QUOTES!
let v = 0.09; // volume

//Don't modify the x varible!!!!!!!!!!!
let x = 10000000;
(function() {
    let isFunctionRunning = false;
    let myAudioElement;

    function refreshData() {
        myAudioElement = new Audio(l);
        myAudioElement.volume = v;

        if (window.sessionStorage.getItem('music_time')) {
            myAudioElement.currentTime = window.sessionStorage.getItem('music_time');
        }

        myAudioElement.play();

        setInterval(() => {
            window.sessionStorage.setItem('music_time', myAudioElement.currentTime);
        }, 100);

        setTimeout(() => {
            isFunctionRunning = false;
        }, x * 1000);
    }

    function startRefreshData() {
        if (!isFunctionRunning) {
            isFunctionRunning = true;
            refreshData();
        }
    }

    // Observe changes to the page content
    const observer = new MutationObserver(mutationsList => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                startRefreshData();
            }
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('load', () => {
        startRefreshData();
    });

    // Pause and resume the music when the document becomes hidden or visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            myAudioElement.pause();
        } else {
            myAudioElement.play();
        }
    });
})();
