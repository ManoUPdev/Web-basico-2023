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
            storyElement.innerHTML = `<h2>${title}</h2><p>${story}</p>`; 
            const deleteButton = document.createElement('div');
            deleteButton.className = 'deleteButton';
            deleteButton.textContent ='Excluir';
            deleteButton.addEventListener('click',() =>{
                storyContainer.removeChild(storyElement);

            });
            storyElement.appendChild(deleteButton);
            storyContainer.appendChild(storyElement);

            storyTitleInput.value = ''; 
            storyTextInput.value = ''; 
            paragraphs = [];
        }
    });
});
