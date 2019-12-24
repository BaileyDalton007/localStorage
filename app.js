//localStorage.clear();

document.addEventListener("DOMContentLoaded", function() {
    sortArray = [];
    for (let i = 0; i < localStorage.length; i++) {
        sortArray.push([Number(localStorage.key(i).substring(5)), localStorage.getItem(localStorage.key(i))]);
        sortArray = sortArray.sort(function(a, b){return a[0]-b[0]});
    }

    for (let i = 0; i < sortArray.length; i++) {
                document.getElementById("lastEntries").innerText += sortArray[i][1] + "\n";
            }
        }
    
    );

const clearEntries = () => {
    localStorage.clear();
    console.log('cleared');
    window.location.reload();
}

const store = () => {
    const d = new Date();
    const date = d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear();
    const waterAmount = Number(document.forms['inputField']['waterAmount'].value)
    const output = date +"  "+ waterAmount +"oz";
    
    const currId = "entry" + (localStorage.length + 1);

    localStorage.setItem(currId, output);
}