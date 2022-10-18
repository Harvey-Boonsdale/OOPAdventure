class Room {
  constructor(name) {
    this.name = name;
    this.linkedRooms = {};
    this.description = "";
  }

  describe() {
    return "You have entered the " + this.name + ". " + this.description;
  }

  linkRoom(direction, roomToLink) {
    this.linkedRooms[direction] = roomToLink;
  }

  moveBy(direction) {
    if (direction in this.linkedRooms) {
      return this.linkedRooms[direction];
    } else {
      alert("You can't go that way");
      return this;
    }
  }
}

class Character {
  constructor(name) {
    this.name = name;
    this.inventory = "";
    this.power = "";
    this.health = 0;
  }

  speak() {
    return "My name is " + this.name + ". Fear my " + this.power;
  }

  attack() {
    return this.name + " attacks with " + this.inventory;
  }
}

const kitchen = new Room("Kitchen");
kitchen.description =
  "It is looking rather worse for wear with a two ring burner, cheap microwave and a cupboard with a broken door.";
const frontRoom = new Room("Front Room");
frontRoom.description =
  "The paint is peeling off the walls and there is clearly a damp problem. You pick up a box of rat poison from the table";
const entranceHall = new Room("Entrance Hall");
entranceHall.description = "There is an odd smell.";
const diningRoom = new Room("Dining Room");
diningRoom.description = "You wouldn't want to eat in here.";

kitchen.linkRoom("south", entranceHall);
kitchen.linkRoom("east", diningRoom);
entranceHall.linkRoom("north", kitchen);
frontRoom.linkRoom("north", diningRoom);
diningRoom.linkRoom("west", kitchen);
diningRoom.linkRoom("south", frontRoom);

const user1 = new Character("Graham");
user1.power = "knowledge of my rights as a tenant";
const enemy1 = new Character("Evil Landlord");
enemy1.inventory = "frying pan";
enemy1.power = "ability to raise your rent";
const enemy2 = new Character("Rats");
enemy2.inventory;
("Teeth");
enemy2.power;
("Rabies");

function displayRoomInfo(room) {
  document.getElementById("textarea").innerHTML = room.describe();
  document.getElementById("ui").focus();
}

function startGame() {
  currentRoom = entranceHall;
  displayRoomInfo(currentRoom);
}

startGame();

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    command = document.getElementById("ui").value;
    const directions = ["north", "south", "east", "west"];
    if (directions.includes(command.toLowerCase())) {
      currentRoom = currentRoom.moveBy(command);
      displayRoomInfo(currentRoom);
    } else {
      document.getElementById("ui").value = "";
      alert("That is not a valid command, please try again");
    }
  }
});

if (currentRoom.name === "Front Room") {
  user1.inventory = "Poison";
}

console.log(user1.inventory);
