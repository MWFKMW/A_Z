function alertSwal(text, type) {
    alert(type + ' : ' + text)
}



function validateValueNumberSize(input) {
    const regex = /^[0-9 px rem %]+$/;

    if (input && !input.match(regex) || input.length > 10) {
        alertSwal('the balance must be just a number or you are over the limit!', 'error')
        return false
    }
    return true
}


function validateText(input, title) {
    if (!input || input.length < 5 || input.length > 300) {
        alertSwal(title + ' must be at least 5 characters and least 300 characters!', 'error');
        return false;
    }
    return true
}




function validatePasswordNullBale(input) {
    if (input) {
        if (input.length < 8 || input.search(/[a-z]/) < 0 || input.search(/[A-Z]/) < 0 || input.search(/[0-9]/) < 0) {
            alertSwal('password must be at least 8 characters and contain at least one lowercase and uppercase letter and contain at least one number!', 'error');
            return false;
        }
        return true;
    }
    return true;
}


function validation(inputs) {
    if (!inputs.includes(false)) {
        return true
    }
}

