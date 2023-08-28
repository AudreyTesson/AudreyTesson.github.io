const filterButtons = document.querySelectorAll(".filter-button");
const projects = document.querySelectorAll(".project");

function initializeDefaultFilter() {
  const defaultFilter = "important";
  filterButtons.forEach((button) => {
    if (button.dataset.filter === defaultFilter) {
      button.classList.add("active");
    }
  });

  projects.forEach((project) => {
    if (defaultFilter === "all") {
      project.style.display = "block";
    } else {
      project.classList.contains(defaultFilter)
        ? (project.style.display = "block")
        : (project.style.display = "none");
    }
  });
}

initializeDefaultFilter();

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");

    projects.forEach((project) => {
      if (filter === "all") {
        project.style.display = "block";
      } else {
        if (project.classList.contains(filter)) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      }
    });
  });
});

const filterSkillsButtons = document.querySelectorAll(".filter-skills-button");
const hardskills = document.querySelectorAll(".skill");

filterSkillsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    // Change active button
    filterSkillsButtons.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");

    // Filter skills
    hardskills.forEach((skill) => {
      if (filter === "all") {
        skill.style.display = "flex";
      } else {
        skill.classList.contains(filter)
          ? (skill.style.display = "flex")
          : (skill.style.display = "none");
      }
    });
  });
});

const filterCertificatesButtons = document.querySelectorAll(".filter-certificates-button");
const certificates = document.querySelectorAll(".certificate");

filterCertificatesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    // Change active button
    filterCertificatesButtons.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");

    // Filter skills
    certificates.forEach((certificate) => {
      if (filter === "all") {
        certificate.style.display = "flex";
      } else {
        certificate.classList.contains(filter)
          ? (certificate.style.display = "flex")
          : (certificate.style.display = "none");
      }
    });
  });
});