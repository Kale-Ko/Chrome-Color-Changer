chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var tab = tabs[0];
    var url = new URL(tab.url)
    var currentdomain = url.hostname

    document.getElementById("opensettings").addEventListener("click", opensettings);

    chrome.storage.sync.get(['unallowedsites'], function (result) {
        var unallowedsites = result.unallowedsites
        if (unallowedsites.includes(currentdomain)) {
            var newbutton = document.createElement("button");
            newbutton.innerHTML = "Enable on this site"
            newbutton.id = "enablehere"
            document.body.appendChild(newbutton);
            document.getElementById("enablehere").addEventListener("click", enablehere);
        } else {
            var newbutton = document.createElement("button");
            newbutton.innerHTML = "Disable on this site";
            newbutton.id = "disablehere";
            document.body.appendChild(newbutton);
            document.getElementById("disablehere").addEventListener("click", disablehere);
        }
    });

    function disablehere() {
        chrome.storage.sync.get(['unallowedsites'], function (result) {
            var unallowedsites = result.unallowedsites
            if (!unallowedsites.includes(currentdomain)) {
                unallowedsites.push(currentdomain)
                chrome.storage.sync.set({ unallowedsites: unallowedsites }, function () {
                });
            }
        });
        var button = document.getElementById("disablehere")
        button.remove();
        var newbutton = document.createElement("button");
        newbutton.innerHTML = "Enable on this site"
        newbutton.id = "enablehere"
        document.body.appendChild(newbutton);
        document.getElementById("enablehere").addEventListener("click", enablehere);
        reload()
    }
    function enablehere() {
        chrome.storage.sync.get(['unallowedsites'], function (result) {
            var unallowedsites = result.unallowedsites
            for (var i = 0; i < unallowedsites.length; i++) {
                if (unallowedsites[i] == currentdomain) {
                    unallowedsites.splice(i, 1);
                }
            }
            chrome.storage.sync.set({ unallowedsites: unallowedsites }, function () {
            });
        });
        var button = document.getElementById("enablehere")
        button.remove();
        var newbutton = document.createElement("button");
        newbutton.innerHTML = "Disable on this site";
        newbutton.id = "disablehere";
        document.body.appendChild(newbutton);
        document.getElementById("disablehere").addEventListener("click", disablehere);
        reload()
    }

    function opensettings() {
        window.open("chrome-extension://cdciejeppgifebehekcmnpacpolplnjd/settings.html")
    }

    function reload() {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.update(tabs[0].id, { url: tabs[0].url });
        });
    }
})
