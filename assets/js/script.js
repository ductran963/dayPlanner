var currentDayEl = document.getElementById('currentDay');
var timeZone = moment().format('dddd, MMMM Do');
currentDayEl.textContent = timeZone;
updateTime();
function updateTime () {
    $('.hour1').text(moment().subtract(3, 'h').format('hA'));
    $('.hour2').text(moment().subtract(2, 'h').format('hA')); 
    $('.hour3').text(moment().subtract(1, 'h').format('hA'));
    $('.hour4').text(moment().format('hA'));  // current hour
    $('.hour5').text(moment().add(1, 'h').format('hA')); //add one hour to the current hour which is .format('hA') and so on..
    $('.hour6').text(moment().add(2, 'h').format('hA'));
    $('.hour7').text(moment().add(3, 'h').format('hA'));
    $('.hour8').text(moment().add(4, 'h').format('hA'));
    $('.hour9').text(moment().add(5, 'h').format('hA'));
}

renderSaveBtn1 ();

function renderSaveBtn1 () {
    $(".description1").append(localStorage.getItem("text1"))
}

$( ".saveBtn1" ).on("click", function(e) {
    e.preventDefault();
    var submitDescription1 = $(".description1").val();
    localStorage.setItem("text1", submitDescription1);
    renderSaveBtn1();
  });

renderSaveBtn2 ();

function renderSaveBtn2 () {
    $(".description2").append(localStorage.getItem("text2"))
}

$( ".saveBtn2" ).on("click", function(e) {
    e.preventDefault();
    var submitDescription2 = $(".description2").val();
    localStorage.setItem("text2", submitDescription2);
    renderSaveBtn2();
  });

renderSaveBtn3 ();

function renderSaveBtn3 () {
    $(".description3").append(localStorage.getItem("text3"))
}

$( ".saveBtn3" ).on("click", function(e) {
    e.preventDefault();
    var submitDescription3 = $(".description3").val();
    localStorage.setItem("text3", submitDescription3);
    renderSaveBtn3();
  });

renderSaveBtn4 ();

function renderSaveBtn4 () {
    $(".description4").append(localStorage.getItem("text4"))
}

$( ".saveBtn4" ).on("click", function(e) {
    e.preventDefault();
    var submitDescription4 = $(".description4").val();
    localStorage.setItem("text4", submitDescription4);
    renderSaveBtn4();
  });

renderSaveBtn5 ();

function renderSaveBtn5 () {
    $(".description5").append(localStorage.getItem("text5"))
}

$( ".saveBtn5" ).on("click", function(e) {
    e.preventDefault();
    var submitDescription5 = $(".description5").val();
    localStorage.setItem("text5", submitDescription5);
    renderSaveBtn5();
  });

renderSaveBtn6 ();

function renderSaveBtn6 () {
    $(".description6").append(localStorage.getItem("text6"))
}

$( ".saveBtn6" ).on("click", function(e) {
    e.preventDefault();
    var submitDescription6 = $(".description6").val();
    localStorage.setItem("text6", submitDescription6);
    renderSaveBtn6();
  });

renderSaveBtn7 ();

function renderSaveBtn7 () {
    $(".description7").append(localStorage.getItem("text7"))
}

$( ".saveBtn7" ).on("click", function(e) {
    e.preventDefault();
    var submitDescription7 = $(".description7").val();
    localStorage.setItem("text7", submitDescription7);
    renderSaveBtn7();
  });

renderSaveBtn8 ();

function renderSaveBtn8 () {
    $(".description8").append(localStorage.getItem("text8"))
}

$( ".saveBtn8" ).on("click", function(e) {
    e.preventDefault();
    var submitDescription8 = $(".description8").val();
    localStorage.setItem("text8", submitDescription8);
    renderSaveBtn8();
  });

renderSaveBtn9 ();

function renderSaveBtn9 () {
    $(".description9").append(localStorage.getItem("text9"))
}

$( ".saveBtn9" ).on("click", function(e) {
    e.preventDefault();
    var submitDescription9 = $(".description9").val();
    localStorage.setItem("text9", submitDescription9);
    renderSaveBtn9();
  });