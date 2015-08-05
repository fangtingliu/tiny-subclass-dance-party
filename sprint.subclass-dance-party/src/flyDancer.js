var flyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="src/clear4.gif" height="50%">');
  this.$node.removeClass('dancer');
  this.$node.addClass('flyDancer');
}

flyDancer.prototype = Object.create(makeDancer.prototype);

flyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
}