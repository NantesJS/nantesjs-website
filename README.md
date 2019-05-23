[![Build Status](https://travis-ci.org/NantesJS/nantesjs-website.svg?branch=master)](https://travis-ci.org/NantesJS/nantesjs-website)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
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

## License

                DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                        Version 2, December 2004

    Copyright (C) 2010-2015 the NantesJS community <http://nantesjs.org>

    Everyone is permitted to copy and distribute verbatim or modified
    copies of this license document, and changing it is allowed as long
    as the name is changed.

                DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

    0. You just DO WHAT THE FUCK YOU WANT TO.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://charlyx.dev"><img src="https://avatars2.githubusercontent.com/u/481446?v=4" width="100px;" alt="Charles-Henri GUERIN"/><br /><sub><b>Charles-Henri GUERIN</b></sub></a><br /><a href="https://github.com/NantesJS/nantesjs-website/commits?author=charlyx" title="Code">💻</a> <a href="#eventOrganizing-charlyx" title="Event Organizing">📋</a> <a href="#maintenance-charlyx" title="Maintenance">🚧</a> <a href="#projectManagement-charlyx" title="Project Management">📆</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!