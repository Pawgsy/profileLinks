fetch("https://links.floko.cc/data/links.json")
        .then((response) => response.json())
        .then((data) => {
          links = json.parse(data);
          // Sort the links by index
          const sortedLinks = bubbleSort(data);
          // Append the sorted links to the HTML
          appendLinks(sortedLinks, "listOfLinks");
        })
        .catch((error) =>
          console.error("Error fetching links:", error)
        );

function appendLinks(linkArray, elementId) {
  //Hier hat die Ki wieder geholfen und mir neue Möglichkeiten eröffnet für die man sonst Typescript lernen müsste. bracuht glaube ich

  if (typeof elementId === typeof "") {
    // If elementId is a string, we assume it is an ID of an element in the document
    // and we get the element from the document.
    const containerInDocumentThatIsBeingAppendedTo =
      document.getElementById(`#${elementId}`);
  } else if (typeof elementId === typeof {}) {
    // If elementId is an object, we assume it is a reference to an element in the document
    const containerInDocumentThatIsBeingAppendedTo =
      elementId;
    // and we use it directly.
  } else {
    throw new Error(
      "elementId must be a string or an object."
    );
  }

  linkArray.forEach((linkElement) => {
    const li = document.createElement("li");
    const i = document.createElement("i");
    const article = document.createElement("article");
    const h5 = document.createElement("h5");
    const a = document.createElement("a");

    i.className = linkElement.icon_identifier;

    a.href = linkElement.url;
    a.textContent = linkElement.name;

    // li < article < i & h5 < a
    article.appendChild(i);
    article.appendChild(h5);
    h5.appendChild(a);
    // li < article
    li.appendChild(article);
    // Append the list item to the container in the document
    containerInDocumentThatIsBeingAppendedTo.appendChild(li);
  });
}