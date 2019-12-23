//localStorage.clear();

document.addEventListener("DOMContentLoaded", function() {
    sortArray = [];
    for (let i = 0; i < localStorage.length; i++){
        sortArray.push(localStorage.key(i));

        let postArray = sortArray.sort(function(a, b) {
            return a - b;
        });

        console.log(postArray);
        //document.getElementById("lastEntries").innerText += localStorage.getItem(localStorage.key(i)) + "\n";
    } 
});

const store = () => {
    const d = new Date();
    const date = d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear();
    const time = d.getSeconds() + d.getHours + d.getMinutes;
    const waterAmount = Number(document.forms['inputField']['waterAmount'].value)
    const output = date +"  "+ waterAmount +"oz";
    
    let currId = localStorage.length + 1;

    localStorage.setItem(currId, output);
}