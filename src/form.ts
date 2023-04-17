
export function input(day: Function, placeholder: string) {

    let form = document.createElement("form")
    let text = document.createElement("textarea");
    let btn = document.createElement("BUTTON")

 
    btn.setAttribute("class", "button");
    text.setAttribute("class", "inputBox text");
    text.setAttribute("placeholder", placeholder);
    btn.style.padding = "10px";
    
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(text.value)
        day(text.value);
    })


    form.append(text, btn);

    document.body.appendChild(form)

    return



}



