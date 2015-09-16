$(document).ready(function() {
    $("#div2").show();
    $("#div3").hide();
    $("#div4").hide();
    $("#div1").show();

    $("#btna").click(function() {
        $("#div3").toggle();
        $("#div4").hide();
        $("#div1").hide();
        $("#div2").hide();

    });

    $("#btnb").click(function() {
        $("#div4").toggle();
        $("#div3").hide();
        $("#div1").hide();
        $("#div2").hide();
    });

    $("#enter").click(function() {
        passwordValidation();
        });

    $("#enter1").click(function() {
        loginCheck();
        });

    });

    function loginCheck() {

        if (username1.value && username1.value.trim().length === 0) {
            alert("Error: Username cannot be blank!");
            return false;
        } else {
            if (pwd11.value != "" && pwd11.value == username1.value && pwd11.value.length < 6) {
                alert("Error: Username & Password must be different & Password must contain at least six characters & Password & Confirm Password values should be same!");
                return false;
            } else {
                re = /[0-9]/ && /[a-z]/ && /[A-Z]/;
                if (!re.test(pwd11.value)) {
                    alert("Error: password must contain at least one number (0-9), one lowercase letter (a-z), one uppercase letter (A-Z)!");
                    return false;
                } else {
                    sendRequesta();
                    return true;
                };
            };
        };
    }

    function passwordValidation() {
        if (fname.value && fname.value.trim().length === 0) {
            alert("Error: First & Last name cannot be blank!");
            return false;
        } else {
            if (lname.value && lname.value.trim().length === 0) {
                alert("Error: First & Last name cannot be blank!");
                return false;
            } else {
                if (fname.value != "" && lname.value != "" && fname.value.length < 5 && lname.value.length < 5) {
                    alert("Error: First Name & Last Name must contain at least five characters!");
                    return false;
                } else {
                    if (username.value && username.value.trim().length === 0) {
                        alert("Error: Username cannot be blank!");
                        return false;
                    } else {
                        if (pwd.value != "" && pwd.value == pwd1.value && pwd.value == username.value && pwd.value.length < 6) {
                            alert("Error: Username & Password must be different & Password must contain at least six characters & Password & Confirm Password values should be same!");
                            return false;
                        } else {
                            re = /[0-9]/ && /[a-z]/ && /[A-Z]/;
                            if (!re.test(pwd.value)) {
                                alert("Error: password must contain at least one number (0-9), one lowercase letter (a-z), one uppercase letter (A-Z)!");
                                return false;
                            } else {
                                sendRequest();
                                return true;
                            };
                        };
                    };
                };
            };
        };
    }




function sendRequest (keyword) {
    $.ajax({
        url: '/http://localhost:8000/register', 
        type: 'Post',
        data: {
            "input": {
                "username": "admin",
                "pwd": "Password%1"
            }
        },
        success: myLogin(data)
    });
}

function sendRequesta (keyword) {
    $.ajax({
        url: '/http://localhost:8000/login', 
        type: 'Post',
        data: {
            "input": {
                "username1": "admin",
                "pwd11": "Password%1"
            }
        },
        success: myLogin()
    });
}



// // console.log(a.value)
// // console.log(b.value)
// // console.log(c.value)

function myLogin(data) {
    window.location.assign("http://localhost:8000/finaldisplay");
}


