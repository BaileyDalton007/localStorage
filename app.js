//localStorage.clear();

document.addEventListener("DOMContentLoaded", function() {
    sortArray = [];
    for (let i = 0; i < localStorage.length; i++) {
        sortArray.push([localStorage.key(i), localStorage.getItem(localStorage.key(i))]);
        sortArray = sortArray.sort();
        
    }
    console.log(sortArray);
    for (let i = 0; i < sortArray.length; i++) {
                document.getElementById("lastEntries").innerText += sortArray[i][1] + "\n";
            }
        }
    
    );

const store = () => {
    const d = new Date();
    const date = d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear();
    const time = d.getSeconds() + d.getHours + d.getMinutes;
    const waterAmount = Number(document.forms['inputField']['waterAmount'].value)
    const output = date +"  "+ waterAmount +"oz";
    
    const currId = "entry" + (localStorage.length + 1);

    localStorage.setItem(currId, output);
    console.log(localStorage)
}