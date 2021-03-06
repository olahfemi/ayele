myApp.controller('ctrl', function ($scope) {
    $scope.playlists = [
        {
            name: 'aye le',
            url: 'audio/ayele.mp3',
            img:'img/cryinglaugh.png'
            
        },
        {
            name: 'chai',
            url: 'audio/chai.mp3',
            img:'img/loudcryinglaugh.png'
        }, {
            name: 'apostle',
            url: 'audio/apostle.mp3',
            img:'img/cryinglaugh.png'
        }, {
            name: 'jiya',
            url: 'audio/jiya.mp3',
            img:'img/closedeyelaugh.png'
        }, {
            name: 'lord',
            url: 'audio/lord.mp3',
            img:'img/grinningface.png'
        }, {
            name: 'funke',
            url: 'audio/funke.mp3',
            img:'img/rollingeyes.png'
        },
        {
            name: 'aye mi',
            url: 'audio/ayemi.mp3',
            img:'img/sadface.png'
        },
        {
            name: 'pregnant',
            url: 'audio/pregnant.mp3',
            img:'img/pregnant.png'
        },
        {
            name: 'jesu',
            url: 'audio/jesu.mp3',
            img:'img/church.png'
        },
        {
            name: 'o ja mi lara',
            url: 'audio/jamilaraje.mp3',
            img:'img/runningman.png'
        },
        {
            name: 'whollup',
            url: 'audio/whollup.mp3',
            img:'img/angryface.png'
        },
        {
            name: 'gerrarhia',
            url: 'audio/gerrarhia.mp3',
            img:'img/rollingeyes.png'
        },
        {
            name: 'whip',
            url: 'audio/whip.mp3',
            img:'img/sadface.png'
        }
    ];

    $scope.play = function (url) {
        var audio = new Audio(url);
        audio.play();
    };
});