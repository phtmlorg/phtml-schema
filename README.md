# pHTML Schema [<img src="https://phtmlorg.github.io/phtml/logo.svg" alt="pHTML" width="90" height="90" align="right">][phtml]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[pHTML Schema] lets you write shorter [schema.org] microdata in HTML. Search
engine operators like Google, Microsoft and Yahoo! will rely on this
markup to improve search results.

```html
<div itemtype="Product">
  <span itemprop="brand">ACME</span> <span itemprop="name">Executive Anvil</span>
    <img itemprop="image" src="anvil_executive.jpg">

    <span itemprop="aggregateRating" itemtype="AggregateRating">
    Average rating: <span itemprop="ratingValue">4.4</span>, based on
    <span itemprop="ratingCount">89</span> reviews
  </span>

  <span itemprop="offers" itemtype="AggregateOffer">
    from $<span itemprop="lowPrice">119.99</span> to
    $<span itemprop="highPrice">199.99</span>
    <meta itemprop="priceCurrency" content="USD">
  </span>
</div>

<!-- becomes -->

<div itemtype="https://schema.org/Product" itemscope>
  <span itemprop="brand">ACME</span> <span itemprop="name">Executive Anvil</span>
    <img itemprop="image" src="anvil_executive.jpg">

    <span itemprop="aggregateRating" itemtype="https://schema.org/AggregateRating" itemscope>
    Average rating: <span itemprop="ratingValue">4.4</span>, based on
    <span itemprop="ratingCount">89</span> reviews
  </span>

  <span itemprop="offers" itemtype="https://schema.org/AggregateOffer" itemscope>
    from $<span itemprop="lowPrice">119.99</span> to
    $<span itemprop="highPrice">199.99</span>
    <meta itemprop="priceCurrency" content="USD">
  </span>
</div>
```

## Usage

Add [pHTML Schema] to your project:

```bash
npm install @phtml/schema --save-dev
```

Use [pHTML Schema] to process your HTML:

```js
const phtmlSchema = require('@phtml/schema');

phtmlSchema.process(YOUR_HTML /*, processOptions, pluginOptions */);
```

Or use it as a [pHTML] plugin:

```js
const phtml = require('phtml');
const phtmlSchema = require('@phtml/schema');

phtml([
  phtmlSchema(/* pluginOptions */)
]).process(YOUR_HTML /*, processOptions */);
```

[pHTML Schema] runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [pHTML CLI](INSTALL.md#phtml-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- | --- |

## Options

### schema

The `schema` option determines the URL used to prefix your microdata vocabulary
(`itemtype`).

```jsx
phtmlSchema({ schema: 'http://schema.org/' })
```

```html
<!-- becomes -->

<div itemtype="http://schema.org/Product" itemscope>
  <span itemprop="brand">ACME</span> <span itemprop="name">Executive Anvil</span>
    <img itemprop="image" src="anvil_executive.jpg">

    <span itemprop="aggregateRating" itemtype="http://schema.org/AggregateRating" itemscope>
    Average rating: <span itemprop="ratingValue">4.4</span>, based on
    <span itemprop="ratingCount">89</span> reviews
  </span>

  <span itemprop="offers" itemtype="http://schema.org/AggregateOffer" itemscope>
    from $<span itemprop="lowPrice">119.99</span> to
    $<span itemprop="highPrice">199.99</span>
    <meta itemprop="priceCurrency" content="USD">
  </span>
</div>
```

The `schema` option also accepts an object of individual URLs for each
vocabulary. The `*` key can be used as a default.

```js
phtmlSchema({
  schema: {
    '*': 'http://schema.org/',
    AggregateOffer: 'https://schema.org/'
  }
});
```

```html
<!-- becomes -->

<div itemtype="http://schema.org/Product" itemscope>
  <span itemprop="brand">ACME</span> <span itemprop="name">Executive Anvil</span>
    <img itemprop="image" src="anvil_executive.jpg">

    <span itemprop="aggregateRating" itemtype="http://schema.org/AggregateRating" itemscope>
    Average rating: <span itemprop="ratingValue">4.4</span>, based on
    <span itemprop="ratingCount">89</span> reviews
  </span>

  <span itemprop="offers" itemtype="https://schema.org/AggregateOffer" itemscope>
    from $<span itemprop="lowPrice">119.99</span> to
    $<span itemprop="highPrice">199.99</span>
    <meta itemprop="priceCurrency" content="USD">
  </span>
</div>
```

[cli-img]: https://img.shields.io/travis/phtmlorg/phtml-schema.svg
[cli-url]: https://travis-ci.org/phtmlorg/phtml-schema
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/phtmlorg/phtml
[npm-img]: https://img.shields.io/npm/v/@phtml/schema.svg
[npm-url]: https://www.npmjs.com/package/@phtml/schema

[pHTML]: https://github.com/phtmlorg/phtml
[pHTML Schema]: https://github.com/phtmlorg/phtml-schema
[schema.org]: https://schema.org/
