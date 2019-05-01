import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  username = '';
  routeParamsSubscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.username = this.route.snapshot.paramMap.get('username');
    this.route.params.subscribe(params => {
      this.username = params['username'];
    });

  }
  // ngOnDestroy() { this.routeParamsSubscription.unsubscribe();}

}
