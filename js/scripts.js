var harry = 0;
var voldomort = 0;


$(document).ready(function() {
 $("#house button").click(function() {
    var house = $("input:radio[name=griffindor]:checked").val();
     if (house === "yes") {
       return harry += 1;
     } else {
       voldomort += 1;
     }
   });

  $("#nose button").click(function() {
    var nose = $("input:radio[name=face]:checked").val();
      if (nose === "no") {
        return harry += 1;
      } else {
        voldomort += 1;
      }
  });
  $("#father button").click(function() {
    var father = $("input:radio[name=dad]:checked").val();
      if (father === "yes") {
        return harry += 1;
      } else {
        voldomort += 1;
      }
  });
});
