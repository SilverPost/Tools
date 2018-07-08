var CSV_DATA4DISPLAY = "";
var CSV_DATA4SAVE = "";

function csvAdd() {
  var nw_lat = Number(document.js.nw_lat.value);
  var nw_long = Number(document.js.nw_long.value);
  var se_lat = Number(document.js.se_lat.value);
  var se_long = Number(document.js.se_long.value);
  var alpha_0_5 = Number(document.js.alpha_0_5.value);
  var alpha_eew = Number(document.js.alpha_eew.value);
  
  var err_text = errorText(nw_lat, nw_long, se_lat, se_long, alpha_0_5, alpha_eew);
  if(err_text !== null) {
    alert(err_text);
    return;
  }
  
  for(var lat = nw_lat; lat >= se_lat; lat -= 0.25) {
    for(var long = nw_long; long <= se_long; long += 0.25) {
      for(var depth = 0; depth <= 100; depth += 20) {
        CSV_DATA4DISPLAY = CSV_DATA4DISPLAY+lat+","+long+","+depth+","+alpha_0_5+","+alpha_eew+"<br>";
        CSV_DATA4SAVE = CSV_DATA4SAVE+lat+","+long+","+depth+","+alpha_0_5+","+alpha_eew+"\n";
      }
    }
  }
  updateInnerHtml(CSV_DATA4DISPLAY);
}

function errorText(nw_lat, nw_long, se_lat, se_long, alpha_0_5, alpha_eew) {
  if( nw_lat < se_lat) {
    return "左上の緯度には、右下の緯度以上の値を入れてください。";
  }
  if( se_long < nw_long) {
    return "左上の経度には、右下の経度以下の値を入れてください。";
  }

  return null;
}

function csvInit() {
  CSV_DATA4DISPLAY = "";
  updateInnerHtml(CSV_DATA4DISPLAY);
  CSV_DATA4SAVE = "";
}

function updateInnerHtml(text) {
  var div = document.getElementById("csvText");
  div.innerHTML = text;
}

function clr() {
  document.js.nw_lat.value="";
  document.js.nw_long.value="";
  document.js.se_lat.value="";
  document.js.se_long.value="";
  document.js.alpha_0_5.value="";
  document.js.alpha_eew.value="";
}

function csvSave() {
  outputText(CSV_DATA4SAVE, 'alpha');
}

function outputText(text, fileName) {
  var blob = new Blob([ text ], {"type": "text/csv"});
  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(blob, fileName);
    window.navigator.msSaveOrOpenBlob(blob, fileName);
  } else {
    document.getElementById("download").href = window.URL.createObjectURL(blob);
    document.getElementById("download").download = fileName;
  }
}
