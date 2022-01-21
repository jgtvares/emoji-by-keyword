const emojis = require('emojis-list');
const keywords = require('emojis-keywords');
const fs = require('fs');
const { indexOf } = require('emojis-list');


function Merge() {
    const merged = [];

    for (let e = 0; e < emojis.length; e++) {
        for (let k = 0; k < emojis.length; k++) {
            const emoji = emojis[e];
            const keyword = keywords[k];
            merged.push({ [keyword]: emoji } );
        }
    }

    return merged;
}

function MergeAndSearchByKeyword(keyword) {
    const keywordIndex = keywords.indexOf(keyword);
    if (keywordIndex !== -1) {
        console.log('Keyword index:', keywordIndex);
        const emoji = emojis[keywordIndex];
        console.log('Emoji index:', emojis.indexOf(emoji));
        return {
            emoji,
            keyword
        }
    }

    return null;
}

function GenerateMergeJSON() {
    const merge = Merge();
    fs.writeFileSync('./emojis.json', JSON.stringify(merge), { encoding: 'utf-8' });
}


module.exports = {
    GenerateMergeJSON,
    Merge,
    MergeAndSearchByKeyword,
};
