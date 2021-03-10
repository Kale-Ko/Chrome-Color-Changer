window.onload = function () {
    chrome.storage.sync.get(['unallowedsites'], function (result) {
        var unallowed = "false";
        var unallowedsites = result.unallowedsites
        if (unallowedsites == null) unallowedsites = []

        for (var index = 0; index < unallowedsites.length; index++) {
            if (window.location.hostname == unallowedsites[index]) {
                unallowed = "true"
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
                        var textcolor = result.textcolor
                        chrome.storage.sync.get(['textchangerenabled'], function (result) {
                            var textchangerenabled = result.textchangerenabled

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
                                var text = document.getElementsByTagName("p")
                                for (index = 0; index < text.length; index++) {
                                    text.item(index).style.color = textcolor;
                                }

                                text = document.getElementsByTagName("a")
                                for (index = 0; index < text.length; index++) {
                                    text.item(index).style.color = textcolor;
                                }

                                text = document.getElementsByTagName("label")
                                for (index = 0; index < text.length; index++) {
                                    text.item(index).color = textcolor;
                                }

                                text = document.getElementsByTagName("text")
                                for (index = 0; index < text.length; index++) {
                                    text.item(index).color = textcolor;
                                }

                                text = document.getElementsByTagName("paragraph")
                                for (index = 0; index < text.length; index++) {
                                    text.item(index).color = textcolor;
                                }

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