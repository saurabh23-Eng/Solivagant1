## References

1. Haykin, S. (2001). Communication Systems, 4th Edition. Wiley.
2. Proakis, J. G., & Salehi, M. (2008). Digital Communications, 5th Edition. McGraw-Hill.
3. TutorialsPoint – Frequency Shift Keying: https://www.tutorialspoint.com/digital_communication/digital_communication_fsk.htm
4. Electronics Tutorials – FSK Modulation: https://www.electronics-tutorials.ws/modulation/fsk.html

5. Do’s
Use the dev branch for all development work.

This keeps unstable or in-progress changes isolated from the production environment.

Test thoroughly before merging changes into the main or testing branches.

Ensure functionality, accuracy, and consistency across simulation and content files.

Follow the file structure conventions:

Use proper folders: /css, /js, /images, and place your main file as index.html inside the simulation/ folder.

Validate all JSON files (like pretest.json and posttest.json) using a JSON validator like https://jsonlint.com.

Use proper citations and references in the reference.md file.

This ensures credibility and encourages learners to explore further.

Write clear and structured content in markdown files:

Use headings, bullet points, and code formatting where needed.

Use LaTeX syntax for equations to maintain readability.

Maintain accessibility and responsiveness in the simulation interface.

Ensure the UI works across browsers and screen sizes.

Document your code and experiment thoroughly.

Add comments in JavaScript, describe simulation flow, and clarify logic.


6. ❌ Don’ts
Do not commit directly to the main branch.

Only well-tested and approved content/code should be merged here.

Never delete the gh-pages branch.

It is essential for GitHub Pages deployment and hosting of the simulation UI.

Avoid uploading unnecessary or unused files.

Keep the repository clean by removing temporary or redundant assets.

Do not ignore formatting standards.

Inconsistent or sloppy markdown, broken links, or misnamed files affect both functionality and user experience.

Do not hardcode values without comments or explanation in simulation scripts.

Always clarify constants, thresholds, or important logic sections.

Avoid overlapping or unclear UI elements in the simulation.

Keep the interface intuitive and uncluttered.


