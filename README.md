# Simple Statamic

Please read the Development process [workflow wiki](https://github.com/SemanticSugar/dotcom/wiki/Development-Process) for details on how to properly submit PRs.

Built on [Statamic V.2](https://docs.statamic.com/)

## Setup Your Local Environment
Install [Homebrew](http://brew.sh/)

Clone the repo
```
brew update
```
Install PHP 7.2
```
brew install php@7.2
```
Install [Valet](https://laravel.com/docs/5.2/valet#installation) with [Composer](https://getcomposer.org/download/) (Make sure the ~/.composer/vendor/bin directory is in your system's "PATH")
```
composer global require laravel/valet
```
Run the Valet config command
```
valet install
```
Either ping *.test or set your local dev extension to anything using the following (replace 'dev' with your extension):
```
valet domain dev
```
Set valet to monitor your sites directory
```
cd /path/to/sites/directory
valet park
```
Rename sample.env to .env

The local site should be running now on [http://dotcom.dev](http://dotcom.dev)

Valet will automatically start each time your machine boots

## Install Dependencies

[nodejs](https://nodejs.org/en/download/)

```
brew install node
```

[grunt cli](http://gruntjs.com/getting-started)

```
npm install -g grunt-cli
```

Install dev dependencies

```
cd /site/themes/adroll
npm install
```

## Commands for Development

(run from cd /site/themes/adroll)

Watch command for SASS compiling

```
grunt watch
```

Package up/compress/uglify/minify js, SASS, etc.

```
grunt compress
```

### Notes

* [9/13/18] - Homebrew updated their PHP install method
* [6/15/16] - Further notes have been moved to the wiki
* [6/9/16] - If you run a dedicated local branch, the .env file will delete itself when switching branches, looking into a fix for that
* [8/29/16] - The .env file issue has been fixed