document.querySelectorAll(".carrossel__faixa").forEach((faixa) => {
  const grupo = faixa.querySelector(".carrossel__grupo");

  if (!grupo) {
    return;
  }

  const copia = grupo.cloneNode(true);
  copia.setAttribute("aria-hidden", "true");
  faixa.append(copia);
});

const botaoCompartilhar = document.querySelector("#botao-compartilhar");
const textoCompartilhar = botaoCompartilhar?.querySelector("span");

botaoCompartilhar?.addEventListener("click", async () => {
  const textoOriginal = "Compartilhar esta página";

  try {
    if (navigator.share) {
      await navigator.share({
        title: document.title,
        text: "Conheça a Diva de Chapéu!",
        url: window.location.href,
      });
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
    textoCompartilhar.textContent = "Link copiado";
  } catch (erro) {
    if (erro.name !== "AbortError") {
      textoCompartilhar.textContent = "Não foi possível compartilhar";
    }
  }

  window.setTimeout(() => {
    textoCompartilhar.textContent = textoOriginal;
  }, 2200);
});
