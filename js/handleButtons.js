var bookmarkedBool = false;

function openMenuBarMobile() {
  let optionHeaderMobile = document.getElementById("div-options-header-mobile");

  optionHeaderMobile.style.setProperty("display", "flex", "important");;
}

function closeMenuBarMobile() {
  let optionHeaderMobile = document.getElementById("div-options-header-mobile");

  optionHeaderMobile.style.setProperty("display", "none");
}

function openModalDefault() {
  let modalDefault = document.getElementById("desktop-design-modal-default");

  modalDefault.style.setProperty("display", "flex");
}

function closeModalDefault() {
  let modalDefault = document.getElementById("desktop-design-modal-default");

  modalDefault.style.setProperty("display", "none");
}

function closeStatesCompleted() {
  let stateModelCompleted = document.getElementById("active-state-modal-completed");
  stateModelCompleted.style.setProperty("display", "none");
}

function openModalCompleted() {
  const radios = document.getElementsByClassName('modal-radio');

  var backedValue;

  closeModalDefault();
  
  let stateModelCompleted = document.getElementById("active-state-modal-completed");

  stateModelCompleted.style.setProperty("display", "flex");

  updateBacked(1);

  if(radios[0].checked) {
    let actualBacked = document.getElementById("p-moneyBacked").textContent;
    let valueEnterInput = 0;

    let actualBackedNumber = parseInt(actualBacked);

    window.localStorage.setItem("actualMoneyBacked", actualBackedNumber);
    window.localStorage.setItem("moneyBacked", valueEnterInput);

    let actualValue = parseInt(localStorage.getItem("actualMoneyBacked"));
    let valueInput = parseInt(localStorage.getItem("moneyBacked"));

    let som = actualValue + valueInput;

    backedValue = som;
  }

  if(radios[1].checked) {
    let actualBacked = document.getElementById("p-moneyBacked").textContent;
    let valueEnterInput = document.getElementById("input-modal-value-1").value;

    let valueEnterInputNumber = parseInt(valueEnterInput);
    let actualBackedNumber = parseInt(actualBacked);

    localStorage.setItem("actualMoneyBacked", actualBackedNumber);
    localStorage.setItem("moneyBacked", valueEnterInputNumber);

    let actualValue = parseInt(localStorage.getItem("actualMoneyBacked"));
    let valueInput = parseInt(localStorage.getItem("moneyBacked"));

    let som = actualValue + valueInput;

    backedValue = som;

    let percent = actualValue*100;
    percent = percent / 100000;

    updataProgressBar(percent);
    updateBambooReward(1);
  }

  if(radios[2].checked) {
    let actualBacked = document.getElementById("p-moneyBacked").textContent;
    let valueEnterInput = document.getElementById("input-modal-value-2").value;

    let valueEnterInputNumber = parseInt(valueEnterInput);
    let actualBackedNumber = parseInt(actualBacked);

    localStorage.setItem("actualMoneyBacked", actualBackedNumber);
    localStorage.setItem("moneyBacked", valueEnterInputNumber);

    let actualValue = parseInt(localStorage.getItem("actualMoneyBacked"));
    let valueInput = parseInt(localStorage.getItem("moneyBacked"));

    let som = actualValue + valueInput;

    backedValue = som;

    let percent = actualValue*100;
    percent = percent / 100000;

    updataProgressBar(percent);
    updateBlackReward(1);
  }

  if(radios[3].checked) {
    let actualBacked = document.getElementById("p-moneyBacked").textContent;
    let valueEnterInput = document.getElementById("input-modal-value-3").value;

    let valueEnterInputNumber = parseInt(valueEnterInput);
    let actualBackedNumber = parseInt(actualBacked);

    localStorage.setItem("actualMoneyBacked", actualBackedNumber);
    localStorage.setItem("moneyBacked", valueEnterInputNumber);

    let actualValue = parseInt(localStorage.getItem("actualMoneyBacked"));
    let valueInput = parseInt(localStorage.getItem("moneyBacked"));

    let som = actualValue + valueInput;

    backedValue = som;

    let percent = actualValue*100;
    percent = percent / 100000;

    if (percent > 100) {
      percent = 100;
    }

    updataProgressBar(percent);
    updateMahoganyReward(1);
  }

  updateMoneyBacked(backedValue);
}

