var spinner = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="src/clear2.gif" height="80%" width="80%">');
  this.$node.removeClass('dancer');
  this.$node.addClass('spinner');
}

spinner.prototype = Object.create(makeDancer.prototype);

spinner.prototype.step = function(){
  makeDancer.prototype.step.call(this);
}