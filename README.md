# NantesJS.org

This is the source of the [nantesjs.org](http://nantesjs.org) website.

Fork it to propose enhancements, as it is in a `master` branch, you can show the result of your version to anyone via URLs formed like this:

    http://{Your_GitHub_Username}.github.com/nantesjs-website/

The version on this repository can then be tested on [nantesjs.github.com/nantesjs-website](http://nantesjs.github.com/nantesjs-website/).

For anything but little fixes, please propose your modifications on the mailing list before sending a `Pull Request` so all the community can agree on it: [groups.google.com/group/nantesjs](http://groups.google.com/group/nantesjs/)

Note that any updates done to this website will available under the license given bellow.

## Installation for development

```shell
cd /home/your_user/your_workspace
git clone {YOUR_NANTESJS_FORK}
cd nantesjs-website
git checkout master
[sudo] npm install gulp -g
[sudo] npm install
```

By common habits, I use commonly for development an apache vhost (you will find one in `doc/apache/vhost` file).
If you prefer working with a vhost, you must change the browser-sync `init` option with the commented one in the `gulpfile.js`.

Finally,

```
gulp
```

:metal: That's it. Up and running !

Disclaimer: You mustn't work on `gh-pages` branch !
Make your change only on `master` branch, build and manual test under control of `browser-sync` tool then deploy.

## Deploy on gh-pages

Use [gulp-gh-pages](https://www.npmjs.com/package/gulp-gh-pages) for deployment on the `github pages`.

The `gulp deploy` run the `build` task before committing and pushing to gh-pages remote branch.

Test and verify your code locally:

```shell
cd nantesjs-website
git checkout master
bump version in package.json
git commit -m "..."

gulp deploy
```

:metal: That's it. Test online on `http://{YOUR_GITHUB_USERNAME}.github.com/nantesjs-website/`

## Notes

* 2 commented buttons in the `meetup-next` div about doodle/framadate and vote. And not CSS styled.
* A sponsor `ul` list commented in the footer. With some images in assets folder. And not CSS styled.

## Use

* [sass](http://sass-lang.com/)
* [gulp](http://gulpjs.com/)
* [gulp-notify](https://www.npmjs.com/package/gulp-notify)
* [gulp-plumber](https://www.npmjs.com/package/gulp-plumber)
* [gulp-rename](https://www.npmjs.com/package/gulp-rename)
* [gulp-size](https://www.npmjs.com/package/gulp-size)
* [browser-sync](http://www.browsersync.io/)

### Assets optimization

* [gulp-sass](https://www.npmjs.com/package/gulp-sass)
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
* [gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css)
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)

### Image optimization

* [imagemin-jpegoptim](https://www.npmjs.com/package/imagemin-jpegoptim)
* [imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant)
* [imagemin-optipng](https://www.npmjs.com/package/imagemin-optipng)
* [imagemin-svgo](https://www.npmjs.com/package/imagemin-svgo)

### Deployment

* [gulp-gh-pages](https://www.npmjs.com/package/gulp-gh-pages)

## Todo

* [x] Start a todo list
* [x] Do not leave an empty todolist
* [ ] Talk better about :beers:, :cocktail:, :pizza: and :doughnut: in the NantesJS homepage
* [ ] Work with Eventbrite API

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
