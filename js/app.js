/*stores data*/
var model = {
  color: "red",
  started: false,
  score: 0,
};


/*handles changing color other functions*/
var controller = {

  changeColor: function() {
     var wait = (Math.floor(Math.random() * 5 + 1)) * 1000;
     var duration = (Math.random() * 250  + 180);
     if(model.color === "red"){
       model.color = "green"
       view.renderColor(model.color);
       setTimeout(function(){controller.changeColor();}, duration);
     } else {
       model.color = "red";
       view.renderColor(model.color);
       setTimeout(function(){controller.changeColor();}, wait);
    }
  },

  getColor: function(){
    return(model.color);
  },

  hit: function(){
    console.log("hit");
    model.score += 1;
    view.renderScore(model.score);
  },

  miss: function(){
    console.log("miss");
    model.score -= 1;
    view.renderScore(model.score);
  },

   init: function(){
     this.changeColor();
     view.init();
   }
};


/*handles rendering color and score*/
var view = {
  renderColor: function(color){
    if (color === "red"){
      $("body").css("background-color", "red");
    } else {
      $("body").css("background-color", "green");
    }
  },

  renderScore: function(score){
    $("#instructions").html("");
    $("#score").html("<p>" + score + "</p>")
  },

  init: function(){
    document.onkeydown = function(){
      if(controller.getColor() === "red"){
        controller.miss();
      } else {
        controller.hit();
      }
    }
  },
};


$(document).ready(function(){
  controller.init();
});
