<script>
    
</script>

<section>
    <div>
        <h3>Vragen over je betalingen?</h3>
        <button>
            <img src="src/lib/assets/close.svg" alt="sluit chat">
        </button>    
    </div>  

    <div class="conversation">
        <article class="received">
            <p>Hoi! Ik ben de chatbot van oba.nl. Waar kan ik je mee helpen?</p>
        </article>
        <article class="sent">
            <p>Hoe kan ik het tegoed van mijn pas opwaarderen?</p>
        </article>
        <article class="received">
            <p>Hoi! Ik ben de chatbot van oba.nl. Waar kan ik je mee helpen?</p>
        </article>
        <article class="sent">
            <p>Hoe kan ik het tegoed van mijn pas opwaarderen?</p>
        </article>
    </div>

    <div>
        <input type="text" placeholder="Typ hier je vraag">
        <button>
            <img src="src/lib/assets/send.svg" alt="stuur bericht">
        </button>  
    </div>  

</section>

<style>

    section{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100vw;
        height: 100vh;
        border: solid black 0.25rem;
        background: #E3E9F9;
    }

    div{
        display: flex;
        justify-content: space-between;
        padding: 1rem;
    }

    .conversation{
        flex-direction: column;
        font-size: 0.9rem;
        margin-top: -20rem;
    }

    article{
        display: inline-block;
        background: #F5F5F5;
        border-radius: 0.5rem;
        padding: 1rem;
        margin-bottom: 1rem;
    }

    .received{
        max-width: 70vw;
    }

    .sent{
        margin-left: 10vw;
    }

    button{
        border: none;
        background: transparent;
    }

    input{
        border-radius: 0.5rem;
        border: none;
        width: 80vw;
        text-indent: 1rem;
    } 

@media only screen and (min-width: 770px) {

    section{
        width: 33vw;
        height: 75vh;
        margin-top: 12.5vh;
    }

}



</style>