var makeRockDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('rockDancer');
  this.$node.css({
    border:"15px solid green"
  });
}

makeRockDancer.prototype = Object.create(makeDancer.prototype);

makeRockDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.animate({
    height:"25px",
    opacity:.5
  });
  this.$node.animate({
    height:"15px",
    opacity:1
  });
}