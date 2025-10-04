function getStrings() {
    const strings = [
        'addEventListener',
        'DOMContentLoaded',
        'getElementById',
        'generateBtn',
        'result',
        'click',
        'innerText',
        'Please enter a valid Robux amount.',
        'local',
        'get',
        'fakeRobux',
        'storage',
        'set',
        'tabs',
        'sendMessage',
        'updateFakeRobux',
        '\n            You added <strong>',
        '</strong> Robux.\n          '
    ];
    getStrings = function() {
        return strings;
    };
    return getStrings();
}

const mainFunction = decodeFunction;

function decodeFunction(index, param) {
    const strings = getStrings();
    decodeFunction = function(a, b) {
        a = a - 362;
        let result = strings[a];
        return result;
    };
    return decodeFunction(index, param);
}

document[mainFunction('addEventListener')](mainFunction('DOMContentLoaded'), () => {
    const decode = mainFunction;
    const generateBtn = document[decode('getElementById')](decode('generateBtn'));
    const resultDiv = document[decode('getElementById')](decode('result'));
    
    generateBtn[decode('addEventListener')](decode('click'), () => {
        const decodeInner = decode;
        const robuxAmount = parseInt(document['getElementById']('robuxAmount')['value']);
        
        if (!robuxAmount || isNaN(robuxAmount) || robuxAmount <= 0) {
            resultDiv[decodeInner('innerText')] = decodeInner('Please enter a valid Robux amount.');
            return;
        }
        
        chrome['storage'][decodeInner('local')][decodeInner('get')](decodeInner('fakeRobux'), (result) => {
            const decodeResult = decodeInner;
            const currentRobux = parseInt(result[decodeResult('fakeRobux')]) || 0;
            const newTotal = currentRobux + robuxAmount;
            
            chrome[decodeResult('storage')][decodeResult('local')][decodeResult('set')]({
                'fakeRobux': newTotal,
                'hasAnimated': false
            });
            
            chrome[decodeResult('tabs')]['query']({
                'active': true,
                'currentWindow': true
            }, (tabs) => {
                const decodeTabs = decodeResult;
                chrome['tabs'][decodeTabs('sendMessage')](tabs[0]['id'], {
                    'type': decodeTabs('updateFakeRobux'),
                    'amount': newTotal
                });
            });
            
            resultDiv['innerHTML'] = decodeResult('You added <strong>') + robuxAmount + decodeResult('</strong> Robux.');
        });
    });
});
