const filterButtons = document.querySelectorAll('.filter-button');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    // Change active button
    filterButtons.forEach(button => {
      button.classList.remove('active');
    });
    button.classList.add('active');

    // Filter projects
    projects.forEach(project => {
      if (filter === 'all') {
        project.style.display = 'block';
      } else {
        project.classList.contains(filter) ? project.style.display = 'block' : project.style.display = 'none';
      }
    });
  });
});



const filterSkillsButtons = document.querySelectorAll('.filter-skills-button');
const hardskills = document.querySelectorAll('.skill');

filterSkillsButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    // Change active button
    filterSkillsButtons.forEach(button => {
      button.classList.remove('active');
    });
    button.classList.add('active');

    // Filter projects
    hardskills.forEach(project => {
      if (filter === 'all') {
        project.style.display = 'block';
      } else {
        project.classList.contains(filter) ? project.style.display = 'block' : project.style.display = 'none';
      }
    });
  });
});

