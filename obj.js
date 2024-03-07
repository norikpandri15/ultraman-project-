const ultraman = {
      name : "tiga",
      height : 100,
      isDead : false,
      color : "black",
      address:{
        planet:{
          name:"namex",
          moon:[83930, 83030, 674784]
        },
        galaxy:"andromeda 122"
      },
      weapons:["sword","lol","oho"]
    }
    console.log("ultraman.name", ultraman.height, ultraman.isDead)
    console.log(ultraman["name"], ultraman["height"])
    
    const prop = "height"
    console.log(ultraman[prop])
    console.log(ultraman.address.planet.moon)