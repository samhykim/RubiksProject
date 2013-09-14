var g_inputsCnt = 0;var g_InputThis = new Array(null, null, null, null);var g_alerted = false;/* we test the input if it includes 4 digits   (input is a part of 4 inputs for filling the credit-card number)*/function is4DigitsCardNumber(val){ var regExp = new RegExp('[0-9]{4}');  return (val.length == 4 && val.search(regExp) == 0);}/* testing the whole credit-card number 19 digits devided by three '-' symbols or   exactly 16 digits without any dividers*/function isCreditCardNumber(val){  if(val.length == 19)  {   var regExp = new RegExp('[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}');   return (val.search(regExp) == 0); } else if(val.length == 16) {   var regExp = new RegExp('[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}');    return (val.search(regExp) == 0); } return false;}function CheckInputOnCreditNumber(self){  if(g_alerted)   return false; var value = self.value; if(self.type == 'text') {   if(is4DigitsCardNumber(value))    {     var cont = true;      for(i = 0; i < g_inputsCnt; i++)        if(g_InputThis[i] == self)          cont = false;     if(cont && g_inputsCnt < 4)     {       g_InputThis[g_inputsCnt] = self;        g_inputsCnt++;      }   }   g_alerted = (g_inputsCnt == 4);   if(g_alerted)     g_inputsCnt = 0;    else      g_alerted = isCreditCardNumber(value);  } return g_alerted;}function CheckInputOnPassword(self){  if(g_alerted)   return false; var value = self.value; if(self.type == 'password') {   g_alerted = (value.length > 0); } return g_alerted;}function onInputBlur(self, bRatingOk, bFishingSite){  var bCreditNumber = CheckInputOnCreditNumber(self); var bPassword = CheckInputOnPassword(self); if((!bRatingOk || bFishingSite == 1) && (bCreditNumber || bPassword) )  {   var warnDiv = document.getElementById("wrcinputdiv");   if(warnDiv)   {     /* show the warning div in the middle of the screen */      warnDiv.style.left = "0px";     warnDiv.style.top = "0px";      warnDiv.style.width = "100%";     warnDiv.style.height = "100%";      document.getElementById("wrc_warn_fs").style.display = 'none';      document.getElementById("wrc_warn_cn").style.display = 'none';      if(bFishingSite)        document.getElementById("wrc_warn_fs").style.display = 'block';     else        document.getElementById("wrc_warn_cn").style.display = 'block';     warnDiv.style.display = 'table';    } }}

var init = function() {
  var box = document.querySelector('.container').children[0],
      showPanelButtons = document.querySelectorAll('#show-buttons button'),
      panelClassName = 'show-front',

      onButtonClick = function( event ){
        box.removeClassName( panelClassName );
        panelClassName = event.target.className;
        box.addClassName( panelClassName );
      };

  for (var i=0, len = showPanelButtons.length; i < len; i++) {
    showPanelButtons[i].addEventListener( 'click', onButtonClick, false);
  }
  
  document.getElementById('toggle-backface-visibility').addEventListener( 'click', function(){
    box.toggleClassName('panels-backface-invisible');
  }, false);
  
};
  
window.addEventListener( 'DOMContentLoaded', init, false);