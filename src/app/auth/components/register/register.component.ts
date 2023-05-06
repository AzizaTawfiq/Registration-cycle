import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  /**
   * The confirm modal template reference.
   */
  @ViewChild('confirmModalRef') confirmModalRef!: ElementRef<any>;

  /**
   * The user register form.
   */
  form!: FormGroup;

  /**
   * Gets or sets field text type.
   */
  fieldTextType: boolean = true;

  /**
   * Gets the user first name form control.
   */
  get firstName() {
    return this.form.get('firstName');
  }

  /**
   * Gets the user last name form control.
   */
  get lastName() {
    return this.form.get('lastName');
  }

  /**
   * Gets the user email address form control.
   */
  get email() {
    return this.form.get('email');
  }

  /**
   * Gets the user phone form control.
   */
  get phone() {
    return this.form.get('phone');
  }

  /**
   * Gets the user password form control.
   */
  get password() {
    return this.form.get('password');
  }

  /**
   * @param modalService The modal service.
   * @param formBuilder The form builder service.
   * @param router The form router service.
   */
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

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
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9!@#$%^&*]{6,16}$'),
        ],
      ],
      isAgree: [false],
    });
  }

  /**
   * Submits the user register form.
   */
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else this.openModal(this.confirmModalRef);
  }

  /**
   * Confirms the form submit.
   */
  confirm() {}

  /**
   * Opens the modal of the given templateRef.
   * @param modalRef The modal templateRef to be opened.
   */
  openModal(modalRef: any) {
    this.modalService.open(modalRef);
  }

  /**
   *verifies code sent correctly.
   */
  verify() {
    this.modalService.dismissAll();
    this.router.navigate(['/business-information']);
  }

  /**
   * Toggles password field text type.
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
