//counter var maintains number of textboxes and give them unique id for later reference
var intTextBox = 0;

/*
rmoves text field dynamically
check if counter is more than zero then remove the div element with the counter id and reduce the counter
if counter is zero then show alert as no existing textboxes are there
*/
function removeTextField() {
    if(0 < intTextBox) {
        document.getElementById('content').removeChild(document.getElementById('div_' + intTextBox));
        intTextBox--;
    } else {
        alert("No textbox to remove");
    }
}

//adds a text field
function addTextField() {
    intTextBox++;
    var objNewDiv = document.createElement('div');
    objNewDiv.setAttribute('id', 'div_' + intTextBox);
    objNewDiv.innerHTML = 'Textbox ' + intTextBox + ': <input type="text" id="tb_' + intTextBox + '" name="tb_' + intTextBox + '"/>';
    document.getElementById('content').appendChild(objNewDiv);
}
