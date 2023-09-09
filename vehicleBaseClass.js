class Vehicles {
  constructor(mileage, color, company){
    this.color = color;
    this.mileage = mileage;
    this.company = company;
  }
  honda() {
    if(this.company === "Honda") {
        console.log("you have a honda car!");
    }
  }
  badColor() {
    if(this.color === "yellow" && "orange") {
        console.log("those are not good colors for a car!");
    }
  }
  speedster() {
    if(this.mileage >= 90) {
        console.log("Stop speeding >:[")
    }
  }
}
 let hondaCar = new Vehicles(120, "orange", "Honda");

 console.log(hondaCar)
 