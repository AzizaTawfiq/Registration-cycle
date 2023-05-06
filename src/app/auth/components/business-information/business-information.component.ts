import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-business-information',
  templateUrl: './business-information.component.html',
  styleUrls: ['./business-information.component.scss'],
})
export class BusinessInformationComponent implements OnInit {
  /**
   * The user register form.
   */
  form!: FormGroup;

  /**
   * The list of governorates.
   */
  governorates = [
    {
      id: 1,
      name: 'Cairo',
    },
    {
      id: 2,
      name: 'Qena',
    },
    {
      id: 3,
      name: 'Sohag',
    },
    {
      id: 4,
      name: 'Assuit',
    },
  ];

  /**
   * The list of districts.
   */
  districts = [
    {
      id: 1,
      name: 'Naser city',
    },
    {
      id: 2,
      name: 'Giza',
    },
    {
      id: 3,
      name: 'Doki',
    },
    {
      id: 4,
      name: 'Al-shrouk',
    },
  ];

  /**
   * The list of contact methods.
   */
  contactMethods = [
    {
      id: 1,
      name: 'Facebook',
      icon: 'fa fa-facebook',
    },
    {
      id: 2,
      name: 'Linkedin',
      icon: 'fa fa-linkedin',
    },
    {
      id: 3,
      name: 'friend',
      icon: 'fa fa-user',
    },
    {
      id: 4,
      name: 'Twitter',
      icon: 'fa fa-twitter',
    },
  ];

  /**
   *Gets the business type form control.
   */
  get businessType() {
    return this.form.get('businessType');
  }

  /**
   *Gets the governorate form control.
   */
  get governorate() {
    return this.form.get('governorateId');
  }

  /**
   *Gets the district form control.
   */
  get district() {
    return this.form.get('districtId');
  }

  /**
   *Gets the contact method form control.
   */
  get contactMethod() {
    return this.form.get('contactMethodId');
  }

  /**
   * @param formBuilder The form builder service.
   * @param router The form router service.
   */
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.init();
  }

  /**
   * Destroy component data
   */
  ngOnDestroy() {}

  /**
   * Initialize component data.
   */
  init() {
    this.initForm();
  }

  /**
   * Initialize form and add validators.
   */
  initForm() {
    this.form = this.formBuilder.group({
      businessType: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
        ],
      ],
      governorateId: [null, [Validators.required]],
      districtId: [null, [Validators.required]],
      contactMethodId: [null, [Validators.required]],
      isUsingSystem: [false],
    });
  }

  /**
   * Submits the user register form.
   */
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else this.confirm();
    /* this.router.navigate(['/success']); */
  }

  /**
   * Confirms the form submit.
   */
  confirm() {
    Swal.fire(
      'Successfully',
      'Your account is Successfully created just few steps more to setup your business account',
      'success'
    );
  }
}
