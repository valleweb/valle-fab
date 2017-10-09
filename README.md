# vsc-fab-button

> Awesome VSC material design: [Floating Action Button](https://material.io/guidelines/components/buttons-floating-action-button.html) (FAB).

[![Travis CI Status](https://travis-ci.org/valleweb/vsc-fab-button.svg?branch=master)](https://travis-ci.org/valleweb/vsc-fab-button)
[![bower](https://img.shields.io/bower/v/vsc-fab-button.svg)](https://www.npmjs.com/package/vsc-fab-button)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/valleweb/vsc-fab-button)

## How to install and use:

1 - Install the element using [Bower](http://bower.io/):

```sh
$ bower install vsc-fab-button --save
```

2 -  Import the element:

```html
<link rel="import" href="bower_components/vsc-fab-button/vsc-fab-button.html">
```

3 - Start using it!

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="vsc-fab-button.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<vsc-fab-button></vsc-fab-button>
```

## Properties

Property    | Type      | Default | Description
:---        |:---       |:---     |:---
`icon`      | *String*  | `''`    | Icon url
`mini`      | *Boolean* | `false` | Allow mini size
`inactive`  | *Boolean* | `false` | Allow inactive state
`elevation` | *Number*  | `1`     | Add material design elevation level (1-5)
`label`     | *String*  | `''`    | Label for screen readers

## Styling

The following custom properties and mixins are available for styling:

Custom property                     | Default | Description
:---                                |:---     |:---
--vsc-fab-button-color              | #ff6d00 | Button background color
--vsc-fab-button-size               | 56px    | Button size (width and height)
--vsc-fab-button-mini-size          | 40px    | Button mini size (width and height)
--vsc-fab-button-icon-size          | 24px    | Icon size (width and height)


## Browser Support

Using the [webcomponents.js](https://github.com/WebComponents/webcomponentsjs):

 ![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/chrome/chrome_48x48.png) | ![Opera](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/opera/opera_48x48.png) | ![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/firefox/firefox_48x48.png) | ![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/safari/safari_48x48.png) |![IE](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |  ![Edge](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/edge/edge_48x48.png) |
:---: | :---: | :---: | :---: | :---: | :---: |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11+ | Latest ✔

## Development

1 - Install [Bower](http://bower.io/) & [Polymer-CLI](https://www.polymer-project.org/1.0/docs/tools/polymer-cli):

```sh
$ [sudo] npm install -g bower polymer-cli
```

2 - Install local dependencies:

```sh
$ bower install
```

3 - Start the development server:

```sh
$ polymer serve
```

Go to [localhost:8080/components/vsc-fab-button/](http://localhost:8080/components/vsc-fab-button/)


## Tests

#### Linting

Linting with eslint:

```sh
$ [sudo] npm install -g eslint
$ [sudo] npm install -g eslint-plugin-html

$ eslint *.html
```

Linting with polylint:

```sh
$ polymer lint
```

#### Unit tests

Install the Web Component Tester (WCT) test runner:

```sh
$ [sudo] npm install -g web-component-tester
```

Run tests:

```sh
$ wct
```

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/valleweb/vsc-fab-button/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/valleweb/vsc-fab-button/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/valleweb/vsc-fab-button/releases) for detailed changelog.

## License

[MIT License](https://github.com/valleweb/vsc-fab-button/blob/master/LICENSE.md) © [valleweb](https://github.com/orgs/valleweb/people)
