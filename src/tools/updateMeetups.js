const yaml = require("js-yaml")
const fs = require("fs")
const moment = require("moment")

const baseDir = "datas/meetups/"

// Get document
const files = fs
  .readdirSync(baseDir)
  .map(fileName => `${ baseDir }/${ fileName }`)

for (const fileName of files) {
// Parse yaml into json
  const jsonFile = yaml.safeLoad(fs.readFileSync(fileName, "utf8"))
  // If status is not 'done' and date is after today => set it to 'done'
  if (jsonFile.status !== "done") {
    const date = moment(jsonFile.date, "dd/MM/yyyy")
    if (moment().isAfter(date)) {
      jsonFile.status = "done"
    }
    // Re-convert in yaml and override previous file
    const yamlFile = yaml.safeDump(jsonFile)
    fs.writeFileSync(`${ baseDir }/${ fileName }`, yamlFile)
  }
}
