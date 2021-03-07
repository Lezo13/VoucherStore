import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/core/services/SpinnerService/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  showSpinner: boolean = false;

  constructor(private spinnerService: SpinnerService, private cdRef: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {

    this.spinnerService.getSpinnerObserver().subscribe((status: string) => {
      this.showSpinner = (status === 'start');
      this.cdRef.detectChanges();
    });
  }

}