function showSurprise() {
    document.getElementById("surprise").innerText =
        "🎉 آپ جیسے لوگ زندگی کو خوبصورت بنا دیتے ہیں 😊";
}
function playVoice() {
    document.getElementById("birthdayAudio").play();
}
const playButton = document.getElementById("playButton");
const birthdayAudio = document.getElementById("birthdayAudio");

playButton.addEventListener("click", function() {
    birthdayAudio.play();

    // Animation for images
    const images = document.querySelectorAll(".birthday-images img");
    images.forEach(img => {
        img.classList.add("animate");
    });

    // Remove animation after 0.5s
    setTimeout(() => {
        images.forEach(img => img.classList.remove("animate"));
    }, 500);
});
