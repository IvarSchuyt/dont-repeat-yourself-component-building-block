<script defer>

  import Help2 from '$lib/components/Help2.svelte';

 console.log("hello")
  
//  import { onMount } from 'svelte';
//  onMount(() => {
//      let chat = document.querySelector("aside");
//      let chatButton = document.querySelector(".button-chat")
     
//     chatButton.addEventListener("click", showChat);
//     function showChat() {
//     chat.classList.toggle("chat-hidden");
//     chat.classList.toggle("chat-shown");
//     chatButton.hidden = true;
//     chatButton.classList.toggle("button-chat")
//     }
//   });

</script>

<main>

    <!-- <button class="button-chat">Hulp nodig?</button> -->

    <!-- <aside class="chat-hidden"> -->
        <Help2/>
    <!-- </aside> -->

</main>

<style>

    main{
        display: flex;
        justify-content: flex-end;
    }

    .button-chat{
        rotate: -90deg;
        margin-top: 50vh;
        margin-right: -2rem;
        background: #FF0000;
        border-radius: 0.5rem;
        border:none;
        color: white;
        padding: 1rem;
    }

    .chat-hidden{
        display: none;
        margin-right: -50rem;
    }

    .chat-shown{
        display: block;
        animation-name: chat-shown;
        animation-duration: 0.6s;
        animation-iteration-count: 1;
    }
        @keyframes chat-shown {
      0% {
        margin-right: -50rem;
      }
      100% {
        margin-right: 50rem;
      }
    }


</style>

<!-- import { onMount } from 'svelte';
onMount(() => {
    let chat = document.querySelector("aside");
    let chatButton = document.querySelector(".chat-open");
    let chatClose = document.querySelector(".chat-close");
    console.log(chat)

   chatButton.addEventListener("click", showChat);
   chatClose.addEventListener("click", closeChat);

   function showChat() {
   chat.classList.add("chat-shown");
   }
   function closeChat() {
   chat.classList.remove("chat-shown");
   }
 }); -->