function markBook() {
  let img = document.getElementById("img-bookmark");
  let paragraph = document.getElementById("p-bookmark");


  if(bookmarkedBool) {
    paragraph.style.color = "hsl(0, 0%, 48%)";
    img.setAttribute("src", "./images/icon-bookmark.svg");
    paragraph.innerHTML = "Bookmark";

    bookmarkedBool = false;
  } else {
    paragraph.style.color = "hsl(176, 72%, 28%)";
    img.setAttribute("src", "./images/icon-bookmarked.svg");
    paragraph.innerHTML = "Bookmarked";

    bookmarkedBool = true;
  }
}

function displayPledgeIfChecked() {
  const radios = document.getElementsByClassName('modal-radio');
  const enterPledge1 = document.getElementById("div-enter-pledge-1");
  const enterPledge2 = document.getElementById("div-enter-pledge-2");
  const enterPledge3 = document.getElementById("div-enter-pledge-3");
  const enterPledge4 = document.getElementById("div-enter-pledge-4");

  if(radios[0].checked) {
    console.log("radio 0 checked");

    enterPledge1.style.setProperty("display", "block");
  } else {
    enterPledge1.style.setProperty("display", "none");
  }

  if(radios[1].checked) {
    console.log("radio 1 checked");

    enterPledge2.style.setProperty("display", "block");
  } else {
    enterPledge2.style.setProperty("display", "none");
  }

  if(radios[2].checked) {
    console.log("radio 2 checked");

    enterPledge3.style.setProperty("display", "block");
  } else {
    enterPledge3.style.setProperty("display", "none");
  }

  if(radios[3].checked) {
    console.log("radio 3 checked");

    enterPledge4.style.setProperty("display", "block");
  } else {
    enterPledge4.style.setProperty("display", "none");
  }
}

function updateMoneyBacked(value) {
  var spanMoneyBacked = document.getElementById("p-moneyBacked");
  spanMoneyBacked.innerHTML = value;
}

function updateBacked(value) {
  var backed = document.getElementById("p-id-total-backed");

  console.log(backed.textContent);

  var backedNumber = parseInt(backed.textContent);
  var som = backedNumber + value;
  
  console.log(som);

  localStorage.setItem("backed", som);

  var numberOfBacked = localStorage.getItem("backed");

  backed.innerHTML = numberOfBacked;
}

function updateBlackReward(value) {
  let blackLeft = document.getElementById("black-id-1");
  let blackLeft2 = document.getElementById("black-id-2");

  window.localStorage.setItem("blackLeft1", blackLeft.textContent);

  let valueNumberBlack = parseInt(value);

  let actualBlackLeft = parseInt(localStorage.getItem("blackLeft1"));

  let resultBlack = actualBlackLeft - valueNumberBlack;

  blackLeft.innerHTML = resultBlack;
  blackLeft2.innerHTML = resultBlack;
}

function updateMahoganyReward(value) {
  let mahoganyLeft = document.getElementById("mahogany-id-1");
  let mahoganyLeft2 = document.getElementById("mahogany-id-2");
  window.localStorage.setItem("mahoganyLeft1", mahoganyLeft.textContent);

  let valueNumberMahogany = parseInt(value);

  let actualMahoganyLeft = parseInt(localStorage.getItem("mahoganyLeft1"));

  let resultMahogany = actualMahoganyLeft - valueNumberMahogany;

  mahoganyLeft.innerHTML = resultMahogany;
  mahoganyLeft2.innerHTML = resultMahogany;
}

function updateBambooReward(value) {
  let bambooLeft = document.getElementById("bamboo-id-1");
  let bambooLeft2 = document.getElementById("bamboo-id-2");

  window.localStorage.setItem("bambooLeft1", bambooLeft.textContent);

  let valueNumber = parseInt(value);

  let actualBambooLeft = parseInt(localStorage.getItem("bambooLeft1"));

  let result = actualBambooLeft - valueNumber;

  bambooLeft.innerHTML = result;
  bambooLeft2.innerHTML = result;
}

