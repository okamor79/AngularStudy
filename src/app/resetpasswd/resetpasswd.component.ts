import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Environment} from '@angular/compiler-cli/src/ngtsc/typecheck/src/environment';
import {environment} from '../../environments/environment';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, pipe} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {ModalComponent} from '../modal/modal.component';
import {RefDirective} from '../ref.directive';

export interface Users {
  username: string;
  surname: string;
  name: string;
  fname: string;
  position: string;
  locked: number;
  enable: number;
  rolename: string;
  roleid: number;
}

export interface Resp {
  response: string
}

@Component({
  selector: 'app-resetpasswd',
  templateUrl: './resetpasswd.component.html',
  styleUrls: ['./resetpasswd.component.scss']
})
export class ResetpasswdComponent implements OnInit {

  @ViewChild(RefDirective, {static: true}) refDirective: RefDirective

  form: FormGroup

  users: Users[] = []
  page = 1
  pageSize = 15
  searchUser = ''
  collectionSize = 0
  ICuserLogin = ''
  defaultPassword = ''

  constructor(private http: HttpClient, private config: NgbPaginationConfig, private resolve: ComponentFactoryResolver) {
    config.size = 'sm';
    config.boundaryLinks = true;
  }

  ngOnInit() {
    this.form = new FormGroup({
      userLogin: new FormControl('')
    })
    this.http.get<Users[]>(`${environment.urlAPIService}/getUserList`).subscribe(user => {
      this.users = user;
      this.collectionSize = user.length;
    });
  }

  submit(userLogin: string) {
    //const modalFactory = this.resolve.resolveComponentFactory(ModalComponent);
    //const component = this.refDirective.containerRef.createComponent(modalFactory);
    this.http.post(`${environment.urlAPIService}/resetPassword`, new HttpParams().set('username', userLogin))
        .subscribe( (r: Resp) => {
//         component.instance.newPassword = r.response
    // //      console.log(r.response)
          this.defaultPassword = r.response
          this.ICuserLogin = userLogin
          this.form.setValue({
            userLogin: ''
          })
        })

    // component.instance.close.subscribe(() => {
    //   this.ref.containerRef.clear()
    // })
  }

  select(username: string) {
    this.form.setValue({
      userLogin: username
    })
  }
}
