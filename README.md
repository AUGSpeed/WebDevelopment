**Michael LaRussa**

**NetID: fr5826**

# Homework 6

## Question 1

### (a)

Version number: v14.16.0.

### (b)

![1b](images/Capture1.PNG)

### (c)

```javascript

const fs = require('fs');
let fname = __dirname + '/about.md';
let fdata = fs.readFileSync(fname, 'utf8');
console.log("Number of lines in about.md:");
console.log(fdata.split(/\r\n|\r|\n/).length);

```

![1c](images/Capture2.PNG)

### (d)

JSON is more restrictive.

```json
[{
	"name": "Fallout Fridays",
	"dates": ["February 19th", "February 26th", "March 5th", "March 12th", "March 19th", "March 26th", "etc..."]
}, {
	"name": "Skyrim Saturdays",
	"dates": ["February 20th", "February 27th", "March 6th", "March 13th", "March 21st", "March 27th", "etc..."]
}, {
	"name": "Wabbajack training Wednesdays",
	"dates": ["The first Wednesday of every month."]
}]
```

### (e)

```javascript
console.log("Data in eventData.json: ");
let events = require('./eventData.json');
console.log(events[0].name + ": " + events[0].dates + "\n" + events[1].name + ": " + events[1].dates + "\n" + events[2].name + ": " + events[2].dates + "\n");
```

![1c](images/Capture3.PNG)

## Question 2

### (a)

I used npm init --yes to create my package.json.

### (b)

```json

{
  "name": "practice",
  "version": "1.0.0",
  "description": "",
  "main": "processIt.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "commonmark": "^0.29.3"
  }
}

```

### (c)

```javascript
let commonmark = require('commonmark');
let reader = new commonmark.Parser();
let writer = new commonmark.HtmlRenderer();
fname = __dirname + '/about.html';
let parsed = reader.parse(fdata);
let result = writer.render(parsed);
fdata = fs.writeFileSync(fname, result);
```

```html
<h1>California Video Game Modders Club</h1>
<h2>What is modding?</h2>
<p>Modding is the act of modifying the files of a video game to create something new with it.</p>
<h2>What games do we mod?</h2>
<p>The primary games we mod are large, open-ended games with easily read game-files, such as Bethesda Softworks' Skyrim, or Mojang's Minecraft.</p>
<h2>Why do we mod?</h2>
<p>Because it is a good learning experience, since not all of us can make a game from scratch!</p>
```

## Question 3

### (a)

### (b)

![3b](images/Capture4.PNG)

```javascript
const fs = require('fs');
let fname = __dirname + '/about.md';
let fdata = fs.readFileSync(fname, 'utf8');
//console.log(fdata.split(/\r\n|\r|\n/).length);
console.log("Data in eventData.json: ");
let events = require('./eventData.json');
console.log(events[0].name + ": " + events[0].dates + "\n" + events[1].name + ": " + events[1].dates + "\n" + events[2].name + ": " + events[2].dates + "\n");

const matter = require('gray-matter');
let metaAndContent = matter(fdata); // gives and object with content and data components
console.log(metaAndContent.data);

let commonmark = require('commonmark');
let reader = new commonmark.Parser();
let writer = new commonmark.HtmlRenderer();
fname = __dirname + '/about.html';
let parsed = reader.parse(fdata);
let result = writer.render(parsed);
fdata = fs.writeFileSync(fname, result);
```

## Question 4

### (a)

### (b)

### (c)

```javascript
const fs = require('fs');
let fname = __dirname + '/about.md';
let fdata = fs.readFileSync(fname, 'utf8');
//console.log(fdata.split(/\r\n|\r|\n/).length);
console.log("Data in eventData.json: ");
let events = require('./eventData.json');
console.log(events[0].name + ": " + events[0].dates + "\n" + events[1].name + ": " + events[1].dates + "\n" + events[2].name + ": " + events[2].dates + "\n");

const matter = require('gray-matter');
let metaAndContent = matter(fdata); // gives and object with content and data components\
console.log(metaAndContent.data.title);

let commonmark = require('commonmark');
let reader = new commonmark.Parser();
let writer = new commonmark.HtmlRenderer();
fname = __dirname + '/about.html';
let parsed = reader.parse(fdata);
let result = writer.render(parsed);

const nunjucks = require('nunjucks');

// Tells nunjucks where to look for templates and set any options
nunjucks.configure('views', { autoescape: true });
let outString = nunjucks.render('base.njk', { mainContent: result, title: metaAndContent.data.title, author: metaAndContent.data.author, description: metaAndContent.data.description });
fs.writeFileSync('about.html', outString);
console.log("Wrote file");
```

I really couldn't figure out how to make commonmark NOT read my YAML stuff, but it still is correctly implemented, I just have too much in my main.

![4c](images/Capture5.PNG)