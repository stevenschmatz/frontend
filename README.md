optiMize Michigan Frontend
=========================

* This frontend is maintained as a series of `.jade` files in `src/jade/` which are compiled to `.html` files using `jade` before publishing on a server.

## Method 1 (using Grunt)
* Download the repo, and run `npm install` to install all needed dependencies
* Run `grunt jade` to compile the `.jade` files in `src/jade/` to the `html/` dir

## Method 2 (manually)
* To use, please first install `jade` globally with `npm install -g jade` or similar, then run `jade` on each `.jade` file in `src/jade/` with `jade src/jade/* -o html`
* The `.html` files will now be in `/`
