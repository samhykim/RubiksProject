$(document).ready(function(){

	$('#walkthrough').pagewalkthrough({

    steps:
        [
               {
                   wrapper: '',
                   margin: 0,
                   popup:
                   {
                       content: '#step1',
                       type: 'modal',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '300'
                   }        
               },
               {
                   wrapper: '#tour2',
                   margin: '0',
                   popup:
                   {
                       content: '#step2',
                       type: 'tooltip',
                       position: 'right',
                       offsetHorizontal: 0,
                       offsetVertical: 120,
                       width: '300'
                   },  
                   accessable: false   
               },
               {
                   wrapper: '',
                   margin: '0',
                   popup:
                   {
                       content: '#step3',
                       type: 'modal',
                       offsetHorizontal: 250,
                       offsetVertical: 0,
                       width: '300',
                       draggable: true
                   },             
               },
               {
                   wrapper: '#tour3.5',
                   margin: '0',
                   popup:
                   {
                       content: '',
                       type: 'tooltip',
                       position: 'bottom',
                       offsetHorizontal: 100,
                       offsetVertical: 0,
                       width: '300'
                   },
                   accessable: true              
               },
               {
                   wrapper: '',
                   margin: '0',
                   popup:
                   {
                       content: '#step4',
                       type: 'modal',
                       position: 'right',
                       offsetHorizontal: 0,
                       offsetVertical: 200,
                       width: '300'
                   },
                   autoScroll: true,              
               },   
               {
                   wrapper: '#tour5',
                   margin: '0',
                   popup:
                   {
                       content: '#step5',
                       type: 'tooltip',
                       position: 'top',
                       offsetHorizontal: 20,
                       offsetVertical: 0,
                       width: '350',
                   },                
                   accessable: true,
               },
               {
                   wrapper: '#tour6',
                   margin: '0',
                   popup:
                   {
                       content: '#step6',
                       type: 'tooltip',
                       position: 'bottom',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '300'
                   },
                   accessable: true,             
               },
               {
                   wrapper: '#tour7',
                   margin: '0',
                   popup:
                   {
                       content: '#step7',
                       type: 'tooltip',
                       position: 'top',
                       offsetHorizontal: 0,
                       offsetVertical: 20,
                       width: '400'
                   },
                   accessable: true,              
               },
               {
                   wrapper: '#tour8',
                   margin: '0',
                   popup:
                   {
                       content: '#step8',
                       type: 'tooltip',
                       position: 'right',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '400',
                       draggable: true
                   }                
               },
               {
                   wrapper: '#enquiry-phone',
                   margin: '0',
                   popup:
                   {
                       content: '#nohighlight-draggable',
                       type: 'nohighlight',
                       position: 'top',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '400',
                       draggable: true
                   }                
               },
               {
                   wrapper: '#enquiry-email',
                   margin: '0',
                   popup:
                   {
                       content: '#content-rotation',
                       type: 'nohighlight',
                       position: 'bottom',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '400',
                       contentRotation: 10
                   }                
               },
               {
                   wrapper: '#enquiry-phone',
                   margin: '0',
                   popup:
                   {
                       content: '#highlight-accessable',
                       type: 'tooltip',
                       position: 'left',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '400'
                   },
                   accessable: true                
               },
               {
                   wrapper: '#australia',
                   margin: '0',
                   popup:
                   {
                       content: '#auto-scroll',
                       type: 'nohighlight',
                       position: 'top',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '400'
                   },
                   autoScroll: false              
               },
               {
                   wrapper: '.search-box',
                   margin: '0',
                   popup:
                   {
                       content: '#stay-focus',
                       type: 'tooltip',
                       position: 'bottom',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '400'
                   },
                   accessable: true,
                   stayFocus: true              
               },
               {
                   wrapper: '',
                   margin: '0',
                   popup:
                   {
                       content: '#done-walkthrough',
                       type: 'modal',
                       position: '',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '400'
                   }             
               },

        ],

        name: 'Walkthrough',
        onLoad: true,
        onClose: function(){
            $('.main-menu ul li a#open-walkthrough').removeClass('active');
            return true;
        },

	});




	/***
   * NAVIGATION
   */

	$('.main-menu ul li a').each(function(){
      $('.main-menu ul li').find('a.active').removeClass('active');
      $(document).on('click', '.main-menu ul li a', function(){
          $('.main-menu ul li a').addClass('active');
          var id = $('.main-menu ul li a').attr('id').split('-');

          if(id == 'parameters') return;

          $.pagewalkthrough('show', id[1]); 
      });
  });


  $(document).on('click', '.prev-step', function(e){
      $.pagewalkthrough('prev',e);
  });

  $(document).on('click', '.next-step', function(e){
    console.log(e)
      $.pagewalkthrough('next',e);
  });

  $(document).on('click', '.restart-step', function(e){
      $.pagewalkthrough('restart',e);
  });

  $(document).on('click', '.close-step', function(e){
      $.pagewalkthrough('close');
  });

});