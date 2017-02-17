/**
 * script used to migrate the previously retrieved data into jekyll collection files
 * It assumes there is a `data.json` as its sibling
 */
var meetups = require("./data.json");
const fs = require("fs");
const yaml = require("yamljs")

meetups.forEach(meetup => {
    fs.writeFile(
        `./src/_meetups/${meetup.title.toLowerCase().replace(" ", "-")}.md`,
        `---
status: done
${yaml.stringify(meetup, 10)}
---`,
        console.log.bind(console)
    )
});

