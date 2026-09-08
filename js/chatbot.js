document.addEventListener("DOMContentLoaded", function () {

  /* =====================================================
     HENRY PRODUCTION — ASSISTANT
     Un assistant simple, humain et orienté commande
  ===================================================== */

  const WHATSAPP = "50941626470";


  /* =====================================================
     BOUTON
  ===================================================== */

  const chatButton = document.createElement("button");

  chatButton.id = "hp-chat-button";
  chatButton.setAttribute(
    "aria-label",
    "Parler avec Henry Production"
  );

  chatButton.innerHTML = "💬";


  /* =====================================================
     FENÊTRE
  ===================================================== */

  const chatBox = document.createElement("div");

  chatBox.id = "hp-chatbox";

  chatBox.innerHTML = `

    <div class="hp-chat-header">

      <div>

        <strong>Henry Production</strong>

        <small>
          On peut parler de votre projet
        </small>

      </div>

      <button
        id="hp-chat-close"
        aria-label="Fermer"
      >
        ×
      </button>

    </div>


    <div
      id="hp-chat-messages"
      class="hp-chat-messages"
    >

      <div class="hp-msg hp-bot">

        Bonjour ! Bienvenue chez Henry Production.

        <br><br>

        Vous avez déjà une idée précise,
        ou vous cherchez simplement quelque chose
        à personnaliser ?

      </div>

    </div>


    <div class="hp-chat-quick">

      <button data-msg="Je cherche un produit">
        Voir les produits
      </button>

      <button data-msg="Je veux connaître les prix">
        Voir les prix
      </button>

      <button data-msg="J'ai une idée à personnaliser">
        J'ai une idée
      </button>

    </div>


    <form
      id="hp-chat-form"
      class="hp-chat-form"
    >

      <input
        id="hp-chat-input"
        type="text"
        placeholder="Écrivez-nous..."
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


  /* =====================================================
     ÉLÉMENTS
  ===================================================== */

  const messages =
    document.getElementById(
      "hp-chat-messages"
    );

  const input =
    document.getElementById(
      "hp-chat-input"
    );

  const form =
    document.getElementById(
      "hp-chat-form"
    );

  const closeButton =
    document.getElementById(
      "hp-chat-close"
    );


  /* =====================================================
     AJOUT MESSAGE
  ===================================================== */

  function addMessage(text, type) {

    const message =
      document.createElement("div");

    message.className =
      "hp-msg " +
      (
        type === "user"
          ? "hp-user"
          : "hp-bot"
      );

    message.innerHTML =
      text.replace(/\n/g, "<br>");

    messages.appendChild(message);

    messages.scrollTop =
      messages.scrollHeight;
  }


  /* =====================================================
     RÉPONSE INTELLIGENTE
  ===================================================== */

  function getBotReply(message) {

    const text =
      message
        .toLowerCase()
        .trim();


    /* -----------------------------------------------
       SALUTATIONS
    ----------------------------------------------- */

    if (
      /^(bonjour|bonsoir|salut|hello|hey|yo|coucou)/.test(text)
    ) {

      return `
        Bonjour !

        <br><br>

        Bienvenue chez Henry Production.
        Dites-moi simplement ce que vous cherchez
        et nous allons regarder ça ensemble.
      `;
    }


    /* -----------------------------------------------
       PRODUITS
    ----------------------------------------------- */

    if (
      /produit|boutique|vend|vente|catalogue|offre/.test(text)
    ) {

      return `
        Nous créons plusieurs types de produits
        personnalisés :

        <br><br>

        • Tableaux PVC<br>
        • Tasses<br>
        • Tumblers & bidons<br>
        • Porte-clés<br>
        • Étuis téléphone<br>
        • Bijoux<br>
        • Cahiers & agendas<br>
        • Maillots<br>
        • Plaques personnalisées

        <br><br>

        Si vous me dites ce que vous souhaitez offrir
        ou créer, je peux vous orienter.
      `;
    }


    /* -----------------------------------------------
       TABLEAU PVC
    ----------------------------------------------- */

    if (
      /tableau|pvc/.test(text)
    ) {

      return `
        Oui, nous faisons des tableaux PVC personnalisés.

        <br><br>

        Par exemple, le <strong>8×10 en PVC 3mm</strong>
        est à <strong>750 Gdes</strong>.

        <br><br>

        Nous avons aussi plusieurs autres formats.

        <br><br>

        Si vous me donnez la dimension que vous voulez,
        je peux vous indiquer le prix correspondant.
      `;
    }


    /* -----------------------------------------------
       PRIX TABLEAU
    ----------------------------------------------- */

    if (
      /8x10|8×10/.test(text)
    ) {

      return `
        Le tableau PVC <strong>8×10 3mm</strong>
        est à <strong>750 Gdes</strong>.
      `;
    }


    if (
      /10x12|10×12/.test(text)
    ) {

      return `
        Le tableau PVC <strong>10×12 3mm</strong>
        est à <strong>1 000 Gdes</strong>.
      `;
    }


    if (
      /10x14|10×14/.test(text)
    ) {

      return `
        Le tableau PVC <strong>10×14 3mm</strong>
        est à <strong>1 250 Gdes</strong>.
      `;
    }


    if (
      /10x16|10×16/.test(text)
    ) {

      return `
        Pour le <strong>10×16</strong> :

        <br><br>

        PVC 3mm : <strong>1 500 Gdes</strong><br>
        PVC 6mm : <strong>1 750 Gdes</strong>
      `;
    }


    if (
      /12x14|12×14/.test(text)
    ) {

      return `
        Pour le <strong>12×14</strong> :

        <br><br>

        PVC 3mm : <strong>1 750 Gdes</strong><br>
        PVC 6mm : <strong>2 000 Gdes</strong>
      `;
    }


    if (
      /12x16|12×16/.test(text)
    ) {

      return `
        Pour le <strong>12×16</strong> :

        <br><br>

        PVC 3mm : <strong>1 750 Gdes</strong><br>
        PVC 6mm : <strong>2 000 Gdes</strong>
      `;
    }


    if (
      /14x18|14×18/.test(text)
    ) {

      return `
        Pour le <strong>14×18</strong> :

        <br><br>

        PVC 3mm : <strong>2 300 Gdes</strong><br>
        PVC 6mm : <strong>2 500 Gdes</strong>
      `;
    }


    if (
      /14x20|14×20/.test(text)
    ) {

      return `
        Pour le <strong>14×20</strong> :

        <br><br>

        PVC 3mm : <strong>2 500 Gdes</strong><br>
        PVC 6mm : <strong>2 800 Gdes</strong>
      `;
    }


    if (
      /16x20|16×20/.test(text)
    ) {

      return `
        Pour le <strong>16×20</strong> :

        <br><br>

        PVC 3mm : <strong>2 800 Gdes</strong><br>
        PVC 6mm : <strong>3 000 Gdes</strong>
      `;
    }


    if (
      /18x22|18×22/.test(text)
    ) {

      return `
        Le tableau PVC <strong>18×22 6mm</strong>
        est à <strong>4 500 Gdes</strong>.
      `;
    }


    if (
      /20x26|20×26/.test(text)
    ) {

      return `
        Le tableau PVC <strong>20×26 6mm</strong>
        est à <strong>5 500 Gdes</strong>.
      `;
    }


    if (
      /22x26|22×26/.test(text)
    ) {

      return `
        Le tableau PVC <strong>22×26 6mm</strong>
        est à <strong>6 500 Gdes</strong>.
      `;
    }


    if (
      /22x28|22×28/.test(text)
    ) {

      return `
        Le tableau PVC <strong>22×28 6mm</strong>
        est à <strong>7 500 Gdes</strong>.
      `;
    }


    if (
      /24x36|24×36/.test(text)
    ) {

      return `
        Le tableau PVC <strong>24×36 6mm</strong>
        est à <strong>8 500 Gdes</strong>.
      `;
    }


    if (
      /30x40|30×40/.test(text)
    ) {

      return `
        Le tableau PVC <strong>30×40 6mm</strong>
        est à <strong>10 000 Gdes</strong>.
      `;
    }


    /* -----------------------------------------------
       TASSES
    ----------------------------------------------- */

    if (
      /tasse|mug/.test(text)
    ) {

      return `
        Pour les tasses, nous avons notamment :

        <br><br>

        • Tasse simple : <strong>200 Gdes</strong><br>
        • Tasse Magic : <strong>400 Gdes</strong>

        <br><br>

        Vous pouvez y mettre une photo,
        un prénom ou un message.
      `;
    }


    /* -----------------------------------------------
       PORTE-CLÉS
    ----------------------------------------------- */

    if (
      /porte.?clé|porte cle/.test(text)
    ) {

      return `
        Pour les porte-clés :

        <br><br>

        • Simple : <strong>250 Gdes</strong><br>
        • Double-face : <strong>300 Gdes</strong>

        <br><br>

        C'est une petite création qui peut
        faire un joli cadeau personnalisé.
      `;
    }


    /* -----------------------------------------------
       BIDONS / TUMBLERS
    ----------------------------------------------- */

    if (
      /bidon|tumbler|gourde/.test(text)
    ) {

      return `
        Oui, nous proposons plusieurs bidons
        et tumblers.

        <br><br>

        Dites-moi simplement le modèle ou la taille
        qui vous intéresse et je vous renseignerai.
      `;
    }


    /* -----------------------------------------------
       PERSONNALISATION
    ----------------------------------------------- */

    if (
      /personnalis|photo|image|logo|design|création|creation|prénom|prenom|message/.test(text)
    ) {

      return `
        Oui, c'est justement ce que nous aimons faire.

        <br><br>

        Vous pouvez partir d'une photo,
        d'un prénom, d'un logo, d'un message
        ou simplement d'une idée.

        <br><br>

        Même si votre idée n'est pas encore
        complètement définie, expliquez-la-nous.
      `;
    }


    /* -----------------------------------------------
       CADEAU
    ----------------------------------------------- */

    if (
      /cadeau|anniversaire|maman|papa|ami|amie|copain|copine|fête|fete/.test(text)
    ) {

      return `
        Pour un cadeau, le meilleur choix dépend
        surtout de la personne et de l'occasion.

        <br><br>

        Vous pouvez par exemple partir sur :
        une tasse, un tableau, un porte-clé,
        un tumbler ou un objet personnalisé.

        <br><br>

        Dites-moi <strong>pour qui est le cadeau</strong>
        et je peux vous proposer une idée.
      `;
    }


    /* -----------------------------------------------
       PRIX
    ----------------------------------------------- */

    if (
      /prix|tarif|combien|coût|cout|cher/.test(text)
    ) {

      return `
        Bien sûr.

        <br><br>

        Le prix dépend du produit et parfois
        du format.

        <br><br>

        Dites-moi par exemple :

        <br>

        <strong>« Je veux un tableau 14x18 »</strong>

        <br><br>

        et je vous donnerai le prix correspondant.
      `;
    }


    /* -----------------------------------------------
       COMMANDER
    ----------------------------------------------- */

    if (
      /commande|commander|acheter|achat|je veux prendre/.test(text)
    ) {

      return `
        Très bien.

        <br><br>

        Pour commencer, dites-moi simplement :

        <br><br>

        1. Le produit souhaité<br>
        2. Le format ou modèle<br>
        3. Ce que vous voulez personnaliser

        <br><br>

        Ensuite, nous pouvons continuer
        directement sur WhatsApp.
      `;
    }


    /* -----------------------------------------------
       WHATSAPP
    ----------------------------------------------- */

    if (
      /whatsapp|numéro|numero|téléphone|telephone|contacter|contact/.test(text)
    ) {

      return `
        Vous pouvez nous écrire directement
        sur WhatsApp :

        <br><br>

        <strong>+509 41 62 64 70</strong>

        <br><br>

        Vous pouvez également utiliser
        le bouton ci-dessous pour démarrer
        votre commande.
      `;
    }


    /* -----------------------------------------------
       LIVRAISON
    ----------------------------------------------- */

    if (
      /livraison|livrer|livré|livree|delivery|zone/.test(text)
    ) {

      return `
        Pour la livraison, indiquez-nous
        simplement votre zone.

        <br><br>

        Nous pourrons vous renseigner
        sur les possibilités disponibles
        pour votre commande.
      `;
    }


    /* -----------------------------------------------
       MONCASH / NATCASH
    ----------------------------------------------- */

    if (
      /moncash|natcash|paiement|payer|paiement/.test(text)
    ) {

      return `
        Pour le paiement, notre boutique permet
        de sélectionner <strong>MonCash</strong>
        ou <strong>NatCash</strong>.

        <br><br>

        Pour les détails du paiement,
        nous pouvons vous les confirmer
        directement lors de la commande.
      `;
    }


    /* -----------------------------------------------
       MERCI
    ----------------------------------------------- */

    if (
      /merci|thanks|thank/.test(text)
    ) {

      return `
        Avec plaisir.

        <br><br>

        Et si vous avez une idée un peu particulière,
        expliquez-la-nous. On peut toujours
        regarder ce qu'il est possible de faire.
      `;
    }


    /* -----------------------------------------------
       RÉPONSE NATURELLE PAR DÉFAUT
    ----------------------------------------------- */

    return `
      Je veux bien vous aider.

      <br><br>

      Expliquez-moi simplement ce que vous
      cherchez à créer.

      <br><br>

      Par exemple :

      <br>

      « Je cherche un cadeau pour ma mère »

      <br>

      ou

      <br>

      « Je veux un tableau 14x18 »

      <br><br>

      Et nous partirons de là.
    `;
  }


  /* =====================================================
     WHATSAPP
  ===================================================== */

  function openWhatsApp() {

    const message =
      "Bonjour Henry Production, j'aimerais avoir des informations sur une création personnalisée.";

    const url =
      "https://wa.me/" +
      WHATSAPP +
      "?text=" +
      encodeURIComponent(message);

    window.open(url, "_blank");
  }


  /* =====================================================
     ENVOYER
  ===================================================== */

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

    }, 450);
  }


  /* =====================================================
     OUVRIR / FERMER
  ===================================================== */

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


  /* =====================================================
     FORMULAIRE
  ===================================================== */

  form.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();

      sendMessage(
        input.value
      );

    }
  );


  /* =====================================================
     BOUTONS RAPIDES
  ===================================================== */

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