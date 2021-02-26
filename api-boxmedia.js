(function() { 

const AJAX_POST_URL = "http://staging-boxmediaapi-co-uk.stackstaging.com/wp-json/boxmediaapi/v1";

window._wq = window._wq || [];
_wq.push({ id: "_all", onReady: function(video) {

  video.bind("play", function() {

    let = videoId = '';
    let forename =''; 
    let surname =''; 
    let = company ='';
    let = userId = '';
    let = pageUrl = '';
    
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    
    if(urlParams.has('fn')){
      forename = urlParams.get('fn');
      forename = atob(forename);
    }

    if(urlParams.has('sn')){
      surname = urlParams.get('sn');
      surname = atob(surname);
    }

    if(urlParams.has('co')){
      company = urlParams.get('co');
      company = atob(company);
    }

    if(urlParams.has('uid')){
      userId = urlParams.get('uid');
      userId = atob(userId);
    }

    if(urlParams.has('dbc')){
      pageUrl = urlParams.get('dbc');
      pageUrl = atob(pageUrl);
    }


    video.email(forename + ' ' + surname + ' ' + company);

    console.log(forename);
    console.log(surname);
    console.log(company);
    console.log(userId);
    console.log(pageUrl);

    videoName = video.data.media.name
    videoId = video.data.media.hashedId;

    jQuery.ajax({
        url : AJAX_POST_URL + '/video/1' ,
        type: "GET",
        data : {id: videoId,
                name: videoName,
                forename: forename,
                surname: surname,
                company: company,
                userId: userId,  
                pageUrl: pageUrl
              },
        success: function(data)
        {
           // var json = $.parseJSON(data)
            console.log('returned', data);
            //data - response from server
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            console.log(errorThrown);
            console.log(jqXHR);
            console.log(textStatus);
        }
    });





  });
}});

})();