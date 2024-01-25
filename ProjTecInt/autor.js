document.addEventListener("DOMContentLoaded", function () {

    fetch("../autores.xml")
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "application/xml");
  
        const autores = xmlDoc.querySelectorAll("autor");
  
        const tableBody = document.getElementById("autorTableBody");
  
        autores.forEach((autor) => {
          const nome = autor.querySelector("nome").textContent;
          const email = autor.querySelector("email").textContent;
          const numero = autor.querySelector("numero").textContent;
  
          const row = document.createElement("tr");
          row.innerHTML = `<td>${nome}</td><td>${email}</td><td>${numero}</td>`;
          tableBody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error ao colocar o XML:", error));
  });