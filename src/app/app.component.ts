import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FIP-Dosage-Calculator';

  number_of_mils!: string;

  dosage_values: number[] = [
    6,
    8,
    10,
    12,
  ];

  concentration_values: concentration[] = [
    { brand: "Lucky 15", concentration: 15 },
    { brand: "Lucky 20", concentration: 20},
    { brand: "Valor", concentration: 17 },
    { brand: "Karma", concentration: 17 },
    { brand: "Pine", concentration: 15 },
    { brand: "Azul", concentration: 17 },
    { brand: "Rainbow", concentration: 20 },
    { brand: "Capella", concentration: 15 },
    { brand: "Aura 20", concentration: 20 },
    { brand: "Aura 17", concentration: 17 },
    { brand: "Aura 15", concentration: 15 },
  ];

  dosage_FG = new FormGroup({
    cat_weight: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+([.][0-9]*?)?$")]),
    dosage: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"),]),
    concentration: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"),])
  });

  submit(): void {

    const weight = this.dosage_FG.controls.cat_weight.value;
    const dosage = this.dosage_FG.controls.dosage.value;
    const concentration = this.dosage_FG.controls.concentration.value;

    console.log(`Cat Weight: ${weight}\nDosage: ${dosage}\nConcentration: ${concentration}`)
  
    const mils = weight * dosage * (1/concentration);

    this.number_of_mils = (Math.round(mils * 100) / 100).toFixed(2);

    console.log(`Number of Mils: ${mils}\nNumber of Mils Rounded: ${this.number_of_mils}`);
  }
}

interface concentration {
  brand: string,
  concentration: number
}
