var sunshineDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer');
  this.$node.append('<img src="src/asset/sun.gif" height="40%">');
  this.$node.addClass('sunshineDancer');
};

sunshineDancer.prototype = Object.create(makeDancer.prototype);

sunshineDancer.prototype.constructor = sunshineDancer;

sunshineDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};