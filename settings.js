chrome.storage.sync.get(['backgroundcolor'], function (result) {
    var backgroundcolor = result.backgroundcolor
    chrome.storage.sync.get(['backgroundchangerenabled'], function (result) {
        var backgroundchangerenabled = result.backgroundchangerenabled
        chrome.storage.sync.get(['textcolor'], function (result) {
            var textcolor = result.textcolor
            chrome.storage.sync.get(['textchangerenabled'], function (result) {
                var textchangerenabled = result.textchangerenabled
                chrome.storage.sync.get(['unallowedsites'], function (result) {
                    var unallowedsites = result.unallowedsites
                    if (backgroundcolor == null) {
                        backgroundcolor = "#bf7c00"
                    }
                    if (backgroundchangerenabled == null) {
                        backgroundchangerenabled = "true"
                    }
                    if (textcolor == null) {
                        textcolor = "#00ff95"
                    }
                    if (textchangerenabled == null) {
                        textchangerenabled = "true"
                    }
                    if (unallowedsites == null) {
                        unallowedsites = [""]
                    }

                    document.getElementById("custombackgroundcolor").addEventListener("onkeyup", updatecolors);
                    document.getElementById("customtextcolor").addEventListener("onkeyup", updatecolors);
                    document.getElementById("savebutton").addEventListener("click", savesettings);
                    document.getElementById("resetbutton").addEventListener("click", reset);

                    document.getElementById("custombackgroundcolor").value = backgroundcolor
                    document.getElementById("backgroundchangerenabled").value = backgroundchangerenabled
                    document.getElementById("customtextcolor").value = textcolor
                    document.getElementById("textchangerenabled").value = textchangerenabled
                    document.getElementById("unallowedsites").value = unallowedsites

                    var backgroundpicker = new iro.ColorPicker('#backgroundpicker', {
                        id: "backgroundpicker",
                        width: 150,
                        color: backgroundcolor,
                        layoutDirection: "horizontal",
                        borderWidth: 2,
                        borderColor: "#000",
                        wheelAngle: 180
                    });
                    var textpicker = new iro.ColorPicker('#textpicker', {
                        id: "textpicker",
                        width: 150,
                        color: textcolor,
                        layoutDirection: "horizontal",
                        borderWidth: 2,
                        borderColor: "#000",
                        wheelAngle: 180
                    });
                    backgroundpicker.on(['color:change'], function (color) {
                        document.getElementById("custombackgroundcolor").value = color.hexString
                    });
                    textpicker.on(['color:change'], function (color) {
                        document.getElementById("customtextcolor").value = color.hexString

                    });
                    function updatecolors() {
                        backgroundpicker.color.hexString = document.getElementById("custombackgroundcolor").value
                        textpicker.color.hexString = document.getElementById("customtextcolor").value
                    }

                    function savesettings() {
                        chrome.storage.sync.set({ backgroundcolor: document.getElementById("custombackgroundcolor").value }, function () {
                            chrome.storage.sync.set({ backgroundchangerenabled: document.getElementById("backgroundchangerenabled").value }, function () {
                                chrome.storage.sync.set({ textcolor: document.getElementById("customtextcolor").value }, function () {
                                    chrome.storage.sync.set({ textchangerenabled: document.getElementById("textchangerenabled").value }, function () {
                                        chrome.storage.sync.set({ unallowedsites: document.getElementById("unallowedsites").value.split(",") }, function () {
                                            window.location.reload()
                                        });
                                    });
                                });
                            });
                        });
                    }

                    function reset() {
                        chrome.storage.sync.remove("backgroundcolor");
                        chrome.storage.sync.remove("backgroundchangerenabled");
                        chrome.storage.sync.remove("textcolor");
                        chrome.storage.sync.remove("textchangerenabled");
                        chrome.storage.sync.remove("unallowedsites");
                        window.location.reload()
                    }
                });
            });
        });
    });
});