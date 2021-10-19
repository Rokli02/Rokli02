var registratedUsers = [];
function checkFields() {
    let fields = ['lastname','firstname', 'settlement', 
                  'settleNum', 'email', 'emailconf', 
                  'passw', 'passwconf'];
                  
    let goodField = new Array(8);
    goodField[2] = true;
    goodField[3] = true;
    goodFields(fields);

    for(let i = 0; i < fields.length; i++) {
        if(i == 2 || i == 3)
            continue;
        goodField[i] = isFieldFilled(fields[i]);
    }

    //Vezetéknév [0]
    if(atleast2Long(fields[0]) && validLastName(fields[0]) && goodField[0]) {
        goodField[0] = true;
    } else {
        goodField[0] = false;
    }

    //Keresztnév [1]
    if(atleast2Long(fields[1]) && goodField[1]) {
        goodField[1] = true;
    } else {
        goodField[1] = false;
    }

    //Település [2]
    if(isFieldFilled[2]) {
        if(atleast2Long(fields[2])) {
            goodField[2] = true;
        } else {
            goodField[2] = false;
        }
    }

    //Irányítószám [3]
    if(isFieldFilled[3]) {
        if(validSettleNum(fields[3])) {
            goodField[3] = true;
        } else {
            goodField[3] = false;
        }
    }

    //Email [4]
    if(validEmail(fields[4]) && goodField[4]){
        goodField[4] = true;
    } else {
        goodField[4] = false;
    }
    
    //Email (még1x) [5]
    if(sameContent(fields[4], fields[5])) {
        goodField[5] = true;
    } else {
        goodField[5] = false;
    }

    //Jelszó [6]
    if(validPasswLength(fields[6]) && goodField[6]) {
        goodField[6] = true;
    } else {
        goodField[6] = false;
    }

    //Jelszó (még1x) [7]
    if(sameContent(fields[6], fields[7])) {
        goodField[7] = true;
    } else {
        goodField[7] = false;
    }

    let allFieldsGood = true;
    for(let i = 0; i < fields.length; i++) {
        if(!goodField[i]) {
            allFieldsGood = false;
            wrongField(fields[i]);
        }
    }

    if(allFieldsGood) {
        if(isInArray(getFieldValues(fields))) {
            window.alert("Már ez a személy szerepel a regisztráltak között!");
        } else {
            registratedUsers.push(getFieldValues(fields));
            console.log('Minden mező jól lett kitöltve!\n');
            for (let index = 0; index < registratedUsers.length; index++) {
                console.log(registratedUsers[index]+"\n");
            }
            clearFields(fields);
        }
    } else {
        console.log('Nem minden mező lett jól kitöltve!');
    }
 }

 function isFieldFilled(fieldID) {
    let field = document.getElementById(fieldID);
    let fieldValue = field.value;

    if(fieldValue == '' || fieldValue == ' ') {
        return false;
    }
    return true;
}
function validSettleNum(fieldID) {
    let value = $('#'+fieldID).val();

    if(value > 1000 && value < 4500)
        return true
    return false;
    
}
function validPasswLength(fieldID) {
    let value = document.getElementById(fieldID).value;
    let length = value.length;

    if(length < 6 || length > 32) {
        window.alert("A jelszónak '6' és '32' karakter hosszúságú közöttinek kell lennie.");
        return false;
    }
    return true;
}
function validEmail(fieldID) {
    let value = document.getElementById(fieldID).value;
    let regexp = "^(([a-zA-Z0-9]+)@([a-z.-]+).[a-z]{2,3})$";

    const regex = new RegExp(regexp);
    if(value.match(regex))
        return true;
    return false;
}
function atleast2Long(fieldID) {
    let value = document.getElementById(fieldID).value;
    let length = value.length;

    if(length > 2)
        return true;
    return false;
}
function validLastName(fieldID) {
    let value = document.getElementById(fieldID).value;
    return !value.includes(' ');
}
function sameContent(fieldID1, fieldID2) {
    let value1 = document.getElementById(fieldID1).value;
    let value2 = document.getElementById(fieldID2).value;

    if(value1 == value2)
        return true;
    return false;
}

function wrongField(fieldID) {
     $('#'+fieldID).css({'border' : '4px solid rgb(182, 12, 12)', 'background-color' : 'rgb(245, 108, 108)'});
}
function goodFields(fields) {
    for(let i = 0; i < fields.length; i++) {
        $('#'+fields[i]).css({'border' : '2px solid black', 'background-color' : 'rgb(216, 230, 218)'});
    }
    
}
function getFieldValues(fields) {
    let values = '';
    let value;

    for(let i = 0; i < fields.length; i++) {
        if(i == 5 || i == 7) {
        }
        else {
            value = document.getElementById(fields[i]).value;
            values += value + ";";
        }
        
    }
    return values;
}
function isInArray(user) {
    for (let index = 0; index < registratedUsers.length; index++) {
        if(user == registratedUsers)
            return true;
    }
    return false;
}
function clearFields(fields) {
    for (let index = 0; index < fields.length; index++) {
        $('#'+fields[index]).val('');
    }
}