class Projectcard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
<div class="card">
        <div class="card-1-div">
          <img src="" class="projectImage" alt="" />
        </div>
        <div class="card-2-div">
          <h3>Youtube downloader</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#888"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-github hover:border-gray-400 hover:dark:border-gray-400 dark:border-gray-500 duration-200 hover:scale-105 p-1 border rounded-full size-8 shrink-0"
          >
            <path
              d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
            ></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </div>
        <div class="card-3-div">
          <p>
            The word 'lorem', for example, isn't a real Latin word, it's a
            shortened version of the word 'dolorem', meaning pain. This makes
            the current dummy text impossible to translate into English.lorerm
          </p>
        </div>
        <div class="card-4-div">
          <span>HTML</span>
          <span>CSS</span>
          <span>JS</span>
        </div>
      </div>
      `;
  }
}
window.customElements.define("user-card", Projectcard);
