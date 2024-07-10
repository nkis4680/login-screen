function makePwdToggler(pwd){
   var checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            var id = pwd.id + 'toggler';
            checkbox.setAttribute('id', id);

            var label = document.createElement('label');
            label.setAttribute('for', id);

            // Add class to label
            label.classList.add('show-password-label');

            // Add initial text to label
            var labelText = document.createTextNode('show password');
            label.appendChild(labelText);

            var div = document.createElement('div');
            div.appendChild(checkbox);
            div.appendChild(label);

            // Add show-password checkbox under password input
            pwd.insertAdjacentElement('afterend', div);

            // Add toggle password callback
            function toggle() {
                if (pwd.type === 'password') {
                    pwd.type = 'text';
                    labelText.nodeValue = 'hide password';
                } else {
                    pwd.type = 'password';
                    labelText.nodeValue = 'show password';
                }
            }
            checkbox.onclick = toggle;
            // For non-mouse usage
            checkbox.onkeydown = toggle;
}

function setupPwdTogglers(){
   
  var pwdInputs = document.querySelectorAll('input[type=password]');
   console.log(pwdInputs,"pwdInputs");
  for (var i = 0; i < pwdInputs.length; i++) {
    makePwdToggler(pwdInputs[i]);
  }
}
setupPwdTogglers();
alert("hello");
