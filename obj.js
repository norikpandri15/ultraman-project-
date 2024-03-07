const ultraman = {
  name: "tiga",
  height: 100,
  isDead: false,
  color: "red",
  weapons: ["sword", "shield", "lasso"],
  attack: () => {
    console.log("sword attack!")
  },
  beam: (number) => console.log("spacium ray beam " + number + "%")
}

ultraman.attack()
ultraman.beam(80)

console.log(ultraman)
