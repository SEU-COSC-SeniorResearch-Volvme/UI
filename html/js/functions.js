
function loadSignUp(){
 // document.getElementById("content").innerHTML='<object type="text/html" data="./test.html" ></object>';

  //document.getElementById("content").load('/test.html');
  $( "#contentWrapperType2" ).load( "./htmlSnipets/signUp.html" );

}

function loadUserArea() {

 // $( "#logInLogOut" ).load( "./htmlSnipets/logOutLink.html" );

  $( "#logInLogOut" ).html( "<a id='logOutLink'style=\"color:#F6931D;\"href=\"#\" onclick=\"loadLandingPage()\">Logout</a>" );

//issues with always using load html etc.for small links and tags

  $( "#contentWrapperType2" ).load( "./htmlSnipets/userArea.html" );

}


function loadLandingPage(){
  // document.getElementById("content").innerHTML='<object type="text/html" data="./test.html" ></object>';

  //document.getElementById("content").load('/test.html');


    $( "#logInLogOut" ).html("<a id='logInLink'style=\"color:#F6931D;\"href=\"#\" onclick=\"loadLogInPage()\">Login</a>");


  $( "#contentWrapperType2" ).load( "./htmlSnipets/landingPage.html");

}
//loadLandingPage();


function loadLogInPage(){
  // document.getElementById("content").innerHTML='<object type="text/html" data="./test.html" ></object>';

  //document.getElementById("content").load('/test.html');
  $( "#contentWrapperType2" ).load( "./htmlSnipets/logIn.html" );

}



function loadJamFinder(){
  // document.getElementById("content").innerHTML='<object type="text/html" data="./test.html" ></object>';

  //document.getElementById("content").load('/test.html');
  $( "#contentWrapperType2" ).load( "./htmlSnipets/jamFinder.html" );

}

function loadLocalEvents(){
  // document.getElementById("content").innerHTML='<object type="text/html" data="./test.html" ></object>';

  //document.getElementById("content").load('/test.html');
  $( "#contentWrapperType2" ).load( "./htmlSnipets/localEvents.html" );
}

function loadUserProfile(){
  // document.getElementById("content").innerHTML='<object type="text/html" data="./test.html" ></object>';

  //document.getElementById("content").load('/test.html');
  $( "#contentWrapperType2" ).load( "./htmlSnipets/userProfile.html" );

}

function loadCityMusicPlayer(){
  // document.getElementById("content").innerHTML='<object type="text/html" data="./test.html" ></object>';

  //document.getElementById("content").load('/test.html');
  $( "#contentWrapperType2" ).load( "./htmlSnipets/cityMusicPlayer.html" );

}


function loadPhoto(){
  // document.getElementById("content").innerHTML='<object type="text/html" data="./test.html" ></object>';
  //document.getElementById("content").load('/test.html');
  $( "#contentWrapperType2" ).load( "./htmlSnipets/photo.html" );
}

function logOut() {
   $( "#logOutLink" ).load( "./htmlSnipets/logInLink.html" );
}

function logIn() {
  $( "#contentWrapperType2" ).load( "./htmlSnipets/logIn.html" );
}


function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}
