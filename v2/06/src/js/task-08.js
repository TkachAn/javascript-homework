const user = {};
const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // console.log(formData);
    formData.forEach((value,name)=>{
        // console.log('name:',name);
        // console.log('value:',value); 
        console.log(name,value);
        if(!value || !name){
            alert("Не все поля формы заполнены!");
            return;
          
        }else{
            // user = `${name}: ${value}`;
          user = name;
          user = value;
            console.log(user); 
            form.reset();
        }
         
    })
}

