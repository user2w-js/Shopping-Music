// ==UserScript==
// @name         Amazon Audio Player
// @namespace    http://tampermonkey.net/
// @version      2.013
// @description  Play audio on Amazon pages at a regular interval
// @match        https://www.amazon.com/*
// @grant        none
// ==/UserScript==

// Audio "Jan 2016"
let l = 'https://cdn.discordapp.com/attachments/896227233713258526/1105640370248884264/alarme.mp3'; // link, USE QUOTES!
let v = 100; // volume 0.001-100

(function() {
    let isFunctionRunning = false;
    let myAudioElement;

    function refreshData() {
        myAudioElement = new Audio(l);
        myAudioElement.volume = (v/100);
        myAudioElement.loop = true;
        if (window.sessionStorage.getItem('music_time')) {
            myAudioElement.currentTime = window.sessionStorage.getItem('music_time');
        }

        myAudioElement.play();

        setInterval(() => {
            window.sessionStorage.setItem('music_time', myAudioElement.currentTime);
        }, 100);
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
let x = undefined;
// x had been xiled (haha get the joke) because it is overused, and we need to be more creative
