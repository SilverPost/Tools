var ls_info = [["熊本TEC", 34, 130, 10],
               ["西原村", 32, 128, 20]];

function select1Change() {
  target = document.getElementById("select1");
  selindex = document.js.select1.selectedIndex;
  if(selindex !== 0) {
    document.js.epi_lat.value = ls_info[selindex-1][1];
    document.js.epi_long.value = ls_info[selindex-1][2];
    document.js.epi_depth.value = ls_info[selindex-1][3];
    document.js.epi_mg.value = 4;
  }
}

function select2Change() {
  target = document.getElementById("select2");
  selindex = document.js.select2.selectedIndex;
  if(selindex !== 0) {
    document.js.ls_lat.value = ls_info[selindex-1][1];
    document.js.ls_long.value = ls_info[selindex-1][2];
  }
}

function select3Change() {
  target = document.getElementById("select3");
  selindex = document.js.select3.selectedIndex;
  if(selindex !== 0) {
    document.js.ls1_lat.value = ls_info[selindex-1][1];
    document.js.ls1_long.value = ls_info[selindex-1][2];
  }
}

function select4Change() {
  target = document.getElementById("select4");
  selindex = document.js.select4.selectedIndex;
  if(selindex !== 0) {
    document.js.ls2_lat.value = ls_info[selindex-1][1];
    document.js.ls2_long.value = ls_info[selindex-1][2];
  }
}
