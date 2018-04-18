import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {equalValidator, mobileAsyncValidator, mobileValidator} from '../validators/validators';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {

  // mobileValidator(control: FormControl): any {
  //   var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  //   let valid = myreg.test(control.value);
  //   console.log('mobile的校验结果是' + valid);
  //   return valid ? null : {mobile: true};
  // }
  //
  // equalValidator(group: FormGroup): any {
  //   let password: FormControl = group.get('password') as FormControl;
  //   let pconfirm: FormControl = group.get('pconfirm') as FormControl;
  //   let valid: boolean = (password.value === pconfirm.value);
  //   console.log('密码校验结果：' + valid);
  //   return valid ? null : {equal: true};
  // }

  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    // this.formModel = new FormGroup({
    //   userName: new FormControl(),
    //   mobile: new FormControl(),
    //   passwordGroup: new FormGroup({
    //     password: new FormControl(),
    //     pconfirm: new FormControl(),
    //   })
    // });
    this.formModel = fb.group({
      userName: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator, mobileAsyncValidator],
      passwordGroup: fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: ['']
      }, {validator: equalValidator})
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    // let isValid: boolean = this.formModel.get('userName').valid;
    // console.log('userName的校验结果：' + isValid);
    // let errors: any = this.formModel.get('userName').errors;
    // console.log('userName的错误信息是：' + JSON.stringify(errors));
    // console.log(this.formModel.value);
    // let errors: any = this.formModel.get('passwordGroup').errors;
    // console.log('密码验证的错误信息是：' + JSON.stringify(errors));
    if (this.formModel.valid == true) {
      console.log('表单校验通过！');
      console.log(this.formModel.value);
    }
  }

}
