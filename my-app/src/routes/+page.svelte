<!-- <script>
 console.log("hello")
 import { onMount } from 'svelte';
 import Help from '$lib/components/Help.svelte';
 
 onMount(() => {
     let chatButton = document.querySelector(".chat-open");
     let chat = document.querySelector("aside");
     let chatClose = document.querySelector(".chat-close");
     console.log("hello")

    chatButton.addEventListener("click", showChat);
    chatClose.addEventListener("click", closeChat);

    function showChat() {
      aside.classList.add("chat-shown");
      console.log("hello")
    }
    function closeChat() {
    aside.classList.remove("chat-shown");
    }
  });

</script> -->

<script>
     import Help from '$lib/components/Help.svelte';
</script>

<main>

    <button class="chat-open">Hulp nodig?</button>

    <aside>
        <Help/>
    </aside>

</main>

<style>

    main{
        display: flex;
        justify-content: flex-end;
    }

    .chat-open{
        rotate: -90deg;
        margin-top: 50vh;
        margin-right: -2rem;
        background: #FF0000;
        border-radius: 0.5rem;
        border:none;
        color: white;
        padding: 1rem;
    }

    aside{
        display: none;
        margin-right: -50rem;
    }

    .chat-shown{
        animation-name: chat-shown;
        animation-duration: 0.6s;
        animation-iteration-count: 1;
    }
        @keyframes design {
      0% {
        margin-right: -50rem;
      }
      100% {
        margin-right: 50rem;
      }
    }


</style>