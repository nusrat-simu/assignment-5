const menuToggle = document.getElementById("menuToggle");
 const menuItems = document.getElementById("menuItems");

 menuToggle.addEventListener("click", () => {
     menuItems.classList.toggle("hidden")
 });



 const heartBtn = document.getElementById("heartBtn");
 let heartBtnValue = parseInt(heartBtn.innerText);
 const likeCount = document.getElementsByClassName("likeCount");


 for (let i = 0; i < likeCount.length; i++) {
     likeCount[i].addEventListener("click", () => {
         heartBtnValue++;
         heartBtn.innerText = heartBtnValue;
     });
    }
let coin = 100;
const coinCount = document.getElementById("coinCount");
const callHistoryItems = document.getElementById("callHistoryItems");

 function updateCoinCount(serviceName, serviceNumber) {
     if (coin < 20) {
         alert("❌ আপনার কাছে পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন প্রয়োজন।");
     } else {
         alert(`📞Calling ${serviceName} ${serviceNumber}...`);

         coin -= 20;
         coinCount.innerText = coin;

         const div = document.createElement("div");
         div.innerHTML = `
     <div class="bg-white p-5 rounded-lg shadow-md mt-5 flex justify-between items-center">
                <div class="">
                    <h2 class="mt-2 font-bold text-black mb-2">${serviceName}</h2>
                    <p class="text-gray-500">${serviceNumber}</p>
                </div>
                <div>
                    <p class="text-black">${new Date().toLocaleTimeString()}</p>
                </div>
            </div>
     `;