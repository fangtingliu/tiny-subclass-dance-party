var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer');
  this.$node.append('<img src="src/asset/monster1.gif" height="100%">');
  this.$node.addClass('blinkyDancer');
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};