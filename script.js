SC.initialize({
  client_id: 'a3e059563d7fd3372b49b37f00a00bcf'

});

$(document).ready(function() {


  SC.stream('/tracks/513797991', function(song) {
    $('#play1').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#pause1').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#stop1').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });


  SC.stream('/tracks/476606349', function(song) {
    $('#play2').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#pause2').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#stop2').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });



  SC.stream('/tracks/569372724', function(song) {
    $('#play3').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#pause3').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#stop3').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });



  SC.stream('/tracks/298956840', function(song) {
    $('#play4').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#play4').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#play4').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });



  SC.stream('/tracks/307706040', function(song) {
    $('#play5').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#pause5').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#stop5').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });
    

  SC.stream('/tracks/311975855', function(song) {
    $('#play6').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#pause6').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#stop6').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });
    
  SC.stream('/tracks/311732162', function(song) {
    $('#play7').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#pause7').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#stop7').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });
    
    
  SC.stream('/tracks/224279361', function(song) {
    $('#play8').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#pause8').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#stop8').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });
    
});