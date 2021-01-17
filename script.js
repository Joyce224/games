function shuffleEmoji(arr){
    return arr.sort(() => Math.random()-0.5)
}

function coupleArr(arr){
    return [].concat(arr, arr)
}

function fillCards(carda, emoji){
  cards.forEach((cart, index)=>{card.textContent = emoji[index]});
}




(function init(){
    const emoji = "👻 💀 ☠️ 👽 👾 🤖".split(" ")
    const cards = document.querySelectorAll(".card")
    const shuffleArr = shuffleEmoji(coupleArr(emoji));
    fillCards(cards, shuffleArr);
    cards.forEach((card) => {card.addEventListener("click", clickEvent); })
})

function clickEvent(){
    const opened = this.classList.contains("open");
    if (!opened){
        this.classlist.remove("close");
        this.classlist.add("open");
    } else {
        this.classlist.remove("close");
        this.classlist.add("open");
    } 
}