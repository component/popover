/**
 * Module dependencies.
 */

var Tip = require('tip')
  , o = require('jquery')
  , inherit = require('inherit');

/**
 * Expose `Popover`.
 */

module.exports = Popover;

/**
 * Initialize a `Popover` with the given `content`
 * and optional `title`.
 *
 * @param {Mixed} content
 * @param {Mixed} title
 * @api public
 */

function Popover(content, title) {
  Tip.call(this, require('./template'));
  this.classname = 'popover';
  this.classes.add('popover');
  if (title) this.title(title)
  else this.hideTitle();
  this.content(content);
  if (Popover.effect) this.effect(Popover.effect);
}

/**
 * Inherits from `Tip.prototype`.
 */

inherit(Popover, Tip);

/**
 * Replace `content`.
 *
 * @param {Mixed} content
 * @return {Popover}
 * @api public
 */

Popover.prototype.content = function(content){
  o(this.el).find('.popover-content').html(content);
  return this;
};

/**
 * Change `title`.
 *
 * @param {String} title
 * @return {Popover}
 * @api public
 */

Popover.prototype.title = function(title){
  o(this.el).find('.popover-title').html(title);
  return this;
};

/**
 * Hide the title.
 *
 * @return {Popover}
 * @api private
 */

Popover.prototype.hideTitle = function(){
  o(this.el).find('.popover-title').remove();
  return this;
};
