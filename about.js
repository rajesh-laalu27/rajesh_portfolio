function showSection(sectionId) {
    // Hide all sections first
    const sections = document.querySelectorAll('.about-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Then show only the selected one
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}
