import {Channel} from './twitch_channel.js';

let channel = Channel();
let url = document.domain;

let chat_src = 'https://www.twitch.tv/embed/'+channel+'/chat?parent='
let chat_iframe = document.getElementById("chat_embed");
chat_iframe.src = chat_src + url;

