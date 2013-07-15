/*
 * GET home page.
 */
var loremIpsum = require('lorem-ipsum'),
    maxValue = 7;

exports.index = function (req, res) {
    res.render('index');
};

exports.seminars = function (req, res) {
    var items = [];
    for (var i = 0; i < maxValue; i++) {
        var fullText = loremIpsum({
            count: 5,
            units: 'sentences',
            sentenceLowerBound: 6,
            sentenceUpperBound: 10,
            format: 'plain'
        });
        items.push({
            id: i,
            title: loremIpsum({
                count: 3,
                units: 'words',
                format: 'plain'
            }),
            short: fullText.substr(0, 70) + '...',
            text: fullText,
            link: '#',
            points: Math.round(Math.random() * 300) + 100,
            priority: 'weight' + Math.round(Math.random() * 3)
        });
    }
    res.json({
        items: items
    });
};

