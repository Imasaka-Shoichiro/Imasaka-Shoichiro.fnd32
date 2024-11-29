"use strict";

const urlArray = [];
let currentUrl = 0;
let currentTab = null;
let swhitchFlag = false;


document.getElementById("startSwitch").addEventListener("click", startSwitchHandler);
document.getElementById("stopSwitch").addEventListener("click", stopSwitch);
document.getElementById("textImport").addEventListener("change", textImport);


function startSwitchHandler() {
  createUrlArray();
  startSwitch();
  setTimeout(timeOutStopSwitch, 10 * 60 * 60 * 1000);
}


function createUrlArray() {
  const urls = document.getElementsByClassName("url");
  console.log(urls);
  for (let i = 0; i < urls.length; i++){
    if (urls[i].value != ""){
      urlArray.push(urls[i].value);
    }
  }
  console.log(urlArray);
}

function startSwitch() {
  if (!swhitchFlag) {
    swhitchFlag = true;
    openNextTab();
  }
}

function openNextTab() {
  const switchTime = document.getElementById("switchTime").value;
  if (swhitchFlag) {
    const url = urlArray[currentUrl];
    if (currentTab) {
      currentTab.close();
    }
    currentTab = window.open(url, "_blank");
    currentUrl = (currentUrl + 1) % urlArray.length;
    setTimeout(openNextTab, switchTime * 1000);
  };
}

function timeOutStopSwitch() {
  alert("自動切換えを強制停止しました");
  swhitchFlag = false;
}

function stopSwitch() {
  swhitchFlag = false;
  alert("自動切換えを停止しました");
}

function textImport() {
  const inputText = document.getElementById("textImport");
  const file = inputText.files[0];
  const readTextFile = new FileReader();
  readTextFile.readAsText(file, 'UTF-8');
  readTextFile.onload = () => {
    let urlID;
    let url;
    const splitText = readTextFile.result.split(",");
    for(let j = 0; j < splitText.length; j++) {
      urlID = "url"+(j+1);
      url = document.getElementById(urlID);
      url.value = splitText[j];
    }
  };
}
