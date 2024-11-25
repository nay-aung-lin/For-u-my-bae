document.addEventListener('DOMContentLoaded', function () {
    let envelope = document.getElementById('envelope');
    let typingEffectInstance = null; // Store the typing effect instance.
    let heart = document.querySelector('.line3 span');

    // Add event listeners for clicks
    envelope.addEventListener('click', openEnvelope);

    function openEnvelope() {
        // Toggle classes for animation
        const wasClosed = envelope.classList.contains('close'); // Check if it was "close"
        envelope.classList.toggle('open');
        envelope.classList.toggle('close');

        if (wasClosed) {
            // If transitioning from "close" to "open," restart the typing effect
            restartTypingEffect();
        }
    }

    function restartTypingEffect() {
        // Stop any ongoing typing effect
        if (typingEffectInstance) {
            clearTimeout(typingEffectInstance); // Clear any pending timeout
        }

        const dynamiText = document.querySelector(".line2 span");
        const words =["", "Happy One Monthsaryပါနော်", "ဒီတစ်လအတွင်းမှာ", "ပျော်ရွှင်ခဲ့ရတာတွေအတွက်", "အများကြီး ကျေးဇူးတင်ပါတယ်","အချိန်တွေအကြာကြီး အနားမှာ","အတူတူ ရှိချင်ပါတယ်နော်","အများကြီး ချစ်တယ် 💕"] ;


        // Reset variables
        let wordIndex = 0;
        let charIndex = 1;
        let isDeleting = false;

        const typeEffect = () => {
            const currentWord = words[wordIndex];
            const currentChar = currentWord.substring(0, charIndex);
            dynamiText.textContent = currentChar;

            if (!isDeleting && charIndex <= currentWord.length) {
                charIndex++;
                typingEffectInstance = setTimeout(typeEffect, 50);
            } else if (isDeleting && charIndex > 0) {
                charIndex--;
                typingEffectInstance = setTimeout(typeEffect, 10);
            } else {
                if (wordIndex === words.length - 1 && !isDeleting) {
                   
                    // Stop recursion when the last word is fully typed
                    typingEffectInstance = null; // Clear the instance
                    
                    return;
                }

                isDeleting = !isDeleting;

                if (!isDeleting) {
                    wordIndex++;
                }

                typingEffectInstance = setTimeout(typeEffect, 1200);
            }
        };

        // Start typing effect
        typeEffect();
    }
});


