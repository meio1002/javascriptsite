// URLを作る 
const KEY = 'AIzaSyAIfVWSU71gld0YIeOHpyvNWtgWzcfd2A8';
let url = 'https://www.googleapis.com/youtube/v3/search?';
url += 'type=video';
url += '&part=snippet';
url += '&q=Science & Technology';
url += '&videoEmbeddable=true';
url += '&videoSyndicated=true';
url += '&maxResults=1';
url += '&key=' + KEY;

//  ajax
$(function() {
    $.ajax({
        url: url,
        dataType: 'jsonp'
    }).done(function(data){
        if (data.items) {
            videoData(data);
        } else {
            console.log(data);
            alert('動画を見つけられませんでした');
        }
    }).fail(function(data) {
        alert('通信に失敗しました');
    });
});

// 
const videoData = (data) => {
    let result = '';
    let video = '';
    // for (let value of videoData) {
    for (let i = 0; i < data.items.length; i++ ) {
        video  = '<iframe src="https://www.youtube.com/embed/';
        // video += value.id.videoId;
        video  +=  data.items[i].id.videoId;
        video  += '" allowfullscreen></iframe>';
        result += '<div class="video">' + video + '</div>'
    }
    $('#videoList').html(result);
}