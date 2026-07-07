import { Pipe, PipeTransform } from '@angular/core';

// HO-3 Task 3: Custom pipe - transforms credits number to readable label
@Pipe({ name: 'creditLabel', standalone: true })
export class CreditLabelPipe implements PipeTransform {
  transform(credits: number | null | undefined): string {
    if (credits === null || credits === undefined || credits === 0) return 'No Credits';
    return credits === 1 ? '1 Credit' : `${credits} Credits`;
  }
}
