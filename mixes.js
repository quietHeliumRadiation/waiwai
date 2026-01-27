const mix_urls = new Set([
    "https://soundcloud.com/hydefm/bbblenddd-w-weewayway-llloyd-warrier-live-on-hydefm-04242024?in=weewayway/sets/bbblenddd&si=56863523821d485abe1c20324562d94f",
    "https://soundcloud.com/hydefm/bbblenddd-w-weewayway-llloyd-wwood-live-on-hydefm-032723?in=weewayway/sets/bbblenddd&si=e44f46f59056497096ef19a6e788a639&utm_source=clipboard",
    "https://soundcloud.com/hydefm/bbblenddd-w-weewayway-llloyd-ft-baby-leo?in=weewayway/sets/bbblenddd&si=9eec91ca18c24be0ac4f068dfd2ffb73",
    "https://soundcloud.com/hydefm/20240131-2003-recording?in=weewayway/sets/bbblenddd&si=369b6a455f91482aa403d490423e3ab3",
    "https://soundcloud.com/hydefm/20230927-2015-recording?in=weewayway/sets/bbblenddd&si=56aa6a11416f4b9f84a564b7f817d098",
    "https://soundcloud.com/hydefm/bbblenddd-w-weewayway-llloyd-live-on-hydefm-03293?in=weewayway/sets/bbblenddd&si=3a9a4abca8914ace84ebcebfd58735dd",
    "https://soundcloud.com/hydefm/blendiddd-2222?in=weewayway/sets/bbblenddd&si=627b6f45a5f1426a8e39c7f87215c85b",
    "https://soundcloud.com/hydefm/bbblenddd-w-weeweeway-llloyd-live-on-hydefm-121322?in=weewayway/sets/bbblenddd&si=5401832161ea4e0a908216fa909493a8",
    "https://soundcloud.com/hydefm/bbble808?in=weewayway/sets/bbblenddd&si=2a7951a5a3e9440aa0483d4ba90358d4",
    "https://soundcloud.com/hydefm/bbblenddd808?in=weewayway/sets/bbblenddd&si=72609a93ddf944e59ede1f1a58a3fa91",
    "https://soundcloud.com/hydefm/bbblendddjuly?in=weewayway/sets/bbblenddd&si=4345751216ce4687bab4fa2c846ad7ea",
    "https://soundcloud.com/hydefm/bbblenddd-w-weewayway-llloyd-live-on-hydefm-042522?in=weewayway/sets/bbblenddd&si=27f86c5c3740444592e04bc0697cf60e",
    "https://soundcloud.com/hydefm/bbblenddd-live-on-hydefm-032422?in=weewayway/sets/bbblenddd&si=e6414882cd4040d29c12eb61af13cdc0",
    "https://soundcloud.com/hydefm/bbblend-02-10-22?in=weewayway/sets/bbblenddd&si=5b945d15bf0541718b0b426c94b50757",
    "https://soundcloud.com/hydefm/bbblendddd-w-weewayway-llloyd-live-on-hydefm-012122?in=weewayway/sets/bbblenddd&si=4014ae4a28ef4f0ead538f23131b714e",
    "https://soundcloud.com/hydefm/bbblenddd-live-on-hydefm?in=weewayway/sets/bbblenddd&si=007ce649ae6346c7ba088ebb3ea630f5"
])

const mixes = document.getElementById('mixList');

mix_urls.forEach(mix => {

    // <div class="sounds">
    //     <iframe width="30%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1101630127&color=%2300ff7b&inverse=true&auto_play=false&show_user=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"></div>
    // </div>
    const mixDiv = document.createElement('div'); 
    mixDiv.className = 'sounds';
    mixDiv.innerHTML = `<iframe width="30%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=${encodeURIComponent(mix)}&color=%2300ff7b&inverse=true&auto_play=false&show_user=true"></iframe>`;          
    mixes.appendChild(mixDiv);         
});
