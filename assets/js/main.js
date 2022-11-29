$(document).ready(function () {
    
  /*SCROOL FİXED 
  $(document).on("scroll", function () {
    if ($(document).scrollTop() > 5) {
      $(".navbar").addClass("shrink");
    } else {
      $(".navbar").removeClass("shrink");
    }
  });
*/
  /*TOOGLER BACKGROUD */
  $(function () {
    $('.navbar-toggler').click(function () {
      $(".navbar").toggleClass("nav-bg");
    });
  });

  /***SLİDER AUTOPLAY */
  $('#carouselExampleIndicators').carousel({
    interval: 4000,
    pause: false
  });

  /**CONTİNUE ELEMENT**/
  $('.continue').click(function() {
        $(".hall-cntns").addClass('show-element');
        $(".continue").hide();
  })
  
  /***CİTY FİLTER */
  $(".city-hide").hide();
  $('.btn-filter').click(function () {
    var type = $(this).data("city");
      $('.p-city').hide();
      $('#'+type).fadeIn(1000);
  })

/***SECOND SLİDER */
$('#exampleSlider').multislider({
  slideAll: false,
  continuous:true,
  duration: 10500,
  hoverPause:true
});
/**ANIMATE */


});
AOS.init();
AOS.init({
  offset: 120,
  delay: 0,
  duration: 400,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});




/***TEXT WRİTE */
const txtFull = "tadını çıkartın";
const txtArr = txtFull.split("");

function getRandomTime() {
  return Math.random() * 0.5;
}
function getEle(id) {
  return document.getElementById("text");
}
function ModifyTxt(el, txt) {
  return (el.innerHTML = txt);
}
function writeOut(txtArr, curChar = 0) {
  const randomTime = getRandomTime();
  setTimeout(
    () => {
      const el = getEle("text");
      let elTxt = el.innerHTML;
      elTxt += txtArr[curChar];
      ModifyTxt(el, elTxt);
      //check if next iteration is out of range
      if (curChar + 1 == txtArr.length) {
        return deleteOut(txtArr, txtArr.length);
      }
      return writeOut(txtArr, curChar + 1);
    },

    randomTime * 800
  );
}
function deleteOut(txtArr, curChar = 0) {
  const randomTime = getRandomTime();
  setTimeout(
    () => {
      const el = getEle("text");
      let elTxt = el.innerHTML;
      //remove
      const elTxtArr = elTxt.split("");
      const elTxtArrLen = elTxtArr.length;
      console.log(elTxtArr.length - 1);
      const newElTxt = elTxtArr.splice(0, curChar - 1).join("");
      ModifyTxt(el, newElTxt);
      if (elTxtArrLen == 0) {
        return writeOut(txtArr, 0);
      }
      return deleteOut(txtArr, elTxtArrLen - 1);
    },

    randomTime * 800
  );
  return;
}
writeOut(txtArr);
