> This package will help you extract urls from text

## Install

```
$ npm install url-extractor
$ yarn add url-extractor
```

## Usage

```javascript
const extractUrlsFromString = require('url-extractor');

const text = 'Lorem ipsum dolor sit amet, https://example.com consectetur adipiscing elit, sed do eiusmod tempor https://google.com incididunt ut labore et dolore magna aliqua.';

const urls = extractUrlsFromString(text);
console.log(urls); // ['https://example.com', 'https://google.com']


## License

MIT © [Dhwaj Gupta](https://github.com/DhwajGupta)
```
