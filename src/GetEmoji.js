const { MergeAndSearchByKeyword } = require("./Merger")



function GetEmojiByKeyword(keyword) {
    const emoji = MergeAndSearchByKeyword(keyword);
    if (emoji) return emoji;
    throw new Error('Emoji not found!');
}


module.exports = {
    GetEmojiByKeyword,
};
