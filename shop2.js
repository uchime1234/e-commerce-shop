const background = document.querySelector(".background");
const canva = document.querySelector(".canva");
const cancel = document.getElementById("cancel");
const sales = document.getElementById("sales");
const excute = document.getElementById("excute");


sales.addEventListener("click", function () {
  background.style.visibility = "visible";
  canva.style.visibility = "visible";
});

cancel.addEventListener("click", function () {
  background.style.visibility = "hidden";
  canva.style.visibility = "hidden";
});


  

function duplicateContainer() {
    const holdContainer = document.querySelector('.hold-container');
    const originalContainer = document.querySelector('.container');
    const videoInput = document.querySelector('.videoinput');
    const productinput = document.querySelector(".pro").value;
    const priceinput = document.querySelector(".pri").value;
    const whatsappinput = document.querySelector(".wha").value;
    const companyinput = document.querySelector(".com").value;





    const clone = originalContainer.cloneNode(true); // Clone the container with its children
    const productclone = clone.querySelector(".product");
    const companyclone = clone.querySelector(".company");
    const priceclone = clone.querySelector(".price");
    const whatsappclone = clone.querySelector(".whatsapp");

    // Get the video player from the cloned container
    const clonedVideoPlayer = clone.querySelector('video')
    
   
    // Access the selected file from the original video input
    const selectedFile = videoInput.files[0];
    
    //map the inputs to the clone textcontent
      productclone.textContent = productinput;
      companyclone.textContent = companyinput;
      priceclone.textContent = priceinput;
      whatsappclone.textContent = whatsappinput;





    
     
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      clonedVideoPlayer.src = url;
      clonedVideoPlayer.play();
    }
       
  
    // Append the clone to the hold container
    holdContainer.appendChild(clone);
  }

  


  excute.addEventListener("click", function () {
    duplicateContainer();
    
  })