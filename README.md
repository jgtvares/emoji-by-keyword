# emoji-by-keyword
If you want to render emojis in your app using keywords, this lib is for you! This lib is based on Apple emojis!

## Installing
```bash
npm install @jgtvares/emoji-by-keyword
```

## How to Use
```javascript
const { GetEmojiByKeyword } = require("@jgtvares/emoji-by-keyword");

const emoji = GetEmojiByKeyword(':joy:');

console.log(emoji);
// Output: { emoji: '😂', keyword: ':joy:' }
```

## How it works
With a list of emojis and a list of keywords, both the same size, the lib checks if the given keyword exists in keywords list, if the keyword is found it searches for an emoji at the correspondent index.

*It might not work with all keywords. The lists were manually synced to get the most emojis, but it is not perfect! Feel free to help me improve it!*

## License
MIT

## Developed by
- [jgtvares]('https://github.com/jgtvares')
