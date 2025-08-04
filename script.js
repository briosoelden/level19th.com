document.addEventListener("DOMContentLoaded", function () {
  const trigger = document.getElementById("revealTrigger");
  const letter = document.getElementById("Happy 19th Birthday Sissy");
  const music = document.getElementById("hermusic");

  let hasPlayed = false;
  let isOpen = false;

  trigger.addEventListener("click", function () {
    isOpen = !isOpen;

    if (isOpen) {
      letter.classList.remove("hidden");
      trigger.textContent = "Happy 19th Birthday Sissy";

      if (!hasPlayed) {
        music.play();
        hasPlayed = true;
      }

    } else {
      letter.classList.add("hidden");
      trigger.textContent = "Happy 19th Birthday Sissy";
    }
  });
});