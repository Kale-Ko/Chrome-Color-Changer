window.onload = function () {
    chrome.storage.sync.get(['unallowedsites'], function (result) {
        var unallowedsites = result.unallowedsites
        if (unallowedsites == null) {
            unallowedsites = []
        }
        for (var index = 0; index < unallowedsites.length; index++) {
            if (window.location.hostname == unallowedsites[index]) {
                var unallowed = "true"
            }
        }
        if (unallowed == "true") {
            console.log("You turned off this website in settings")
        } else {
            chrome.storage.sync.get(['backgroundcolor'], function (result) {
                var backgroundcolor = result.backgroundcolor
                chrome.storage.sync.get(['backgroundchangerenabled'], function (result) {
                    var backgroundchangerenabled = result.backgroundchangerenabled
                    chrome.storage.sync.get(['textcolor'], function (result) {
                        chrome.storage.sync.get(['textchangerenabled'], function (result) {
                            var textchangerenabled = result.textchangerenabled
                            var textcolor = result.textcolor
                            console.groupCollapsed("Applying Colors To Page");
                            if (backgroundcolor == null) {
                                backgroundcolor = "#bf7c00"
                            }
                            if (backgroundchangerenabled == null) {
                                backgroundchangerenabled = "true"
                            }
                            if (backgroundchangerenabled == "true") {
                                document.body.style.backgroundColor = backgroundcolor
                                console.log("Background color set to " + backgroundcolor)
                            }
                            if (textcolor == null) {
                                textcolor = "#00ff95"
                            }
                            if (textchangerenabled == null) {
                                textchangerenabled = "true"
                            }
                            if (textchangerenabled == "true") {
                                document.getElementsByTagName('style')[0].innerHTML = document.getElementsByTagName('style')[0].innerHTML + "\np, label {color: " + textcolor + "}";
                                console.log("Text color set to " + textcolor)
                            }
                            console.groupEnd();
                        });
                    });
                });
            });
        }
    });
}