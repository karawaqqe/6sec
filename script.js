const page = document.body;
const ccgButton = document.getElementById("ccgButton");
const ranksButton = document.getElementById("ranksButton");
const unitsButton = document.getElementById("unitsButton");
const districtsButton = document.getElementById("districtsButton");
const quinqueButton = document.getElementById("quinqueButton");
const protocolsButton = document.getElementById("protocolsButton");
const closeArchiveButton = document.getElementById("closeArchiveButton");

const ccgSection = document.getElementById("ccgSection");
const ranksSection = document.getElementById("ranksSection");
const unitsSection = document.getElementById("unitsSection");
const districtsSection = document.getElementById("districtsSection");
const quinqueSection = document.getElementById("quinqueSection");
const protocolsSection = document.getElementById("protocolsSection");

const closeSystemButton = document.getElementById("closeSystemButton");
const systemMessage = document.getElementById("systemMessage");

const buttons = [
  ccgButton,
  ranksButton,
  unitsButton,
  districtsButton,
  quinqueButton,
  protocolsButton
];

const sections = [
  ccgSection,
  ranksSection,
  unitsSection,
  districtsSection,
  quinqueSection,
  protocolsSection
];

function showSection(activeIndex) {
  page.classList.add("page--open");

  sections.forEach((section, index) => {
    const isActive = index === activeIndex;

    section.hidden = !isActive;
    section.classList.toggle("archive__section--active", isActive);
  });

  buttons.forEach((button, index) => {
    button.classList.toggle("nav__button--active", index === activeIndex);
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function closeArchive() {
  page.classList.remove("page--open");

  sections.forEach((section) => {
    section.hidden = true;
    section.classList.remove("archive__section--active");
  });

  buttons.forEach((button) => {
    button.classList.remove("nav__button--active");
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

ccgButton.addEventListener("click", () => showSection(0));
ranksButton.addEventListener("click", () => showSection(1));
unitsButton.addEventListener("click", () => showSection(2));
districtsButton.addEventListener("click", () => showSection(3));
quinqueButton.addEventListener("click", () => showSection(4));
protocolsButton.addEventListener("click", () => showSection(5));
closeArchiveButton.addEventListener("click", closeArchive);

closeSystemButton.addEventListener("click", () => {
  systemMessage.textContent = "System closed. Archive access has been suspended.";
  closeSystemButton.textContent = "System closed";
  closeSystemButton.disabled = true;
});
