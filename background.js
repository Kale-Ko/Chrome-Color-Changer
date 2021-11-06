/**
    @license
    MIT License
    Copyright (c) 2021 Kale Ko
    See https://kaleko.ga/license.txt
*/

chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ backgroundcolor: "#bf7c00" }, function () {
        chrome.storage.sync.set({ backgroundchangerenabled: "true" }, function () {
            chrome.storage.sync.set({ textcolor: "#00ff95" }, function () {
                chrome.storage.sync.set({ textchangerenabled: "true" }, function () {
                    chrome.storage.sync.set({ unallowedsites: [] }, function () { })
                })
            })
        })
    })
})