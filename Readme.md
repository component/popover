
# Popover

  Popover component built on top of [Tip](http://github.com/component/tip).

  ![js popover component](http://f.cl.ly/items/282X271J2Y1s1P342o02/Screen%20Shot%202012-08-02%20at%205.07.07%20PM.png)

## Installation

```
$ npm install popover-component
```

## Features

  - events for composition
  - "auto" positioning
  - fluent API
  - minimal base styling

## Events

  - `show` the tip is shown
  - `hide` the tip is hidden

## API

### new Popover(content, [title])

  Create a new popover with `content` being
  either a string, html, or element, and optional
  `title` which may contain html or be an element as well.

```js
var Popover = require('popover');
var popover = new Popover('You have mail!!!', 'Mail');
popover.show('#avatar');
```

 View [Tip](http://github.com/component/tip) for additional
 API documentation.

## License

  MIT