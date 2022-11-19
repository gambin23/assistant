import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'food-recipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesComponent {

}
