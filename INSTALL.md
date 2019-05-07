# Installing pHTML Schema

[pHTML Schema] runs in all Node environments, with special instructions for:

| [Node](#node) | [CLI](#phtml-cli) | [Eleventy](#eleventy) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- |

## Node

Add [pHTML Schema] to your project:

```bash
npm install @phtmlorg/schema --save-dev
```

Use [pHTML Schema] to process your HTML:

```js
const phtmlSchema = require('@phtmlorg/schema')

phtmlSchema.process(YOUR_HTML /*, processOptions, pluginOptions */)
```

Or use it as a [pHTML] plugin:

```js
const phtml = require('phtml')
const phtmlSchema = require('@phtmlorg/schema')

phtml([
  phtmlSchema(/* pluginOptions */)
]).process(YOUR_HTML /*, processOptions */)
```

## CLI

Transform HTML files directly from the command line:

```bash
npx phtml source.html output.html -p @phtmlorg/schema
```

Alternatively, add [pHTML Schema] to your `phtml.config.js` configuration file:

```js
module.exports = {
  plugins: [
    ['@phtmlorg/schema', /* pluginOptions */]
  ]
}
```

## Eleventy

Add [pHTML Eleventy] and [pHTML Schema] to your Eleventy project:

```sh
npm install @phtmlorg/schema @phtml/11ty --save-dev
```

Use [pHTML Eleventy] and [pHTML Schema] in your Eleventy configuration:

```js
const phtml11ty = require('@phtml/11ty')
const phtmlSchema = require('@phtmlorg/schema')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(phtml11ty, {
    use: [
      phtmlSchema(/* pluginOptions */)
    ]
  })
}
```

## Gulp

Add [Gulp pHTML] and [pHTML Schema] to your project:

```bash
npm install @phtmlorg/schema gulp-phtml --save-dev
```

Use [Gulp pHTML] and [pHTML Schema] in your Gulpfile:

```js
const gulp = require('gulp')
const gulpPhtml = require('gulp-phtml')
const phtmlSchema = require('@phtmlorg/schema')

gulp.task('html',
  () => gulp.src('./src/*.html').pipe(
    gulpPhtml({
      plugins: [
        phtmlSchema(/* pluginOptions */)
      ]
    })
  ).pipe(
    gulp.dest('dist')
  )
)
```

## Grunt

Add [Grunt pHTML] to your project:

```bash
npm install grunt-phtml --save-dev
```

Use [Grunt pHTML] and [pHTML Schema] in your Gruntfile:

```js
const phtmlSchema = require('@phtmlorg/schema')

grunt.loadNpmTasks('grunt-phtml')

grunt.initConfig({
  phtml: {
    options: {
      plugins: [
        phtmlSchema(/* pluginOptions */)
      ]
    },
    dist: {
      files: [{
        expand: true,
        src: 'src/*.html',
        dest: 'dest'
      }]
    }
  }
})
```

[Gulp pHTML]: https://github.com/phtmlorg/gulp-phtml
[Grunt pHTML]: https://github.com/phtmlorg/grunt-phtml
[pHTML]: https://github.com/phtmlorg/phtml
[pHTML Eleventy]: https://github.com/phtmlorg/phtml-11ty
[pHTML Schema]: https://github.com/phtmlorg/phtml-schema
