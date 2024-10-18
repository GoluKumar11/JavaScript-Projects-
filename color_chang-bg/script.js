const buttons = document.querySelectorAll(".button");
const bodyHtml = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);

  button.addEventListener('click', function(Golu) {
    console.log(Golu);
    console.log(Golu.target);

    if(Golu.target.id == 'grey'){
      bodyHtml.style.backgroundColor = Golu.target.id;
    }

    if(Golu.target.id == 'white'){
      bodyHtml.style.backgroundColor = Golu.target.id;
    }

    if(Golu.target.id == 'blue'){
      bodyHtml.style.backgroundColor = Golu.target.id;
    }
    if(Golu.target.id == 'yellow'){
      bodyHtml.style.backgroundColor = Golu.target.id;
    }
    if(Golu.target.id == 'green'){
      bodyHtml.style.backgroundColor = Golu.target.id;
    }
  })
})