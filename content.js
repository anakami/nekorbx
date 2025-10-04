function getStrings() {
    const strings = [
        'getElementById',
        'innerText',
        'replace',
        'storage',
        'set',
        'toLocaleString',
        'runtime',
        'onMessage',
        'addListener',
        'amount',
        'local',
        'log',
        'location',
        'pathname',
        'querySelector',
        'Element "',
        'get',
        'fakeRobux',
        'hasAnimated',
        'nav-robux-amount',
        '/transactions',
        '.balance-label.icon-robux-container > span',
        'then',
        'from',
        'childNodes',
        'nodeType',
        'trim',
        'textContent'
    ];
    getStrings = function() {
        return strings;
    };
    return getStrings();
}

const mainFunction = decodeFunction;
let animationRunning = false;

function animateRobux(targetAmount) {
    const decode = decodeFunction;
    const robuxElement = document[decode('getElementById')]('nav-robux-amount');
    if (!robuxElement) return;
    
    let currentAmount = 0;
    const currentText = robuxElement[decode('innerText')][decode('replace')](/,/g, '');
    const parsedAmount = parseInt(currentText);
    
    if (!isNaN(parsedAmount) && parsedAmount < targetAmount) {
        currentAmount = parsedAmount;
    }
    
    animationRunning = true;
    chrome[decode('runtime')]['local'][decode('set')]({
        'hasAnimated': true
    });
    
    const animate = () => {
        const decodeInner = decodeFunction;
        if (currentAmount >= targetAmount || !animationRunning) {
            robuxElement[decodeInner('innerText')] = targetAmount[decodeInner('toLocaleString')]();
            animationRunning = false;
            return;
        }
        
        const difference = targetAmount - currentAmount;
        const increment = Math.min(difference, Math.floor(Math.random() * 4000) + 500);
        currentAmount += increment;
        robuxElement[decodeInner('innerText')] = currentAmount[decodeInner('toLocaleString')]();
        
        const delay = Math.random() * 800 + 200;
        setTimeout(animate, delay);
    };
    
    animate();
}

chrome[mainFunction('runtime')][mainFunction('onMessage')][mainFunction('addListener')]((message, sender, sendResponse) => {
    const decode = mainFunction;
    if (message['type'] === 'updateFakeRobux') {
        const amount = parseInt(message[decode('amount')]);
        if (!isNaN(amount)) {
            chrome[decode('storage')][decode('local')][decode('set')]({
                'fakeRobux': amount,
                'hasAnimated': false
            });
            animateRobux(amount);
        }
    }
});

console[mainFunction('log')]('RBXTools content.js loaded on', window[mainFunction('location')][mainFunction('pathname')]);

function waitForElement(selector, timeout = 10000) {
    return new Promise((resolve, reject) => {
        const interval = 100;
        let elapsed = 0;
        
        const checkElement = setInterval(() => {
            const decode = decodeFunction;
            const element = document[decode('querySelector')](selector);
            if (element) {
                clearInterval(checkElement);
                resolve(element);
            }
            elapsed += interval;
            if (elapsed >= timeout) {
                clearInterval(checkElement);
                reject(decode('Element "') + selector + '" not found in time');
            }
        }, interval);
    });
}

function decodeFunction(index, param) {
    const strings = getStrings();
    decodeFunction = function(a, b) {
        a = a - 286;
        let result = strings[a];
        return result;
    };
    return decodeFunction(index, param);
}

setTimeout(function() {
    const decode = mainFunction;
    chrome[decode('storage')]['local'][decode('get')]([decode('fakeRobux'), decode('hasAnimated')], (result) => {
        const decodeInner = decode;
        const fakeRobux = parseInt(result[decodeInner('fakeRobux')]);
        const hasAnimated = result[decodeInner('hasAnimated')];
        const robuxElement = document[decodeInner('getElementById')](decodeInner('nav-robux-amount'));
        
        if (!robuxElement || isNaN(fakeRobux)) return;
        
        if (hasAnimated) {
            robuxElement['innerText'] = fakeRobux['toLocaleString']();
        } else {
            animateRobux(fakeRobux);
        }
    });
}, 500);

if (window['location'][mainFunction('pathname')] === mainFunction('/transactions')) {
    setTimeout(function() {
        const decode = mainFunction;
        chrome['storage'][decode('local')][decode('get')]([decode('fakeRobux'), 'hasAnimated'], (result) => {
            const decodeInner = decode;
            const fakeRobux = parseInt(result[decodeInner('fakeRobux')]);
            const hasAnimated = result[decodeInner('hasAnimated')];
            
            waitForElement(decodeInner('.balance-label.icon-robux-container > span'))[decodeInner('then')]((element) => {
                const decodeElement = decodeInner;
                const textNode = Array[decodeElement('from')](element[decodeElement('childNodes')])['find'](node => 
                    node[decodeElement('nodeType')] === Node['TEXT_NODE'] && 
                    node['textContent'][decodeElement('trim')]()['match'](/^\d+$/)
                );
                
                if (textNode) {
                    textNode[decodeElement('textContent')] = fakeRobux[decodeElement('toLocaleString')]();
                }
            });
        });
    }, 500);
}
