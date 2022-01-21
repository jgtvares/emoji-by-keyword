const { MergeAndSearchByKeyword } = require("./Merger")



function GetEmojiByKeyword(keyword) {
    const emoji = MergeAndSearchByKeyword(keyword);
    if (emoji) return emoji;
    return null;
}


module.exports = {
    GetEmojiByKeyword,
};
