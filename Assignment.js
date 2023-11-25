class Car {
    constructor(brand, model, year, color, price, gas) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
    }

    honk() {
        console.log("Tuut tuut");
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: $${this.price}`);
    }

    race(turns) {
        for (let i = 1; i <= turns; i++) {
            console.log(`\nTurn ${i}:`);

            // Cars lose 5 litres each turn
            this.gas -= 5;

            // If the car is not of the current year, additional litres lost based on the age of the car
            if (this.year !== new Date().getFullYear()) {
                const yearsOld = new Date().getFullYear() - this.year;
                this.gas -= yearsOld;
            }

            console.log(`${this.brand} ${this.model} has ${this.gas} litres of gas remaining.`);
        }
    }
}

// Create car objects
const car1 = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
const car2 = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
const car3 = new Car("BMW", "X5", 2022, "Green", 60000, 65);
const car4 = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
const car5 = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
const car6 = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);

// Invoke honk method for each car
car1.honk();
car2.honk();
car3.honk();
car4.honk();
car5.honk();
car6.honk();

// Race simulation for 7 turns
console.log("\nRace Simulation:");
car1.race(7);
car2.race(7);
car3.race(7);
car4.race(7);
car5.race(7);
car6.race(7);