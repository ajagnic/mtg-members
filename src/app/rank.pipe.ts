import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';
import { MemberService } from './member.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Pipe({
  name: 'rank',
  pure: false
})

export class RankPipe implements PipeTransform {
  transform(input: any[], filter) {
    let output: any[] = [];

    if (filter === 'rank') {
      output = input.sort(function (a, b) {
        return a.rank - b.rank;
      });
    } else {
      output = input;
    }
  return output;
  }
}
