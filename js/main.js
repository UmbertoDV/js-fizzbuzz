const listEl = document.getElementById("list");

for (let i = 1; i <= 100; i++){

    let ItemEl = document.createElement("li")
    ItemEl.innerHTML = i;
    ItemEl.classList.add("box")
    listEl.append(ItemEl)

    if(i % 3 == 0){
        ItemEl.classList.add("fizz")
        ItemEl.innerHTML = ("FIZZ")
    }
    else if(i % 5 == 0){
        ItemEl.classList.add("buzz")
        ItemEl.innerHTML = ("BUZZ")
    }
    else if((i % 3 == 0) && (i % 5 == 0)){
        ItemEl.classList.add("fizz-buzz")
        ItemEl.innerHTML = ("FIZZ BUZZ")
    }
}