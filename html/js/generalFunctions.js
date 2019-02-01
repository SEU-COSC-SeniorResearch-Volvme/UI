
function signUp(){//send json object with possible email and password
    var username = $("#username").val();
    var password =$("#password").val();
    var artistName = $("#artistName").val();
    //var city =$("#city").val();
   // var genre = $("#genre").val();
//email
  //artistname
  //password
  //script.crossorigin = 'anonymous';
    $.ajax({
        url: 'https://volvme.xyz/api/user/signup',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            email:username, password:password, name:artistName
        }),
        dataType: 'json',
        success: function (response){
            alert("success");
            sendLoginData()
        },
        error: function (data, status, error) {
            //$(location).attr('href', './artistProfile.html')
            alert('error');
            console.log(data, status, error);
            var modal = document.getElementById('myModal');
            $(".modal-content").html(data.responseJSON.message);
            modal.style.display = "block";
        }
    });
}

function sendLoginData(){
  loadUserArea();
  /*
    var username = $("#username").val();
    var inputPassword =$("#password").val();
    $.ajax({
        url: 'https://volvme.xyz.com/api/user/login',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            email:username,password:inputPassword
        }),
        dataType: 'json',
        success: function (response){

            document.cookie = "name="+username+"";
            document.cookie = "token="+response.token+"";
            c = parseCookie();
            alert(c.token);
            alert("before redirect");
           // $(location).attr('href', './artistProfile.html')
        },
        error: function (data, status, error) {
          $( "#contentWrapperType2" ).load( "./htmlSnipets/logIn.html" );
            console.log(data, status, error);
            alert(data.responseJSON.message);
            var modal = document.getElementById('myModal');
            $(".modal-content").html(data.responseJSON.message);
            modal.style.display = "block";
        }
    });

    */
}


