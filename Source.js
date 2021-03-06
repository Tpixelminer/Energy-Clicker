// Team Gdoc Link: http://bit.ly/2uw23CJ
// https://1drv.ms/p/s!Apyowd4JEXnqb6-iErvLzyhZiNQ
// var home = new Image({
//     url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/home%20button.png",
//     width: 60,
//     height: 50,
//     x: -250,
//     y: 260,
//   })
//A 5 kW system would cost around $25,000-$35,000.
//Setup Vars
setBackdropColor("white")

var energy = 0;
var money = 100;
var solarpanelsowned = 1;
var solarpanelprice = 100;
var windgeneratorprice = 1000;
var windgeneratorsowned = 0;
var hydroelectricplantsowned = 0
var hydroelectricplantprice = 3500
var geoplantsowned = 0
var geoplantprice = 7000
var nuclearplantsowned = 0
var nuclearplantprice = 12000
var randompopup
  //Background
  //setBackdropURL('http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2015/07/austin-cheapest-solar-power.jpg')
  //Sell Energy Button Sprite
var sellEnergyButton = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/button.png",
  width: 0,
  height: 60,
  x: 0,
  y: -250,
})

//Clicker
var solarPanelMain = new Image({
  url: "https://upload.wikimedia.org/wikipedia/commons/3/37/Barns-with-Solar-Panels.jpg",
  width: 120,
  height: 120,
  x: 0,
  y: 0,
})

//Clicking Script
every(0.5, "seconds", () => {
  energy += 1
})
var unicorn = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/fake.png",
  width: 150,
  height: 250,
  x: 500,
  y: 160//
})
var textSprite1 = new Text({
  text: () => "Not Enough Energy!",
  size: 30,
  color: "#040316",
  fontFamily: "arial",
  x: 0,
  y: -190,
})
textSprite1.hide()
  //Energy Display
  //TODO: Change Font and Styles
new Text({
  text: () => "Energy: " + energy,
  x: 0,
  y: 260,
  size: 30
})

var donate = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/donate.png",
  width: 210,
  height: 50,
  x: -456,
  y: 238,
})

// var toWebsite = new Text({
//   text: () => "Click here to go to website ",

//   x: -456,
//   y: 200,
// })

donate.onMouseDown(() => {
  window.open('https://www.gridalternatives.org')
})




//Energy Button Onclick Script
sellEnergyButton.onMouseDown(() => {
    money += energy * 10
    energy = 0;

    //Old Sell Energy
    // if (energy > 10) {
    //   energy -= 10
    //   money += 100
    // } else {
    //   textSprite1.show()
    //   after(1.4, "seconds", () => {
    //     textSprite1.hide()
    //   })
    // }

  })
  //Buy Solar Panel Button
var buySolarPanel = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/buy%20solar%20panel.png",
  width: 160,
  height: 50,
  x: -480,
  y: 100,
})

// Print money
new Text({
  text: () => "Money: " + money,
  x: 0,
  y: 225,
  size: 30
})

var labelBackgrounds = new Rectangle({
  width: 200,
  height: 80,
  color: "white",
  x: 0,
  y: 235,
})

forever(() => {
  labelBackgrounds.sendToBack()
})

var buttonShelf = new Rectangle({
  width: 20,
  height: 9001,
  color: "#0e0b44",
  x: -325,
  y: 235,
})
forever(() => {
  buttonShelf.sendToFront()

})
buySolarPanel.onMouseDown(() => {
  if (money > solarpanelprice) {
    solarpanelsowned += 1;
    money -= solarpanelprice;
    solarpanelprice += 15;
  } else {
    //TODO: ADD ERROR MESSAGE
  }
})


new Text({
  text: () => +solarpanelsowned,
  x: -375,
  y: 100,
  size: 25
})

var buywindgenerator = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/buywind.png",
  width: 160,
  height: 50,
  y: 30,
  x: -480,
})
var logo = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/logo.png",
  width: 180,
  height: 120,
  x: -200,
  y: 220
})
every(0.5, "seconds", () => {
  energy += solarpanelsowned * 1
})

new Text({
  text: () => "Price: " + solarpanelprice,
  x: -510,
  y: 65,
  size: 20
})

buywindgenerator.onMouseDown(() => {
  if (money > windgeneratorprice) {
    windgeneratorsowned += 1;
    money -= windgeneratorprice;
    windgeneratorprice += 25;
  } else {
    //TODO: ADD ERROR MESSAGE
  }
})

