'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

List.prototype.shift = function() {
  let returnValue = this.data[this.length];
  delete this.data[0];
  this.length--;
  return returnValue;
};

List.prototype.unshift = function(item) {
  let returnValue = this.data[this.length];
  let temp = this.data[0];
  this.data[0] = item;
  for(let i = 1; i < this.length+1; i++){
    let swap = this.data[i];
    this.data[i]= temp;
    temp = swap;
  }
  return returnValue;
};

List.prototype.forEach = function(item) {

};

List.prototype.map = function(item) {

};

List.prototype.filter = function(item) {

};

List.prototype.reduce = function(item) {

};

module.exports = List;
