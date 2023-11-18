import { onMount } from "svelte";

onMount(() => {
  let chatButton = document.querySelector(".chat-open");
  let chat = document.querySelector("aside");
  let chatClose = document.querySelector(".chat-close");

  chatButton.addEventListener("click", showChat);
  chatClose.addEventListener("click", closeChat);

  function showChat() {
    aside.classList.add("chat-shown");
  }
  function closeChat() {
    aside.classList.remove("chat-shown");
  }
});