new Text({
  text: () => "Price: " + windgeneratorprice,
  x: -510,
  y: -3,
  size: 20
})

new Text({
  text: () => windgeneratorsowned,
  x: -375,
  y: 29,
  size: 25
})

every(0.25, "seconds", () => {
  energy += windgeneratorsowned * 2
})

forever(() => {
  if (windgeneratorsowned > 0) {
    var windimage = new Image({
      url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/windmill.gif",
      width: 120,
      height: 120,
      x: 150,
      y: 0,
    })
  }
})

var hydrobutton = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/hydroelectricbutton.png",
  width: 160,
  height: 45,
  x: -480,
  y: -40
})

new Text({
  text: () => "Price: " + hydroelectricplantprice,
  x: -510,
  y: -70,
  size: 20
})

//6

new Text({
  text: () => hydroelectricplantsowned,
  x: -375,
  y: -40,
  size: 25
})

hydrobutton.onMouseDown(() => {
  if (money > hydroelectricplantprice) {
    hydroelectricplantsowned += 1;
    money -= hydroelectricplantprice;
    hydroelectricplantprice += 75;
  } else {
    //TODO: ADD ERROR MESSAGE
  }
})

forever(() => {
  if (hydroelectricplantsowned > 0) {
    var hydroimage = new Image({
      url: "https://upload.wikimedia.org/wikipedia/commons/4/43/Adam_Beck_Complex.jpg",
      width: 120,
      height: 120,
      x: -150,
      y: 0,
    })
  }
})

every(0.25, "seconds", () => {
  energy += hydroelectricplantsowned * 4
})

var geobutton = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/buygeothermal.png",
  width: 160,
  height: 45,
  x: -480,
  y: -105
})

new Text({
  text: () => geoplantsowned,
  x: -375,
  y: -105,
  size: 25
})

new Text({
  text: () => "Price: " + geoplantprice,
  x: -510,
  y: -138,
  size: 20
})

forever(() => {
  if (geoplantsowned > 0) {
    var geoimage = new Image({
      url: "https://upload.wikimedia.org/wikipedia/commons/9/9f/NesjavellirPowerPlant_edit2.jpg",
      width: 120,
      height: 120,
      x: -0,
      y: 133,
    })
  }
})

geobutton.onMouseDown(() => {
  if (money > geoplantprice) {
    geoplantsowned += 1;
    money -= geoplantprice;
    geoplantprice += 125;
  } else {
    //TODO: ADD ERROR MESSAGE
  }
})

every(0.35, "seconds", () => {
  energy += geoplantsowned * 7
})

//


var nuclearbutton = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/nuclear.png",
  width: 160,
  height: 45,
  x: -480,
  y: -170
})

new Text({
  text: () => nuclearplantsowned,
  x: -375,
  y: -169,
  size: 25
})

new Text({
  text: () => "Price: " + nuclearplantprice,
  x: -503,
  y: -205,
  size: 20
})

forever(() => {
  if (nuclearplantsowned > 0) {
    var nuclearimage = new Image({
      url: "https://upload.wikimedia.org/wikipedia/commons/7/77/Bellefonte_Nuclear_Power_Plant.jpg",
      width: 120,
      height: 120,
      x: 0,
      y: -140,
    })
  }
})

nuclearbutton.onMouseDown(() => {
  if (money > nuclearplantprice) {
    nuclearplantsowned += 1;
    money -= nuclearplantprice;
    nuclearplantprice += 200;
  } else {
    //TODO: ADD ERROR MESSAGE
  }
})

every(0.35, "seconds", () => {
  energy += nuclearplantsowned * 10
})

//POPUPS
every(10, 'second', () => {
  randompopup = random(1, 16)
  after(1, 'second', () => {
    randompopup = 0
  })
})

var funfact1 = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/funfact1.png",
  width: 640,
  height: 640,
  x: 355,
  y: -275

})

funfact1.hide()

forever(() => {
  if (randompopup === 1) {
    funfact1.show()

  }
})

funfact1.onMouseDown(() => {
  funfact1.hide()
})

//FUN 2
var funfact2 = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/funfact2.png",
  width: 640,
  height: 640,
  x: 355,
  y: -275

})

funfact2.hide()

forever(() => {
  if (randompopup === 2) {
    funfact2.show()

  }
})

funfact2.onMouseDown(() => {
    funfact2.hide()
  })
  //FUN 3

