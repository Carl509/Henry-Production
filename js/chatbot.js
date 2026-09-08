document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     BOUTON DU CHATBOT
  ========================= */
  const chatButton = document.createElement("button");

  chatButton.id = "hp-chat-button";
  chatButton.setAttribute(
    "aria-label",
    "Ouvrir le chatbot Henry Production"
  );
  chatButton.innerHTML = "💬";

  /* =========================
     FENÊTRE DU CHATBOT
  ========================= */
  const chatBox = document.createElement("div");

  chatBox.id = "hp-chatbox";

  chatBox.innerHTML = `
    <div class="hp-chat-header">
      <div>
        <strong>Henry Production</strong>
        <small>Assistant en ligne</small>
      </div>

      <button id="hp-chat-close" aria-label="Fermer">
        ×
      </button>
    </div>

    <div id="hp-chat-messages" class="hp-chat-messages">

      <div class="hp-msg hp-bot">
        Bonjour ! Bienvenue chez Henry Production.
        Comment puis-je vous aider ?
      </div>

    </div>

    <div class="hp-chat-quick">

      <button data-msg="Quels produits proposez-vous ?">
        Produits
      </button>

      <button data-msg="Quels sont vos prix ?">
        Prix
      </button>

      <button data-msg="Je veux commander">
        Commander
      </button>

    </div>

    <form id="hp-chat-form" class="hp-chat-form">

      <input
        id="hp-chat-input"
        type="text"
        placeholder="Écrivez votre message..."
        autocomplete="off"
        required
      >

      <button type="submit">
        ➤
      </button>

    </form>
  `;

  document.body.appendChild(chatButton);
  document.body.appendChild(chatBox);


  /* =========================
     ÉLÉMENTS
  ========================= */

  const messages =
    document.getElementById("hp-chat-messages");

  const input =
    document.getElementById("hp-chat-input");

  const form =
    document.getElementById("hp-chat-form");

  const closeButton =
    document.getElementById("hp-chat-close");


  /* =========================
     AJOUTER UN MESSAGE
  ========================= */

  function addMessage(text, type) {

    const message = document.createElement("div");

    message.className =
      "hp-msg " +
      (type === "user"
        ? "hp-user"
        : "hp-bot");

    message.textContent = text;

    messages.appendChild(message);

    messages.scrollTop =
      messages.scrollHeight;
  }


  /* =========================
     RÉPONSES DU CHATBOT
  ========================= */

  function getBotReply(message) {

    const text =
      message.toLowerCase().trim();


    /* SALUTATIONS */

    if (
      /bonjour|bonsoir|salut|hello|hey/.test(text)
    ) {

      return (
        "Bonjour ! Bienvenue chez Henry Production. " +
        "Que puis-je faire pour vous ?"
      );
    }


    /* PRODUITS */

    if (
      /produit|boutique|vend|vente|tableau|tasse|tumbler|bidon|porte.?clé|étui|cadeau/.test(text)
    ) {

      return (
        "Nous proposons notamment : " +
        "tableaux PVC personnalisés, tasses, " +
        "tumbler & bidons, porte-clés et étuis " +
        "de téléphone."
      );
    }


    /* PRIX */

    if (
      /prix|tarif|coût|cout|combien|cher/.test(text)
    ) {

      return (
        "Les prix dépendent du produit et du format. " +
        "Pour obtenir un prix précis, indiquez-moi " +
        "le produit et le format souhaité."
      );
    }


    /* TABLEAUX */

    if (
      /tableau|pvc/.test(text)
    ) {

      return (
        "Nous réalisons des tableaux PVC personnalisés " +
        "en plusieurs formats. Vous pouvez consulter " +
        "la boutique ou nous contacter sur WhatsApp."
      );
    }


    /* PERSONNALISATION */

    if (
      /personnalis|photo|image|logo|design|création|creation/.test(text)
    ) {

      return (
        "Oui ! Henry Production réalise des produits " +
        "personnalisés avec vos photos, logos ou designs."
      );
    }


    /* COMMANDER */

    if (
      /commande|commander|acheter|achat/.test(text)
    ) {

      return (
        "Pour commander, envoyez-nous le produit " +
        "souhaité, le format et votre personnalisation. " +
        "Vous pouvez nous contacter directement sur WhatsApp."
      );
    }


    /* WHATSAPP */

    if (
      /whatsapp|contact|téléphone|telephone|numéro|numero/.test(text)
    ) {

      return (
        "Notre WhatsApp est le +509 41 62 64 70. " +
        "Vous pouvez nous envoyer votre demande directement."
      );
    }


    /* LIVRAISON */

    if (
      /livraison|livrer|delivery/.test(text)
    ) {

      return (
        "Pour les informations de livraison, " +
        "contactez-nous sur WhatsApp avec votre zone " +
        "afin que nous puissions vous renseigner."
      );
    }


    /* MERCI */

    if (
      /merci|thanks/.test(text)
    ) {

      return (
        "Avec plaisir ! Henry Production reste à votre service."
      );
    }


    /* RÉPONSE PAR DÉFAUT */

    return (
      "Je peux vous aider concernant nos produits, " +
      "les prix, la personnalisation et les commandes. " +
      "Vous pouvez aussi nous contacter sur WhatsApp " +
      "au +509 41 62 64 70."
    );
  }


  /* =========================
     ENVOYER UN MESSAGE
  ========================= */

  function sendMessage(text) {

    text = text.trim();

    if (!text) {
      return;
    }

    addMessage(text, "user");

    input.value = "";

    setTimeout(function () {

      const response =
        getBotReply(text);

      addMessage(response, "bot");

    }, 300);
  }


  /* =========================
     OUVRIR / FERMER
  ========================= */

  chatButton.addEventListener(
    "click",
    function () {

      chatBox.classList.toggle(
        "hp-open"
      );

      if (
        chatBox.classList.contains(
          "hp-open"
        )
      ) {

        input.focus();
      }

    }
  );


  closeButton.addEventListener(
    "click",
    function () {

      chatBox.classList.remove(
        "hp-open"
      );

    }
  );


  /* =========================
     FORMULAIRE
  ========================= */

  form.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();

      sendMessage(input.value);

    }
  );


  /* =========================
     BOUTONS RAPIDES
  ========================= */

  chatBox
    .querySelectorAll(
      ".hp-chat-quick button"
    )
    .forEach(function (button) {

      button.addEventListener(
        "click",
        function () {

          sendMessage(
            button.dataset.msg
          );

        }
      );

    });

});