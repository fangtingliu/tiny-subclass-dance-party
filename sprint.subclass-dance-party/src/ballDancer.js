var makeBallDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('ballDancer');
  this.$node.css({
    border:"10px",
    "border-style":"dotted",
    "border-color":"RGB(115,108,255)"
  })
}

makeBallDancer.prototype = Object.create(makeDancer.prototype);

makeBallDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.animate({
    opacity:.5,
    width:"20px",
    height:"10px"});
  this.$node.animate({
    opacity:1,
    width:"10px",
    height:"20px"});
}