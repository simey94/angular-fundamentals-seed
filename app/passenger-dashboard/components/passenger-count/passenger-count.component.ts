import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-count',
  template: `
  <div>
      <h3> Airline Passengers! </h3>
      <div>
        Total Checked in: {{ checkedInCount() }} / {{ items.length }}
      </div>
  </div>
  `
})

export class PassengerCountComponent {
  @Input() // input binding
  items: Passenger[];
  checkedInCount(): number {
    if(!this.items) return;
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
  }
}
