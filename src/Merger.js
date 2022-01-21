const emojis = require('./lists/Emojis');
const keywords = require('./lists/Keywords');
const fs = require('fs');


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
        const emoji = emojis[keywordIndex];
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
