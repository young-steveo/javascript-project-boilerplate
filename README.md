[UNMAINTAINED]

# Javascript Project Boilerplate
A template for Javascript projects intended to kick-start productivity.

## Scaffolding
Javascript Project Boilerplate provides a smart folder structure and some preconfigured files:

### Folders
 * `/dist` - Contains compiled and minified versions of your sweet lib.
 * `/docs` - A readme.md file is fine for many projects, but if you have any extensive documentation, it goes here.
 * `/examples` - Self explanitory, really.
 * `/lib` - A place for your bundled third party libs and submodules.
 * `/src` - this is where your project code lives before it is compiled in the `dist` folder.
 * `/test` - No self-respecting open source project that is more complex than a gist should be distributed without unit tests.

### Files
 * `.gitignore` - npm_modules is already blacklisted.
 * `package.json` - Loads the devDependencies for Gruntjs, and contains placeholders for all of your important lib info.
 * `jshint.json` - Use this file to configre the jshint task.  Right now it is somewhat strict; leave it as-is if you want to write watertight javascript.

## Setup
You'll need nodejs to take full advantage of this project.  Clone the repo, run `npm install`, then
run `grunt` (you also need to run `npm install -g grunt-cli` if you have never done so before.) Grunt
should report failures and a bunch of messages indicating what parts of the project you should
update before you continue.

## Gruntjs
[Gruntjs](http://gruntjs.com/) is preconfigured and ready to rock.  It will lint, concat, minify,
run tests...  You name it.  Grunt is awesome.  The gruntfile is already setup to automate a lot of
things for you already, including running any jasmine tests you write.  Drop your tests into
`./test/spec/`.  Name the test files `*.spec.js`.

### Boilerplate Task
Included in the default grunt task is the `'boilerplate-check'` task.  This will ensure that you
replace all of the default boilerplate data in the `package.json` file with your project's data.
You can delete it once grunt starts reporting green.
