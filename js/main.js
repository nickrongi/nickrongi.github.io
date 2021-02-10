// A $( document ).ready() block.
$( document ).ready(function() {

  $( ".start" ).click(function() {
    var card = $( ".slider ul li" );
    var cardSize = 250;
    var marginSize = 24;
    var winningCardNumber = 58;
    $( 'ul li:nth-child(' + winningCardNumber + ')' ).addClass('winning-card');
    $( "ul li:nth-child(" + (winningCardNumber - 2) + ")" ).addClass('surrounding-winning-card');
    $( "ul li:nth-child(" + (winningCardNumber - 1) + ")" ).addClass('surrounding-winning-card');
    $( "ul li:nth-child(" + (winningCardNumber + 1) + ")" ).addClass('surrounding-winning-card');
    $( "ul li:nth-child(" + (winningCardNumber + 2) + ")" ).addClass('surrounding-winning-card');
    var startOfWinningCard = -Math.abs(((cardSize / 2) + marginSize) + ((cardSize + marginSize) * (winningCardNumber - 4))) - (cardSize / 2);
    var centerOfWinningCard = startOfWinningCard - cardSize / 2;
    var numberRand = (Math.floor(Math.random() * 250) + 1);
    var totalTranslate = startOfWinningCard - numberRand;
    var animationTime = 10000;

    card.css('transition','all ' + animationTime + 'ms cubic-bezier(.09,.08,.1,.99');
    card.css('transform','translateX(' + totalTranslate + 'px) rotate3d(0,0,0, 0deg');
    
    setTimeout(() => { finishedSliding(centerOfWinningCard, card, winningCardNumber) }, animationTime + 500);
  });

  function finishedSliding(centerOfWinningCard, card, winningCardNumber) {
    card.css('transition','all 300ms');
    card.css('transform','translateX(' + centerOfWinningCard + 'px) scale(1) rotate3d(0,0,0, 0deg');
    setTimeout(() => { popUpItem(centerOfWinningCard) }, 1000);
  }

  function popUpItem(centerOfWinningCard){
    var winningCard = $( ".winning-card" )
    $( ".middle" ).css('display', 'none');
    winningCard.css('transition','all 300ms');
    winningCard.css('transform','translateX(' + centerOfWinningCard + 'px) scale(1.5) rotate3d(1,1,0, 360deg');
    $( ".winning-card span.wear" ).css('display','flex');
    $( ".surrounding-winning-card" ).css('opacity', '.3');
  }

  var itemTypes = [
    {name: "Mil-Spec", chance: 55.92, class: "mil-spec"},
    {name: "Restricted", chance: 25.98, class: "restricted"},
    {name: "Classified", chance: 8.2, class: "classified"},
    {name: "Covert", chance: 6.64, class: "covert"},
    {name: "Exceedingly Rare", chance: 3.26, class: "exceedingly-rare"}
  ];

  var spectrum2 = [
    {type: "Mil-Spec", items:[
      {item: "Pop Socket", skin: "", statTrak: false, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71e5xti2nJL._AC_SX569_.jpg'},
      {item: "AmongUs Stickers", skin: "", statTrak: false, imageUrl: 'http://sc04.alicdn.com/kf/He53a2d007a8f4fb6a21c0de00ccdd4abX.jpg_.webp'},
      {item: "TikTok Stickers", skin: "", statTrak: false, imageUrl: 'http://sc04.alicdn.com/kf/H3881316abac147b78cf0ef5f5a5bdabfg.jpg_.webp'},
      //{item: "MAC-10", skin: "Oceanic", statTrak: false, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_am_mac10_oceani_light_large.0c3e275f2964ea051d2481735fcdf6d174a22b1b.png'},
      //{item: "G3SG1", skin: "Hunter", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_gs_g3sg1_cetme_redux_light_large.18ad1afdb32fca22879dcdd22e579c5afaef6ad8.png'},
      //{item: "Sawed-Off", skin: "Morris", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_aq_sawed-off_flower_light_large.0d98b08ce8023d49dac2f76b10ef2f3cd7a33350.png'},
      //{item: "SCAR-20", skin: "Jungle Slipstream", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_hy_scar20_jungle_slipstream_light_large.d49f99ac854c1a25fc46bde5dd32f438bdd587f1.png'}
    ]},
    {type: "Restricted", items:[
      {item: "Charger", skin: "", statTrak: false, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61jhLQQXx2L._AC_SX569_.jpg'},
      //{item: "SG 553", skin: "Phantom", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_gs_sg553_phantom_light_large.51fc477c1024614f6f52080d3b7200408c9d2881.png'},
      //{item: "UMP-45", skin: "Exposure", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump45_x-ray_machine_light_large.a4563e015fd33d1874cc220458db2754a15dd08a.png'},
      //{item: "XM1014", skin: "Ziggy", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_aq_xm1014_ziggy_anarchy_light_large.7042642ba5043be6e1cb82d6bb9a05678402dea1.png'},
      //{item: "MP9", skin: "Goo", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_cu_mp9_goo_light_large.3cab8ecb356ee5f2549c1b148f5961fdf5d9cd76.png'}
    ]},
    {type: "Classified", items:[
      {item: "Speaker", skin: "", statTrak: false, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5160%2Bu1SgZL._AC_.jpg'},
      //{item: "R8 Revolver", skin: "Llama Cannon", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_gs_r8_llamacannon_light_large.ae4ce84764b4892a2ea2d3f9f0afc57023f7bdc8.png'},
      //{item: "PP-Bizon", skin: "High Roller", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_cu_bizon_all_in_light_large.d31ae97fe448b550cfe06d617daa3575c77e8c2a.png'}
    ]},
    {type: "Covert", items:[
      {item: "AirPods", skin: "", statTrak: false, imageUrl: 'http://sc04.alicdn.com/kf/H04bd7403e8074834ba85b47afdd5c3f4f.jpg_.webp'},
      //{item: "P250", skin: "See Ya Later", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_p250_cybercroc_light_large.396de1d53797f8875d242d1eb33d5b81dce2bb8e.png'}
    ]},
    {type: "Exceedingly Rare", items:[
      {item: "AirPods", skin: "", statTrak: false, imageUrl: 'http://sc04.alicdn.com/kf/H04bd7403e8074834ba85b47afdd5c3f4f.jpg_.webp'},
    ]}, 
  ];

  var dangerZone = [
    {type: "Mil-Spec", items:[
      {item: "Pop Socket", skin: "", statTrak: false, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71e5xti2nJL._AC_SX569_.jpg'},
      {item: "AmongUs Stickers", skin: "", statTrak: false, imageUrl: 'http://sc04.alicdn.com/kf/He53a2d007a8f4fb6a21c0de00ccdd4abX.jpg_.webp'},
      {item: "TikTok Stickers", skin: "", statTrak: false, imageUrl: 'http://sc04.alicdn.com/kf/H3881316abac147b78cf0ef5f5a5bdabfg.jpg_.webp'},
      //{item: "MAC-10", skin: "Oceanic", statTrak: false, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_am_mac10_oceani_light_large.0c3e275f2964ea051d2481735fcdf6d174a22b1b.png'},
      //{item: "G3SG1", skin: "Hunter", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_gs_g3sg1_cetme_redux_light_large.18ad1afdb32fca22879dcdd22e579c5afaef6ad8.png'},
      //{item: "Sawed-Off", skin: "Morris", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_aq_sawed-off_flower_light_large.0d98b08ce8023d49dac2f76b10ef2f3cd7a33350.png'},
      //{item: "SCAR-20", skin: "Jungle Slipstream", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_hy_scar20_jungle_slipstream_light_large.d49f99ac854c1a25fc46bde5dd32f438bdd587f1.png'}
    ]},
    {type: "Restricted", items:[
      {item: "Charger", skin: "", statTrak: false, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61jhLQQXx2L._AC_SX569_.jpg'},
      //{item: "SG 553", skin: "Phantom", statTrak: false, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_gs_sg553_phantom_light_large.51fc477c1024614f6f52080d3b7200408c9d2881.png'},
      //{item: "UMP-45", skin: "Exposure", statTrak: false, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump45_x-ray_machine_light_large.a4563e015fd33d1874cc220458db2754a15dd08a.png'},
      //{item: "XM1014", skin: "Ziggy", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_aq_xm1014_ziggy_anarchy_light_large.7042642ba5043be6e1cb82d6bb9a05678402dea1.png'},
      //{item: "MP9", skin: "Goo", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_cu_mp9_goo_light_large.3cab8ecb356ee5f2549c1b148f5961fdf5d9cd76.png'}
    ]},
    {type: "Classified", items:[
      {item: "Speaker", skin: "", statTrak: false, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5160%2Bu1SgZL._AC_.jpg'},
      //{item: "R8 Revolver", skin: "Llama Cannon", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_gs_r8_llamacannon_light_large.ae4ce84764b4892a2ea2d3f9f0afc57023f7bdc8.png'},
      //{item: "PP-Bizon", skin: "High Roller", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_cu_bizon_all_in_light_large.d31ae97fe448b550cfe06d617daa3575c77e8c2a.png'}
    ]},
    {type: "Covert", items:[
      {item: "AirPods", skin: "", statTrak: false, imageUrl: 'http://sc04.alicdn.com/kf/H04bd7403e8074834ba85b47afdd5c3f4f.jpg_.webp'},
      //{item: "P250", skin: "See Ya Later", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_p250_cybercroc_light_large.396de1d53797f8875d242d1eb33d5b81dce2bb8e.png'}
    ]},
    {type: "Exceedingly Rare", items:[
      {item: "AirPods", skin: "", statTrak: false, imageUrl: 'http://sc04.alicdn.com/kf/H04bd7403e8074834ba85b47afdd5c3f4f.jpg_.webp'},
    ]},  
  ];


  $( ".fill" ).click(function() {
    fillSlider(dangerZone);
  });
  
  function resetSlider() {
    var card = $( ".slider ul li" );
    $(".middle").css('display', '');
    card.css('transition','none');
    card.css('transform','translateX(-125px)');
  }

  function fillSlider(caseData) {
    resetSlider();
    var cards = [];
    var startItem = 0;
    var totalCardsAmount = 60;
    fillCards(caseData, cards, totalCardsAmount, startItem);
    $( ".slider > ul" ).html( cards );
  }
  
  function fillCards(caseData, cards, totalCardsAmount, startItem) {
    if(startItem >= totalCardsAmount){
      return cards;
    }
    var randomNumber = parseFloat(Math.random() * 100).toFixed(2);
    var chosenItem;
    var itemType;
    var previousChance;
    var cardFound = false;
    var wearArray = ["Awesome!", "Let's Go!", "Do Another", "Nice One", "Good Pick"];
    var randomWear = Math.floor(Math.random() * wearArray.length);
    var wear = wearArray[randomWear];

    for(k = 0; k < itemTypes.length; k++){
      if(k === 0){
        previousChance = 0;
        currentChance = itemTypes[k].chance;
      } else {
        previousChance = previousChance + itemTypes[k-1].chance;
        currentChance = itemTypes[k].chance + previousChance;
      }

      if(randomNumber <= currentChance && randomNumber > previousChance){

        var allItemsOfType = caseData.find(item => item.type == itemTypes[k].name)

        if (allItemsOfType != null) {
          allItemsOfType = allItemsOfType.items
          chosenItem = allItemsOfType[Math.floor(Math.random() * allItemsOfType.length)];
          itemType = itemTypes[k].class;
          var statTrakClass = "no-stattrak";
          if(chosenItem.statTrak === true && (Math.random() * 10) <= 1){
            statTrakClass = "stattrak"
          }

          cards.push(`
          <li class="`+ itemType + `">
            <div class="absolute">
              <div class="item-details">
                <span class="item-detail ` + statTrakClass + `">StatTrak</span>
                <span class="item-detail wear">` + wear + `</span>
              </div>
            </div>
            <img src="` + chosenItem.imageUrl + `">
            <span class="cover">
              <span class="centered">` + chosenItem.item + `</span>
              <span class="centered2">` + chosenItem.skin + `</span>
            </span>
          </li>`);
          k = itemTypes.length;
        } else {
          //No match found, creating dummy object.
          cards.push(`
          <li class="no-weapon">
            <img src="">
            <span class="cover">
              <span class="centered">No Weapon</span>
                <span class="centered2">None</span>
            </span>
          </li>`);
        }
      }
    }
   
    startItem++;
    fillCards(caseData, cards, totalCardsAmount, startItem)  
  }

  fillSlider(dangerZone);
  
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  
});


// 1   covert
// 2   covert
// 3   classified
// 4   classified
// 5   classified
// 6   restricted
// 7   restricted
// 8   restricted
// 9   restricted
// 10  restricted
// 11  mil-spec
// 12  mil-spec
// 13  mil-spec
// 14  mil-spec
// 15  mil-spec
// 16  mil-spec  
// 17  mil-spec



// 0,26/100*10000

  // $( ".start" ).click(function() {
  //   var numberRand = -8150 - (Math.floor(Math.random() * 250) + 1);
  //   $( ".slider" ).animate({
  //     step: function(numberRand) {
  //       $(this).css('transform','translateX(' + numberRand + 'px)'); 
  //     },
  //   }, 10000, "easeInOutQuint", function() {
  //     //test
  //   });
  // });