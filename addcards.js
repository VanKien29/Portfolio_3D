const oM = [
  {
    id: 0,
    name: "Tour Management Website",
    description: "A tour management website for browsing destinations, booking tours, and managing travel plans.",
    image: "images/projects/ToursProject.png",
    tags: ["javascript", "php", "html", "css", "ui"],
    github: "",
    alt: "Tour Management Website",
  },
  {
    id: 1,
    name: "E-commerce Source Code Website",
    description: "An e-commerce platform for buying and selling website source code and digital products.",
    image: "images/projects/E-commerce_Source_Code_Website.jpg",
    tags: ["php/laravel", "vuejs", "javascript", "tailwind"],
    github: "",
    alt: "E-commerce Source Code Website",
  },
  {
    id: 2,
    name: "Vapor UI",
    description: "Coming Soon",
    image: "images/projects/vaporui.jpeg",
    tags: ["javascript", "react", "ui", "framer"],
    status: "coming_soon",
    alt: "Vapor UI Component Library",
  },
  {
    id: 3,
    name: "Quick Labs",
    description: "Coming Soon",
    image: "images/projects/studybuddy.jpeg",
    tags: ["javascript", "react", "mongodb"],
    status: "coming_soon",
    alt: "Quick Labs LMS",
  },
  {
    id: 4,
    name: "Open Talk",
    description: "Coming Soon",
    image: "images/projects/opentalk.jpeg",
    tags: ["react", "mongodb", "express"],
    status: "coming_soon",
    alt: "Open Talk Platform",
  },
];

class lM {
  constructor() {
    he(this, "domElements", {
      renderContainer: document.getElementById("work-render-container"),
    });
    ((this.experience = new ye()), (this.sounds = this.experience.sounds), (this.items = oM), (this.tags = aM), this.renderItems());
  }

  renderItems() {
    this.items.forEach((e) => {
      (this.domElements.renderContainer.insertAdjacentHTML(
        "beforeend",
        `
              <div id="work-item-${e.id}" class="work-item-container column">
                  <img class="work-item-image" src="${e.image}" alt="${e.alt}" height="300" width="334"/>
                  <div class="work-item-content-container">
                      <h3>${e.name}</h3>
                      <div class="work-item-tag-container row">
                          ${this.renderTags(e.tags)}
                      </div>
                      <span>${e.description}</span>
                  </div>
                  <div class="work-item-button-container row">
                      ${this.renderButtons(e)}
                  </div>
                  ${e.bannerIcons ? this.renderBanner(e) : ""}
              </div>
              `,
      ),
        this.addEventListenersToCard(e));
    });
  }

  renderBanner(e) {
    let t = "";
    return (
      (t = `
              <div class="work-banner-container row center">
                  ${e.bannerIcons.map((n) => `<img src="${n.src}" alt="${n.alt}" height="64" width="64"/>`)}
                  <span>Website Of<br>The Day</span>
              </div>
          `),
      t
    );
  }

  renderButtons(e) {
    let t = "";

    // Check if project is coming soon
    if (e.status === "coming_soon") {
      t = `
          <div id="work-item-gray-button-${e.id}" class="work-item-gray-button center" style="width: 100%; background: #a7adb8; cursor: pointer;">
              Coming Soon
          </div>`;
      return t;
    }

    // GitHub link for projects 0 and 1
    if (e.id === 0 || e.id === 1) {
      t = `
          <div id="work-item-orange-button-${e.id}" class="work-item-orange-button small-button center orange-hover" style="width: 100%; margin: 0;">
              GitHub
          </div>`;
    } else if (e.liveview) {
      // Live View button
      t = `
          <div id="work-item-orange-button-${e.id}" class="work-item-orange-button small-button center orange-hover" style="width: 100%; margin: 0;">
              Live View
          </div>`;
    } else {
      // Work in progress
      t = `
          <div id="work-item-gray-button-${e.id}" class="work-item-gray-button center" style="width: 100%; background: #a7adb8; cursor: unset;">
              Work in progress
          </div>`;
    }
    return t;
  }

  renderTags(e) {
    let t = "";
    for (let n = 0; n < e.length; n++) t += this.tags[e[n]];
    return t;
  }

  addEventListenersToCard(e) {
    const t = document.getElementById("work-item-" + e.id);
    t.addEventListener("click", () => {
      t.classList.contains("work-inactive-item-container") && document.getElementById("work-item-0").classList.contains("work-item-container-transition") && ((this.experience.ui.work.cards.currentItemIndex = -e.id + 4), this.experience.ui.work.cards.updatePositions(), this.sounds.play("buttonClick"));
    });

    // Handle GitHub link for projects 0 and 1
    if (e.id === 0 || e.id === 1) {
      const githubBtn = document.getElementById("work-item-orange-button-" + e.id);
      if (githubBtn) {
        githubBtn.addEventListener("click", (n) => {
          n.stopPropagation();
          if (e.github) window.open(e.github, "_blank");
        });
      }
    }
    // Handle Live View link
    else if (e.liveview) {
      document.getElementById("work-item-orange-button-" + e.id).addEventListener("click", (n) => {
        n.stopPropagation();
        window.open(e.liveview, "_blank");
      });
    }
    // Handle Coming Soon status
    else if (e.status === "coming_soon") {
      const comingSoonBtn = document.getElementById("work-item-gray-button-" + e.id);
      if (comingSoonBtn) {
        comingSoonBtn.addEventListener("click", (n) => {
          n.stopPropagation();
          this.showComingSoonMessage();
        });
      }
    }
  }

  showUpdatingMessage() {
    const toast = document.createElement("div");
    toast.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #091434;
      color: #FF923E;
      padding: 30px 60px;
      border-radius: 15px;
      font-size: 18px;
      font-weight: 600;
      z-index: 9999;
      box-shadow: 0 10px 40px rgba(0,0,0,0.3);
      text-align: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
    toast.textContent = "Đang cập nhật...";
    document.body.appendChild(toast);

    setTimeout(() => (toast.style.opacity = "1"), 10);
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  }

  showComingSoonMessage() {
    const toast = document.createElement("div");
    toast.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #091434;
      color: #FF923E;
      padding: 30px 60px;
      border-radius: 15px;
      font-size: 18px;
      font-weight: 600;
      z-index: 9999;
      box-shadow: 0 10px 40px rgba(0,0,0,0.3);
      text-align: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
    toast.textContent = "Coming Soon!";
    document.body.appendChild(toast);

    setTimeout(() => (toast.style.opacity = "1"), 10);
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  }
}
