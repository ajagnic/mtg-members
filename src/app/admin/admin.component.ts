import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(name: string, location: string, rank: number, deck: string) {
    const newMember: Player = new Player(name, location, rank, deck);
    console.log(newMember);
    this.memberService.addMember(newMember);
  }
}
