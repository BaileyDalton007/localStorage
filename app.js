// localStorage.clear();

const store = () => {
    let d = new Date();
    let date = d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear();
    let waterAmout = Number(document.forms['inputField']['waterAmount'].value)
    let output = date +"  "+ waterAmout +"oz";
    
    localStorage.setItem(output, 0);

    for (i = 0; i < localStorage.length; i++){
        console.log(localStorage.key(i));
    }
    return false;
}