const fs = require('fs');
let fname = __dirname + '/about.md';
let fdata = fs.readFileSync(fname, 'utf8');
//console.log(fdata.split(/\r\n|\r|\n/).length);
console.log("Data in eventData.json: ");
let events = require('./eventData.json');
console.log(events[0].name + ": " + events[0].dates + "\n" + events[1].name + ": " + events[1].dates + "\n" + events[2].name + ": " + events[2].dates + "\n");

const matter = require('gray-matter');
let metaAndContent = matter(fdata); // gives and object with content and data components
console.log(metaAndContent.data.title);

let commonmark = require('commonmark');
let reader = new commonmark.Parser();
let writer = new commonmark.HtmlRenderer();
fname = __dirname + '/about.html';
let parsed = reader.parse(fdata);
let result = writer.render(parsed);
console.log(result);

const nunjucks = require('nunjucks');

// Tells nunjucks where to look for templates and set any options
nunjucks.configure('views', { autoescape: true });
let outString = nunjucks.render('base.njk', { mainContent: result, title: metaAndContent.data.title, author: metaAndContent.data.author, description: metaAndContent.data.description });
fs.writeFileSync('about.html', outString);
console.log("Wrote file");