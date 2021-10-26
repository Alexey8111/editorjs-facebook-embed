![](https://badgen.net/badge/Editor.js/v2.0/blue)

# Facebook Embed Tool

An [Editor.js](https://editorjs.io) plugin to embed Facebook Video.

Simply copy and paste Facebook video URL to embed.

![](assets/demo.gif)

## Installation

### Install via NPM

Get the package

```shell
npm i editorjs-Facebook-embed
```

Include module at your application

```javascript
const FacebookEmbed = require("editorjs-Facebook-embed");
```

### Download to your project's source dir

1. Download folder `dist` from repository
2. Add `dist/main.js` file to your page.

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
var editor = EditorJS({
  ...

  tools: {
    ...
    FacebookEmbed: FacebookEmbed,
  }

  ...
});
```

## Config Params

This tool has no config params

## Output data

| Field | Type     | Description |
| ----- | -------- | ----------- |
| url   | `string` | video url   |

```json
{
  "type": "FacebookEmbed",
  "data": {
    "url": "https://www.Facebook.com/watch?v=L229QDxDakU"
  }
}
```
