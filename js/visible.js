function visibleChat(){
    
    let icon_chat = document.getElementById('icon-eye-chat');
    let chat = document.getElementById('chat_embed');
    let screen = document.getElementById('share-screen');

    if(icon_chat.innerHTML == 'visibility_off'){
        icon_chat.innerHTML = 'visibility';
        chat.style.visibility = 'visible';
        screen.style.width = 'calc(100% - 350px)';
    }else{
        icon_chat.innerHTML = 'visibility_off';
        chat.style.visibility = 'hidden';
        screen.style.width = '100%';
    }
}

function visibleLive(){
    let icon_live = document.getElementById('icon-eye-live');
    let live = document.getElementById('twitch-embed');

    if(icon_live.innerHTML == 'visibility_off'){
        icon_live.innerHTML = 'visibility';
        live.style.visibility = 'visible';
    }else{
        icon_live.innerHTML = 'visibility_off';
        live.style.visibility = 'hidden';
    }
}