var funfact3 = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/funfact3.png",
  width: 640,
  height: 640,
  x: 355,
  y: -275

})

funfact3.hide()

forever(() => {
  if (randompopup === 3) {
    funfact3.show()

  }
})

funfact3.onMouseDown(() => {
  funfact3.hide()
})

//FUN 4
var funfact4 = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/funfact4.png",
  width: 640,
  height: 640,
  x: 355,
  y: -275

})

funfact4.hide()

forever(() => {
  if (randompopup === 4) {
    funfact4.show()

  }
})

funfact4.onMouseDown(() => {
  funfact4.hide()
})

//FUN 5

var funfact5 = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/funfact5.png",
  width: 640,
  height: 640,
  x: 355,
  y: -275

})

funfact5.hide()

forever(() => {
  if (randompopup === 5) {
    funfact5.show()

  }
})

funfact5.onMouseDown(() => {
  funfact5.hide()
})

//FUN 6

var funfact6 = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/funfact6.png",
  width: 640,
  height: 640,
  x: 355,
  y: -275

})

funfact6.hide()

forever(() => {
  if (randompopup === 6) {
    funfact6.show()

  }
})

funfact6.onMouseDown(() => {
  funfact6.hide()
})

//FUN 7

var funfact7 = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/funfact7.png",
  width: 640,
  height: 640,
  x: 355,
  y: -275

})

funfact7.hide()

forever(() => {
  if (randompopup === 7) {
    funfact7.show()

  }
})

funfact7.onMouseDown(() => {
  funfact7.hide()
})

//Fun 8

var funfact8 = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/funfact8.png",
  width: 640,
  height: 640,
  x: 355,
  y: -275

})

funfact8.hide()

forever(() => {
  if (randompopup === 8) {
    funfact8.show()

  }
})

funfact8.onMouseDown(() => {
  funfact.hide()
})

//FUN 9

var funfact9 = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/funfact9.png",
  width: 640,
  height: 640,
  x: 355,
  y: -275

})

funfact9.hide()

forever(() => {
  if (randompopup === 9) {
    funfact9.show()

  }
})

funfact9.onMouseDown(() => {
  funfact9.hide()
})

//FUN 10

var funfact10 = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/funfact10.png",
  width: 640,
  height: 640,
  x: 355,
  y: -275

})

funfact10.hide()

forever(() => {
  if (randompopup === 10) {
    funfact10.show()

  }
})

funfact10.onMouseDown(() => {
  funfact10.hide()
})

//FUN 11

var funfact11 = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/funfact11.png",
  width: 640,
  height: 640,
  x: 355,
  y: -275

})

funfact11.hide()

forever(() => {
  if (randompopup === 11) {
    funfact11.show()

  }
})

funfact11.onMouseDown(() => {
  funfact11.hide()
})

//FUN 12

var funfact12 = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/funfact12.png",
  width: 640,
  height: 640,
  x: 355,
  y: -275

})

funfact12.hide()

forever(() => {
  if (randompopup === 12) {
    funfact12.show()

  }
})

funfact12.onMouseDown(() => {
  funfact12.hide()
})

//FUN 13

var funfact13 = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/funfact13.png",
  width: 640,
  height: 640,
  x: 355,
  y: -275

})

funfact13.hide()

forever(() => {
  if (randompopup === 13) {
    funfact13.show()

  }
})

funfact13.onMouseDown(() => {
  funfact13.hide()
})

//FUN 14

var funfact14 = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/funfact14.png",
  width: 640,
  height: 640,
  x: 355,
  y: -275

})

funfact14.hide()

forever(() => {
  if (randompopup === 14) {
    funfact14.show()

  }
})

funfact14.onMouseDown(() => {
  funfact14.hide()
})

//FUN 15

var funfact15 = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/funfact15.png",
  width: 640,
  height: 640,
  x: 355,
  y: -275

})

funfact15.hide()

forever(() => {
  if (randompopup === 15) {
    funfact15.show()

  }
})

funfact15.onMouseDown(() => {
  funfact15.hide()
})

//FUN 16

var funfact16 = new Image({
  url: "https://raw.githubusercontent.com/Tpixelminer/Energy-Clicker/master/funfact16.png",
  width: 640,
  height: 640,
  x: 355,
  y: -275

})

funfact16.hide()

forever(() => {
  if (randompopup === 16) {
    funfact16.show()

  }
})

funfact16.onMouseDown(() => {
  funfact16.hide()
})
