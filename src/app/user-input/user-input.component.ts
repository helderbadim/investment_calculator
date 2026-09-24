import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  /** Initial investment input */
  enteredInitialInvestment = signal<string>('0');

  /** Annual investment input */
  enteredAnnualInvestment = signal<string>('0');

  /** Expected return input */
  enteredExpectedReturn = signal<string>('5');

  /** Duration input */
  enteredDuration = signal<string>('10');

  /** Investment service */
  private investmentService = inject(InvestmentService);

  /**
   * Emit the investment input data to the parent component and reset the input fields
   * @returns { InvestmentInput }
   */
  onSubmit() {
    this.investmentService.calculateInvestmentResults({ initialInvestment: +this.enteredInitialInvestment(), annualInvestment: +this.enteredAnnualInvestment(), expectedReturn: +this.enteredExpectedReturn(), duration: +this.enteredDuration() });
  }
}
