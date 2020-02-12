import {Pipe, PipeTransform} from '@angular/core';
import {Users} from '../../resetpasswd/resetpasswd.component';

@Pipe({
  name: 'searchUser'
})

export class SearchPipe implements PipeTransform {
  transform(users: Users[], search =''): Users[] {
    if(!search.trim()) {
      return users
    }
    return users.filter(user => {
      return user.username.toLowerCase().includes(search.toLowerCase()) || user.surname.toLowerCase().includes(search.toLowerCase())
    })
  }

}
