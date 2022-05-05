// Sidebar
const menuItem = document.querySelectorAll('.menu-item');

// Messages
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

// Sidebar

// remove active class
const changeActiveItem = () => {
    menuItem.forEach(item => {
        item.classList.remove('active');
    })
}

menuItem.forEach(item =>{
    item.addEventListener('click', () =>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        }
        else{
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// MESSAGES
// search chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(user =>{
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        }
        else{
            user.style.display = 'none';
        }
    })
}


// search chat
messageSearch.addEventListener('keyup', searchMessage);


// highlight messages card when clicked
messagesNotification.addEventListener('click', () =>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() =>{
        messages.style.boxShadow = 'none';
    }, 2000);
})

// THEME DISPLAY CUSTOMIZATION

// open Modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// closes Modal
const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

// close Modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);