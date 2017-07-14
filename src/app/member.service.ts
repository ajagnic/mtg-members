import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
  }

  getMembers() {
    return this.members;
  }

  addMember(newMember: Player) {
    this.members.push(newMember);
  }

  getMemberById(memberId: string) {
    return this.database.object('members/' + memberId);
  }

  updateMember(updatedMember) {
    const memberEntry = this.getMemberById(updatedMember.$key);
    memberEntry.update({
      name: updatedMember.name,
      location: updatedMember.location,
      rank: updatedMember.rank,
      deck: updatedMember.deck
    });
  }

}
