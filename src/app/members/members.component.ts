import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Player } from '../player.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [MemberService]
})
export class MembersComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filter = 'inherit';

  constructor(public memberService: MemberService, public router: Router) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  gotoDetail(member) {
    this.router.navigate(['members', member.$key]);
  }

  rankSort() {
    if (this.filter === 'inherit') {
      this.filter = 'rank';
    } else {
      this.filter = 'inherit';
    }
  }

}
