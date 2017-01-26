# NantesJS.org

This is the source of the [nantesjs.org](http://nantesjs.org) website.

Fork it to propose enhancements, as it is in a `master` branch, you can show the result of your version to anyone via URLs formed like this:

    http://{Your_GitHub_Username}.github.com/nantesjs-website/

The version on this repository can then be tested on [nantesjs.github.com/nantesjs-website](http://nantesjs.github.com/nantesjs-website/).

For anything but little fixes, please propose your modifications on the mailing list before sending a `Pull Request` so all the community can agree on it: [groups.google.com/group/nantesjs](http://groups.google.com/group/nantesjs/)

Note that any updates done to this website will available under the license given bellow.

## Installation for development

First you will need `bundler` installed on your machine

    gem install bundler

Then simply run :

    bundle install

And finally, once it's done

    bundle exec jekyll serve


## Add a new meetup

To add a new meetup, you need to create a `.md` file in `src/_meetups/`.

The suggested method is to duplicate the last meetup file and to fill in the fields with the new data.

Don't forget to set the `status` of the previous meetup to `done` for it to be displayed in the previous section.


## Todo

* [x] Start a todo list
* [x] Do not leave an empty todolist
* [ ] Talk better about :beers:, :cocktail:, :pizza: and :doughnut: in the NantesJS homepage
* [ ] Work with Eventbrite API
* [ ] Vote system for next lightning talks

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
