var makeRockDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="src/clear1.gif" height="50%">')
  this.$node.addClass('rockDancer');
  // this.$node.css({
  //   border:"none"
  // });
}

makeRockDancer.prototype = Object.create(makeDancer.prototype);

makeRockDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
}