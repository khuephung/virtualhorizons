const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const icons = {
    isClicked: '<img src="./Component/Chatbot/images/chatbot (1).png" />',
    isNotClicked: '<img src="./Component/Chatbot/images/chatbot (1).png" />'
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton); 