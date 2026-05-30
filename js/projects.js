const projects = [
  {
    title: "Modern Home Renovation",
    label: "Residential",
    categories: ["residential", "renovation"],
    coverImage: "./images/acc.jpeg",
    images: [
      "./images/acc.jpeg",
      "./images/desktop.png",
      "./images/flooring-desktop.jpeg",
    ],
    alt: "Residential renovation project",
    description:
      "A clean residential upgrade focused on modern finishes, improved functionality, and long-lasting workmanship.",
  },
  {
    title: "Bathroom Transformation",
    label: "Bathroom",
    categories: ["residential", "tiling-flooring", "renovation"],
    coverImage: "./images/work-bathroom-1.webp",
    images: [
      "./images/work-bathroom-1.webp",
      "./images/work-bathroom-2.webp",
      "./images/work-bathroom-3.webp",
    ],
    alt: "Bathroom renovation project",
    description:
      "Complete bathroom renovation with tiling, modern fixtures, and a high-quality professional finish.",
  },
  {
    title: "Commercial Fit-Out",
    label: "Commercial",
    categories: ["commercial", "renovation"],
    coverImage: "./images/work-commercial-1.webp",
    images: [
      "./images/work-commercial-1.webp",
      "./images/work-commercial-2.webp",
      "./images/work-commercial-3.webp",
    ],
    alt: "Commercial renovation project",
    description:
      "Durable and professional commercial renovation work designed for everyday use and clean presentation.",
  },
  {
    title: "Precision Tiling Work",
    label: "Tiling & Flooring",
    categories: ["tiling-flooring", "residential"],
    coverImage: "./images/work-tiling-1.webp",
    images: [
      "./images/work-tiling-1.webp",
      "./images/work-tiling-2.webp",
      "./images/work-tiling-3.webp",
    ],
    alt: "Tiling and flooring project",
    description:
      "Detailed tiling and flooring installation completed with accuracy, durability, and a premium finish.",
  },
  {
    title: "Accessible Bathroom Solution",
    label: "Accessibility",
    categories: ["accessibility", "residential", "tiling-flooring"],
    coverImage: "./images/work-accessible-1.webp",
    images: [
      "./images/work-accessible-1.webp",
      "./images/work-accessible-2.webp",
      "./images/work-accessible-3.webp",
    ],
    alt: "Accessible renovation project",
    description:
      "A practical accessible renovation designed around comfort, safety, mobility, and everyday independence.",
  },
  {
    title: "Complete Interior Upgrade",
    label: "Renovation",
    categories: ["residential", "renovation"],
    coverImage: "./images/work-renovation-1.webp",
    images: [
      "./images/work-renovation-1.webp",
      "./images/work-renovation-2.webp",
      "./images/work-renovation-3.webp",
    ],
    alt: "General renovation project",
    description:
      "A full interior improvement project completed with careful planning, clean finishes, and reliable workmanship.",
  },
];

const projectGrid = document.querySelector("#projectGrid");
const filterButtons = document.querySelectorAll(".project-filter-btn");

function renderProjects(category = "all") {
  projectGrid.innerHTML = "";

  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter((project) => project.categories.includes(category));

  filteredProjects.forEach((project, index) => {
    const card = document.createElement("article");

    card.className =
      "group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-500 cursor-pointer";

    card.innerHTML = `
      <div class="h-72 overflow-hidden">
        <img 
          src="${project.coverImage}" 
          alt="${project.alt}"
          class="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        >
      </div>

      <div class="p-8">
        <span class="text-sm font-semibold tracking-[0.18em] uppercase text-red-600">
          ${project.label}
        </span>

        <h3 class="text-2xl font-bold text-gray-900 mt-3 mb-4">
          ${project.title}
        </h3>

        <p class="text-gray-600 leading-relaxed mb-6">
          ${project.description}
        </p>

        <button
  class="view-project-btn inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
  data-project-index="${index}"
>
  View Project Photos →
</button>
      </div>
    `;

    projectGrid.appendChild(card);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    filterButtons.forEach((btn) => btn.classList.remove("active-filter"));
    button.classList.add("active-filter");

    renderProjects(category);
  });
});

renderProjects();

// Projects Modal
const modal = document.querySelector("#projectModal");
const closeModalBtn = document.querySelector("#closeModal");

const modalMainImage = document.querySelector("#modalMainImage");
const modalThumbnails = document.querySelector("#modalThumbnails");

const prevImageBtn = document.querySelector("#prevImage");
const nextImageBtn = document.querySelector("#nextImage");

let activeProject = null;
let activeImageIndex = 0;

function openProjectModal(projectIndex) {
  activeProject = projects[projectIndex];
  activeImageIndex = 0;

  updateModalImage();

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeProjectModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function updateModalImage() {
  modalMainImage.src =
    activeProject.images[activeImageIndex];

  modalThumbnails.innerHTML = "";

  activeProject.images.forEach((image, index) => {
    const thumb = document.createElement("img");

    thumb.src = image;
    thumb.className =
      "w-24 h-24 object-cover rounded-xl cursor-pointer border-2";

    if (index === activeImageIndex) {
      thumb.classList.add("border-red-600");
    } else {
      thumb.classList.add("border-transparent");
    }

    thumb.addEventListener("click", () => {
      activeImageIndex = index;
      updateModalImage();
    });

    modalThumbnails.appendChild(thumb);
  });
}

document.querySelectorAll(".view-project-btn")
  .forEach(btn => {
    btn.addEventListener("click", () => {
      openProjectModal(
        Number(btn.dataset.projectIndex)
      );
    });
  });

  nextImageBtn.addEventListener("click", () => {
  activeImageIndex++;

  if (activeImageIndex >= activeProject.images.length) {
    activeImageIndex = 0;
  }

  updateModalImage();
});

prevImageBtn.addEventListener("click", () => {
  activeImageIndex--;

  if (activeImageIndex < 0) {
    activeImageIndex =
      activeProject.images.length - 1;
  }

  updateModalImage();
});

closeModalBtn.addEventListener("click", closeProjectModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeProjectModal();
  }
});