let durationInput = document.getElementById("duration");
let durationValue = document.getElementById("duration-value");
let horizontalAxis = document.getElementById("horizontal-axis");
let verticalAxis = document.getElementById("vertical-axis");
let messageType = document.getElementById("message-type");
let message = document.getElementById("message");
let showToastBtn = document.getElementById("show-toast");
let main = document.querySelector("main");
// console.log(durationInput);

durationInput.addEventListener('change',()=>{
    durationValue.innerText = `${durationInput.value}s`;
})



showToastBtn.addEventListener('click', function(e){
    let notifierTab = document.querySelector(`.notifier-tab[data-pos="${verticalAxis.value}-${horizontalAxis.value}"]`);
    
    if(!notifierTab){
        notifierTab = document.createElement('div');
        notifierTab.className = "notifier-tab";
        notifierTab.dataset.pos = `${verticalAxis.value}-${horizontalAxis.value}`;
        main.appendChild(notifierTab);
        notifierTab.style.display = "flex";

        notifierTab.style.top = verticalAxis.value === "top" ? "10px" : "unset";
        notifierTab.style.bottom = verticalAxis.value === "bottom" ? "10px" : "unset";
        notifierTab.style.left = horizontalAxis.value === "left" ? "10px" : "unset";
        notifierTab.style.right = horizontalAxis.value === "right" ? "10px" : "unset";
    }

    let eachNotifierTab = document.createElement('div');
    eachNotifierTab.className = "each-notifier-tab";
    notifierTab.appendChild(eachNotifierTab);
    eachNotifierTab.innerHTML = `
        <p>${message.value}</p>
        <button id="cross">✕</button>
    `;
    if(messageType.value==="success"){
        eachNotifierTab.style.backgroundColor = "#ECFDF3";
        eachNotifierTab.style.color = "#56B476"
    } else if(messageType.value==="error"){
        eachNotifierTab.style.backgroundColor = "#FFF0F0";
        eachNotifierTab.style.color = "#EF5858"
    } else if(messageType.value==="warning"){
        eachNotifierTab.style.backgroundColor = "#FFFCF0";
        eachNotifierTab.style.color = "#DC7609";
    } else if(messageType.value==="info"){
        eachNotifierTab.style.backgroundColor = "#F0F8FF";
        eachNotifierTab.style.color = "#368DE3";
    }
    
    const duration = parseInt(durationInput.value)*1000;
    setTimeout(()=>{
        notifierTab.removeChild(eachNotifierTab);
    },duration)
    // notifierTab.removeChild(eachNotifierTab);
    eachNotifierTab.querySelector('#cross').addEventListener('click', () => {
        notifierTab.removeChild(eachNotifierTab);
    });
})

