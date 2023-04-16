
export function input(day: Function, placeholder: string) {

    let form = document.createElement("form")
    let text = document.createElement("input");
    let btn = document.createElement("BUTTON")
    text.type = "text";
 
    btn.setAttribute("class", "button");
    text.setAttribute("class", "inputBox");
    text.setAttribute("class", "text")


    text.setAttribute("placeholder", placeholder)
    
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(text.value)
        day(text.value);
    })


    form.append(text, btn);

    document.body.appendChild(form)

    return



}



