$(document).ready(function(){

  var request = {
    type: "GET",
    url: "",
    dataType: "JSON",
    success: function(response) {
      console.log("This is the response: ", response);
      $('#title').text(response["Title"]);
      $('#year').text(response["Year"]);
      $('#actors').text(response["Actors"]);
      $('#genre').text(response["Genre"]);
      $('#plot').text(response["Plot"]);
      $('#imdb').text(response["imdbRating"]);
      $('#tomatoFresh').text(response["tomatoFresh"]);
      $('#poster').attr("src",response["Poster"]);
      // var imdbRottenRatio = (Number(response["imdbRating"]) / Number(response["tomatoFresh"]));
      $('#imdbRT').text((Number(response["imdbRating"]) / Number(response["tomatoFresh"])));
    }
  };


  $(document).on('click', '#search', function(){
    var searchTitle = $('#searchTitle').val();
    request.url = "http://www.omdbapi.com/?t="+searchTitle+"&plot=short&tomatoes=true";
    $.ajax(request);
  });
  
  // var avg = function(arr) {
  //   var sum = 0;
  //   for (i=0; i<arr.length; i++){
  //     sum += arr[i];
  //   }
  //   return sum / arr.length;
  // }

  // var data = {};

  // var blockchainRequest = {
  //   type: "GET",
  //   url: "https://etherchain.org/api/basic_stats",
  //   dataType: "JSON",
  //   success: function(res) {
  //     console.log("This is the response: ", res);
  //     var blockTimeArr = [];
  //     var difficultyArr = [];
  //     var blockTimeAvg, difficultyAvg;
      
  //     var priceHkd = +(res['data']['price']['usd'] * 7.75).toFixed(2);

  //     for (i=0; i<res['data']['blocks'].length; i++) {
  //       blockTimeArr.push(res['data']['blocks'][i]['blockTime']);
  //       difficultyArr.push(res['data']['blocks'][i]['difficulty']);
  //     };
  //     blockTimeAvg = avg(blockTimeArr);
  //     difficultyAvg = avg(difficultyArr);
  //     data['blockTime'] = blockTimeAvg;
  //     data['difficulty'] = difficultyAvg;
  //     data['priceHkd'] = priceHkd;
  //     data['priceUsd'] = res['data']['price']['usd'];

  //     var netHashGH = difficultyAvg / blockTimeAvg / Math.pow(10,9);
  //     data['netHashGH'] = netHashGH;

  //     var userRatio = 115 * Math.pow(10,6) / (netHashGH * Math.pow(10,9));
  //     var blocksPerMin = 60.0 / blockTimeAvg;
  //     var ethPerMin = blocksPerMin * 5.0;
  //     var earnings = {};
  //     earnings.min = userRatio * ethPerMin;
  //     earnings.hour = earnings.min * 60;
  //     earnings.day = earnings.hour * 24;
  //     earnings.week = earnings.day * 7;
  //     earnings.month = earnings.day * 30;

  //     data['userRatio'] = userRatio;
  //     data['blocksPerMin'] = blocksPerMin;
  //     data['ethPerMin'] = ethPerMin;
  //     data['earnings'] = earnings;

  //     console.log(data);
  //   }
  // };

  // $.ajax(blockchainRequest);

});