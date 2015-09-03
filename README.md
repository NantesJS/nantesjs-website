# NantesJS.org

This is the source of the [nantesjs.org](http://nantesjs.org) website.

Fork it to propose enhancements, as it is in a `gh-pages` branch, you can show the result of your version to anyone via URLs formed like this:

    http://{Your_GitHub_Username}.github.com/nantesjs-website/

The version on this repository can then be tested on [nantesjs.github.com/nantesjs-website](http://nantesjs.github.com/nantesjs-website/).

For anything but little fixes, please propose your modifications on the mailing list before sending a `Pull Request` so all the community can agree on it: [groups.google.com/group/nantesjs](http://groups.google.com/group/nantesjs/)

Note that any updates done to this website will available under the license given bellow.

## Installation for development

```shell
cd /home/your_user/your_workspace
git clone ...
cd nantesjs-website
[sudo] npm install gulp -g
[sudo] npm install
gulp
```

That's it.

## Deploy on gh-pages

Use gulp-deploy for deployment on the gh-pages. Just a personal test (use your own way).

```shell
cd /home/your_user/your_workspace/nantesjs-website
git checkout gh-pages
gulp deploy
```

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
