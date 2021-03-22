const nunjucks = require('nunjucks');
const fs = require('fs');
let srcPrefix = __dirname + "/src";
let bldPrefix = __dirname + "/build";
let vwsPrefix = __dirname + "/views";
let allFiles = fs.readdirSync(srcPrefix);
nunjucks.configure('views', { autoescape: true });

console.log("Processing the src directory: ");
allFiles.forEach(function(srcName) {
    console.log('Reading ' + srcName);
    let fname = srcPrefix + '/' + srcName; // full name of the file to be read
    let fdata = fs.readFileSync(fname, 'utf8');
	let srcNunName = srcName.replace(".md", ".njk");
	let nunName = (vwsPrefix + '/' + srcNunName);
    let outString = nunjucks.render('views/index', fdata);
    // create the full name of the file to be written change extension to .html
    let outName = (bldPrefix + '/' + srcName).replace(".md", ".html");
    fs.writeFileSync(outName, outString);
});