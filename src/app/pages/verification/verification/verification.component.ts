import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VerificationService } from './verification.service';
import { finalize } from 'rxjs/operators';
import { serverError, componentError } from 'src/app/helper';
import { NotificationService } from 'src/app/components/notification/notification.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  ourDate = new Date();
  
  constructor(private router: Router,  private actRoute: ActivatedRoute,
    private verifyService: VerificationService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    const userId = this.actRoute.snapshot.paramMap.get('userId');
    const code = this.actRoute.snapshot.paramMap.get('code');

    if(userId && code){
      console.log("params", userId, code);

      this.verifyService.verifyEmail({userId, code}).pipe(
        finalize( () => {

        })
      ).subscribe(
        res => {
          if(!res.status){
            componentError(res.message, this.notificationService);
            return;
          }
          console.log(res);
          this.notificationService.success(res.message);
        },error => {
          serverError(error, this.notificationService);
        }
      )
    }
  }

  onlogin(){
    this.router.navigate(['/'])
  }

}
