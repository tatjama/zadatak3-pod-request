const emailInput = document.querySelector("input[type=email]");
const submitButton = document.getElementById("submit");
const errorMessage =   document.querySelector(".error-message"); 

const outsideClick = (e) => {
  let targetElement = e.target;
  if(targetElement != submitButton){
    errorMessage.style.visibility = "hidden";
    errorMessage.style.color = "var(--text-error)"
    emailInput.value = "";
}
}

const  handleOnSubmit = (e) => {
  e.preventDefault();
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;           
    if (!emailInput.value){
        errorMessage.innerText = "Oops! Please add your email"
        errorMessage.style.visibility = "visible";
    } else{
        if(!emailInput.value.match(mailformat)){                    
          errorMessage.innerText = "Oops! Please check your email";
          errorMessage.style.visibility = "visible";
        }else{
          errorMessage.innerText = `Hello ${emailInput.value}`;
          errorMessage.style.visibility = "visible";
          errorMessage.style.color = "var(--primary-green)";
        }
    }
  }
  document.addEventListener("click",(e)=> outsideClick(e));
  submitButton.addEventListener("click",(e) => handleOnSubmit(e));
