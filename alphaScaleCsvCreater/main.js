function csvAdd() {
  var nw_lat = Number(document.js.nw_lat.value);
  var nw_long = Number(document.js.nw_long.value);
  var se_lat = Number(document.js.se_lat.value);
  var se_long = Number(document.js.se_long.value);
  var alpha_0_5 = Number(document.js.alpha_0_5.value);
  var alpha_eew = Number(document.js.alpha_eew.value);
  
  var div = document.getElementById("csvText");
  for(var lat = nw_lat; lat <= se_lat; lat += 0.25) {
    for(var long = nw_long; long <= se_long; long += 0.25) {
      for(var depth = 0; depth <= 100; depth += 20) {
        div.innerHTML = div.innerHTML+lat+","+long+","+depth+","+alpha_0_5+","+alpha_eew+"<br>";
      }
    }
  }
}

function csvInit() {
  var div = document.getElementById("csvText");
  div.innerHTML = "";
}

function clr() {
  document.js.nw_lat.value="";
  document.js.nw_long.value="";
  document.js.se_lat.value="";
  document.js.se_long.value="";
  document.js.alpha_0_5.value="";
  document.js.alpha_eew.value="";
}
