const toCurrency = (price) => {
  return new Intl.NumberFormat("uk-UK", {
    currency: "UAH",
    style: "currency",
  }).format(price);
};

const maxTextLengt = (text, num = 40) => {
  if (String(text).length >= num) {
    return String(text).slice(0, num) + "...";
  }

  return String(text);
};

document.querySelectorAll(".price").forEach((node) => {
  node.textContent = toCurrency(node.textContent);
});

const $card = document.querySelector("#card");
if ($card) {
  $card.addEventListener("click", (event) => {
    if (event.target.classList.contains("js-remove")) {
      const id = event.target.dataset.id;
      const csrf = event.target.dataset.csrf;

      fetch("/card/remove/" + id, {
        method: "delete",
        headers: {
          "X-XSRF-TOKEN": csrf,
        },
      })
        .then((res) => res.json())
        .then((card) => {
          if (card.courses.length) {
            const html = card.courses
              .map((c) => {
                return `
              <tr>
                <td>${c.title}</td>
                <td>${c.count}</td>
                <td>
                  <button class="btn btm-small js-remove" data-id="${c.id}">Удалить</button>
                </td>
              </tr>
              `;
              })
              .join("");
            $card.querySelector("tbody").innerHTML = html;
            $card.querySelector(".price").textContent = toCurrency(card.price);
          } else {
            $card.innerHTML = "<p>Корзина пуста</p>";
          }
        });
    }
  });
}

const toDate = (date) => {
  return new Intl.DateTimeFormat("uk-UK", {
    day: "2-digit",
    mounth: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date(date));
};

document.querySelectorAll(".date").forEach((node) => {
  node.textContent = toDate(node.textContent);
});

M.Tabs.init(document.querySelectorAll(".tabs"));

document
  .querySelectorAll("#text-title")
  .forEach((node) => (node.textContent = maxTextLengt(node.textContent)));
