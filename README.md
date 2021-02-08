[![Build Status](https://travis-ci.org/NantesJS/nantesjs-website.svg?branch=master)](https://travis-ci.org/NantesJS/nantesjs-website)
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors)
[![Coverage Status](https://coveralls.io/repos/github/NantesJS/nantesjs-website/badge.svg?branch=master)](https://coveralls.io/github/NantesJs/nantesjs-website?branch=master)

# NantesJS.org

This is the source of the [nantesjs.org](http://nantesjs.org) website.

Fork it to propose enhancements, as it is in a `master` branch, you can show the result of your version to anyone via URLs formed like this:

    http://{Your_GitHub_Username}.github.com/nantesjs-website/

For anything but little fixes, send a `Pull Request` so all the community can agree on it.

Note that any updates done to this website will available under the license given below.

## Installation for development

First you will need [yarn](https://yarnpkg.com/en/docs/install) installed on your machine.

Then simply run :

```bash
yarn start
```

## Add a new meetup

To add a new meetup, you need to create a `.md` file in `datas/meetups/`.

The suggested method is to duplicate the last meetup file and to fill in the fields with the new data.

Don't forget to set the `status` of the previous meetup to `done` for it to be displayed in the previous section.

You could also use [nantesjs-organizer](https://github.com/NantesJS/nantesjs-organizer) to generate the markdown file.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://charlyx.dev"><img src="https://avatars2.githubusercontent.com/u/481446?v=4" width="100px;" alt="Charles-Henri GUERIN"/><br /><sub><b>Charles-Henri GUERIN</b></sub></a><br /><a href="https://github.com/NantesJS/nantesjs-website/commits?author=charlyx" title="Code">💻</a> <a href="#eventOrganizing-charlyx" title="Event Organizing">📋</a> <a href="#maintenance-charlyx" title="Maintenance">🚧</a> <a href="#projectManagement-charlyx" title="Project Management">📆</a></td><td align="center"><a href="https://twitter.com/YvonnickFrin"><img src="https://avatars0.githubusercontent.com/u/13099512?v=4" width="100px;" alt="Yvonnick FRIN"/><br /><sub><b>Yvonnick FRIN</b></sub></a><br /><a href="https://github.com/NantesJS/nantesjs-website/commits?author=frinyvonnick" title="Code">💻</a> <a href="#eventOrganizing-frinyvonnick" title="Event Organizing">📋</a> <a href="#maintenance-frinyvonnick" title="Maintenance">🚧</a> <a href="#projectManagement-frinyvonnick" title="Project Management">📆</a></td><td align="center"><a href="http://byteclub.fr"><img src="https://avatars2.githubusercontent.com/u/639759?v=4" width="100px;" alt="Thomas Moyse"/><br /><sub><b>Thomas Moyse</b></sub></a><br /><a href="#eventOrganizing-t8g" title="Event Organizing">📋</a> <a href="#maintenance-t8g" title="Maintenance">🚧</a> <a href="#projectManagement-t8g" title="Project Management">📆</a></td><td align="center"><a href="https://github.com/greizgh"><img src="https://avatars1.githubusercontent.com/u/1313624?v=4" width="100px;" alt="greizgh"/><br /><sub><b>greizgh</b></sub></a><br /><a href="https://github.com/NantesJS/nantesjs-website/commits?author=greizgh" title="Code">💻</a></td><td align="center"><a href="https://jtanguy.me"><img src="https://avatars2.githubusercontent.com/u/551107?v=4" width="100px;" alt="Julien Tanguy"/><br /><sub><b>Julien Tanguy</b></sub></a><br /><a href="https://github.com/NantesJS/nantesjs-website/commits?author=jtanguy" title="Code">💻</a> <a href="#video-jtanguy" title="Videos">📹</a></td><td align="center"><a href="https://github.com/ripoul"><img src="https://avatars3.githubusercontent.com/u/23215341?v=4" width="100px;" alt="Jules"/><br /><sub><b>Jules</b></sub></a><br /><a href="https://github.com/NantesJS/nantesjs-website/commits?author=ripoul" title="Code">💻</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
