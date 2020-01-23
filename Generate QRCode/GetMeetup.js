const express = require('express')
let fs = require('fs')
let yaml = require('js-yaml')
let cors = require('cors')
const port = 8001
const api = express()
api.use(cors())

const folder = '../datas/meetups/'

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function (err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function (filename) {
      fs.readFile(dirname + filename, 'utf-8', function (err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}

var data = [];
let titleMeetup;

readFiles(folder, function (filename, content) {
  data = [{ title: filename, content: content }]
  test()
}, function (err) {
  throw err;
});

const test = () => {
  data.map(item => {
    if (item.content.includes('status: next')) {
      titleMeetup = yaml.safeLoad(item.content)
    }
  })
}

api.get('/', (req, res) => {
  res.send({ title: titleMeetup.title })
  console.log(titleMeetup.title)
})

api.listen(port, function (err) {
  if (err) {
    throw err
  }
  console.log('Connected on port 8001')
})