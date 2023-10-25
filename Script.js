document.addEventListener('DOMContentLoaded', () => {
    const storyTitleInput = document.getElementById('storyTitle');
    const storyTextInput = document.getElementById('storyText');
    const addParagraphButton = document.getElementById('addParagraph');
    const createStoryButton = document.getElementById('createStory');
    const storyContainer = document.getElementById('storyContainer');

    let paragraphs = [];

    addParagraphButton.addEventListener('click', () => {
        const paragraphText = storyTextInput.value;
        if (paragraphText) {
            paragraphs.push(paragraphText);
            storyTextInput.value = '';
        }
    });

    createStoryButton.addEventListener('click', () => {
        const title = storyTitleInput.value;
        const story = paragraphs.join('\n\n');
        if (title && story) {
            const storyElement = document.createElement('div');
            storyElement.innerHTML = `<h2>${title}</h2><p>${story}</p>`; // Use backticks (`) para interpolação de strings
            storyContainer.appendChild(storyElement);

            storyTitleInput.value = ''; // Correção: atribuição de valor
            storyTextInput.value = ''; // Correção: atribuição de valor
            paragraphs = [];
        }
    });
});
