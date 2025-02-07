function injectStyles() {
    const styleSheet = document.createElement("style");

    styleSheet.textContent = `
    .dark-theme .btn-common-play-game-lg,
    .light-theme .btn-common-play-game-lg {
      background-color: #00b06f !important;
      box-shadow: 0 0 5px rgb(0, 94, 59) !important;
      transition: all 0.1s ease !important;
    }
      
    .dark-theme .btn-common-play-game-lg:hover,
    .dark-theme .btn-common-play-game-lg:focus,
    .light-theme .btn-common-play-game-lg:hover,
    .light-theme .btn-common-play-game-lg:focus {
      background-color:rgb(0, 192, 122) !important;
      box-shadow: 0 0 5px rgb(0, 110, 70) !important;
    }`;

    document.head.appendChild(styleSheet);
}

const observer = new MutationObserver(() => {
    if (!document.querySelector('style[data-roblox-styler]')) {
        injectStyles();
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

injectStyles();