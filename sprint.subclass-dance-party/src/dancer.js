// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this._top = top;
  this._left = left;
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function(){
  // requires a clock tick
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
  // this won't require a clock tick
  // var context = this;
  // setTimeout(function(){context.step()}, this_....)
};

makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.interact = function(){
  var closest = {};
  closest.distance = 10000;
  if (dancers.length > 1) {
    for (var i = 0; i < dancers.length-1; i++){
      var distance = Math.sqrt(Math.pow((this._top - dancers[i]._top), 2) + Math.pow((this._left - dancers[i]._left), 2));
      if (closest.distance && (closest.distance > distance)) {
        closest = dancers[i];
        closest.distance = distance;
      }
    }
    var jumpTop = this._top - (this._top - closest._top)/2 ;
    var jumpLeft = this._left - (this._left - closest._left)/2; 
    closest.$node.attr('id','welcome');
    closest.$node && closest.$node.animate({
      left:jumpLeft,
      top:jumpTop
    });
  }
};