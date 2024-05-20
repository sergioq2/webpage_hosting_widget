document.addEventListener('DOMContentLoaded', function() {
  const addTaskButton = document.getElementById('add-task-button');
  const newTaskInput = document.getElementById('new-task');
  const taskList = document.getElementById('task-list');

  addTaskButton.addEventListener('click', function() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
      taskList.appendChild(listItem);
      newTaskInput.value = '';
    }
  });

  // Inicializar el widget del chatbot
  if (window.renderChatbotWidget) {
    window.renderChatbotWidget('chatbot-widget', {
      endpoint: 'https://puf122bwn4.execute-api.us-east-2.amazonaws.com/Dev/chatbot' // Reemplaza con tu endpoint
    });
  } else {
    console.error('ChatbotWidget function not found.');
  }
});
