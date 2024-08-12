class Surgeon {
    constructor(name, department) {
      this._name = name; // _ to show that the properties shouldnt be accessed directly
      this._department = department;
      this._remainingVacationDays = 20;
    }
  
    get name(){
      return this._name;
    }
  
    get department(){
      return this._department;
    }
  
    get remainingVacationDays(){
      return this._remainingVacationDays
    } 
    
    takeVacationDays(daysOff){
        return this._remainingVacationDays -= daysOff;
    } 
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');

const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

console.log(surgeonRomero.name); // Dont have to call getters like a method

surgeonRomero.takeVacationDays(3);

console.log(surgeonRomero.remainingVacationDays)