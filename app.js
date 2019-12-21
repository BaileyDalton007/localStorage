document.addEventListener("DOMContentLoaded", function() { 
    for (let i = 0; i < localStorage.length; i++){
        document.getElementById("lastEntries").innerText += localStorage.getItem(localStorage.key(i)) + "\n";
    } 
});

const store = () => {
    const d = new Date();
    const date = d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear();
    const time = d.getSeconds() + d.getHours + d.getMinutes;
    const waterAmount = Number(document.forms['inputField']['waterAmount'].value)
    const output = date +"  "+ waterAmount +"oz";
    
    localStorage.setItem(date + time, output);
    
}

