// Link Blob in der Reihenfolge wie sie mir eingefallen sind
      const links = [
        {
          index: 5,
          icon_identifier: "fi fi-brands-facebook",
          name: "Facebook",
          url: "https://www.facebook.com/pawgsy",
        },
        {
          index: 4,
          icon_identifier: "fi fi-brands-instagram",
          name: "Instagram",
          url: "https://www.instagram.com/pawgsy",
        },
        {
          index: 5,
          icon_identifier: "fi fi-brands-twitter-alt",
          name: "Twitter / X",
          url: "https://x.com/pawgsy",
        },
        {
          index: 8,
          icon_identifier: "fi fi-brands-whatsapp",
          name: "WhatsApp",
          url: "https://wa.me/+49",
        },
        {
          index: 2,
          icon_identifier: "fi fi-brands-discord",
          name: "Discord",
          url: "https://discordapp.com/users/233314326281322497",
        },
        {
          index: 3,
          icon_identifier: "fi fi-brands-spotify",
          name: "Spotify",
          url: "https://open.spotify.com/user/pawgsy",
        },
        {
          index: 1,
          icon_identifier: "fi fi-rr-globe",
          name: "Homepage",
          url: "https://floko.cc",
        },
        {
          index: 8,
          icon_identifier: "fi fi-brands-telegram",
          name: "Telegram",
          url: "https://t.me/pawgsy",
        },
        {
          index: 2,
          icon_identifier: "fi fi-brands-github",
          name: "GitHub",
          url: "https://www.github.com/Pawgsy",
        },
        {
          index: 9,
          icon_identifier: "fi fi-brands-reddit",
          name: "Reddit",
          url: "https://www.reddit.com/user/Pawgsy",
        },
        {
          index: 7,
          icon_identifier: "fi fi-brands-linkedin",
          name: "Linkedin",
          url: "https://www.linkedin.com/in/pawgsy",
        },
        {
          index: 10,
          icon_identifier: "fi fi-rr-gym",
          name: "Hevy",
          url: "https://hevy.com/user/pawgsy",
        },
        {
          index: 11,
          icon_identifier: "fi fi-brands-google",
          name: "Google",
          url: "https://g.dev/pawgsy",
        },
        {
          index: 12,
          icon_identifier: "fi fi-brands-paypal",
          name: "PayPal",
          url: "https://paypal.me/pawgsy",
        },
        {
          index: 13,
          icon_identifier: "fi fi-brands-patreon",
          name: "Patreon",
          url: "https://www.patreon.com/pawgsy",
        },
        {
          index: 14,
          icon_identifier: "fi fi-brands-twitch",
          name: "Twitch",
          url: "https://www.twitch.tv/pawgsy",
        },
        {
          index: 15,
          icon_identifier: "fi fi-brands-youtube",
          name: "YouTube",
          url: "https://www.youtube.com/@pawgsy",
        },
        {
          index: 16,
          icon_identifier: "fi fi-brands-tiktok",
          name: "TikTok",
          url: "https://www.tiktok.com/@pawgsy",
        },
        {
          index: 17,
          icon_identifier: "fi fi-brands-threads",
          name: "Threads",
          url: "https://www.threads.net/@pawgsy",
        },
        {
          index: 18,
          icon_identifier: "fi fi-brands-apple",
          name: "Apple Music",
          url: "https://music.apple.com/profile/pawgsy",
        },
        {
          index: 19,
          icon_identifier: "fi fi-brands-soundcloud",
          name: "SoundCloud",
          url: "https://soundcloud.com/pawgsy",
        },
        {
          index: 20,
          icon_identifier: "fi fi-brands-steam",
          name: "Steam",
          url: "https://steamcommunity.com/id/pawgsy",
        },
        {
          index: 21,
          icon_identifier: "fi fi-brands-bitcoin",
          name: "Bitcoin",
          url: "https://www.blockchain.com/btc/address/",
        },
        {
          index: 22,
          icon_identifier: "fi fi-brands-ebay",
          name: "Profil",
          url: "https://www.ebay.de/usr/pawgsy",
        },
      ];
      //dann der index nachträglich, damit ich die Elemente ordnen kann

      //Bubblesort für das "Array"
      //Ai generated
      function bubbleSort(arr) {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
          for (let j = 0; j < n - i - 1; j++) {
            if (arr[j].index > arr[j + 1].index) {
              // Swapinplace + temporäre Variable
              const temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
            }
          }
        }
        return arr;
      }

      //danach ausgabe auf die Seite mit document.write

      function appendLinks(sortedLinkArray) {
        const listeInHTML_dokument =
          document.querySelector("#listOfLinks");

        sortedLinkArray.forEach((linkElement) => {
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
          listeInHTML_dokument.appendChild(li);
        });
      }

      function appendLinks2UnorderedListAdvanced(
        linkArray,
        elementIdquerySelector
      ) {
        //Hier hat die Ki wieder geholfen und mir neue Möglichkeiten eröffnet für die man sonst Typescript lernen müsste. bracuht glaube ich

        /*
        if (typeof elementId === typeof "") {
          // If elementId is a string, we assume it is an ID of an element in the document
          // and we get the element from the document.
          var containerInDocumentThatIsBeingAppendedTo =
            document.getElementById(elementId);
        } else if (typeof elementId === typeof {}) {
          // If elementId is an object, we assume it is a reference to an element in the document
          var containerInDocumentThatIsBeingAppendedTo = elementId;
          // and we use it directly.
        } else {
          throw new Error(
            "elementId must be a string or an object."
          );
        }
          */

        const containerInDocumentThatIsBeingAppendedTo =
          document.querySelector(elementIdquerySelector);

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

      const affiliateLinks = [
        {
          index: 0,
          icon_identifier: "fi fi-rr-shopping-cart",
          name: "Floko's Shop",
          url: "https://floko.cc/shop",
        },
        {
          index: 1,
          icon_identifier: "fi fi-brands-amazon",
          name: "Floko's Amazon Shop",
          url: "https://www.amazon.de/shop/floko",
        },
        {
          index: 2,
          icon_identifier: "fi fi-brands-amazon",
          name: "Amazon",
          url: "https://www.amazon.de/shop/floko",
        },
      ];
      appendLinks(bubbleSort(links));

      appendLinks2UnorderedListAdvanced(
        affiliateLinks,
        "#affiliateLinkUnorderedList"
      );