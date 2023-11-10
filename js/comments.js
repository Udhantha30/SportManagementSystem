
// message send button

var sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", function () {
    console.log("hello");

    if (!isAnyRadioButtonSelected()) {
        document.getElementById("message-1").style.display="flex";
    } else{
        document.getElementById("message-1").style.display="none";
    }

    if (document.getElementById("reasons").value.trim() === "") {
        document.getElementById("message-2").style.display="flex";
    } else{
        document.getElementById("message-2").style.display="none";
    }

    if (!isOptionSelected1()) {
        document.getElementById("message-3").style.display="flex";
    }  else{
        document.getElementById("message-3").style.display="none";
    }

    if (!isOptionSelected2()) {
        document.getElementById("message-4").style.display="flex";
    } else{
        document.getElementById("message-4").style.display="none";
    }

    if(!isAnyRadioButtonSelected()){

    }else if(document.getElementById("reasons").value.trim() == ""){

    }else if(!isOptionSelected1()){

    }else if(!isOptionSelected2()){

    }else{
        document.getElementById("thanks-message").classList.toggle("active");
        document.getElementById("thanks-content").classList.toggle("active");
        document.body.style.overflow = 'hidden';
    }
    
});

const radioButtons = document.getElementsByName("radio");

function isAnyRadioButtonSelected() {
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            return true;
        }
    }
    return false;
}

const selectElement1 = document.getElementById("select-1");

function isOptionSelected1() {
    const selectedValue = selectElement1.value;
    return selectedValue !== "";
}

const selectElement2 = document.getElementById("select-2");

function isOptionSelected2() {
    const selectedValue = selectElement2.value;
    return selectedValue !== "";
}