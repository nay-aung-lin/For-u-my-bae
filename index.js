document.addEventListener('DOMContentLoaded', function () {
    let envelope = document.getElementById('envelope');

    // Add event listeners for clicks
    envelope.addEventListener('click', openEnvelope);

    function openEnvelope() {
        envelope.classList.toggle('open');
        envelope.classList.toggle('close');


        const dynamiText = document.querySelector(".line2 span");

        const words = ["","Happy One Monthsaryပါနော်","တစ်လအတွင်းအနားမှာ","ရှိပေးခဲ့ပြီး" ,"ပျော်ရွှင်ခဲ့ရတာတွေအတွက်","အများကြီးကျေးဇူးတင်ပါတယ်"];

        let wordIndex = 0;
        let charIndex = 1;
        let isDeleting = false;

        const typeEffect = () => {  
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0,charIndex);
        dynamiText.textContent = currentChar;

        if(!isDeleting && charIndex <= currentWord.length){
            charIndex++;
            setTimeout(typeEffect,50);
        }else if(isDeleting && charIndex > 0){
            charIndex--;
            setTimeout(typeEffect,10);
            

        }
        else {
            if (wordIndex === words.length - 1 && !isDeleting) {
                // Stop the recursion when the last word is fully typed.
                return;
            }
    
            isDeleting = !isDeleting;
    
            // Increment wordIndex only when not deleting, and loop within bounds.
            if (!isDeleting) {
                wordIndex++;
            }
            setTimeout(typeEffect, 1200);
        }

}

        typeEffect();


            }

});


