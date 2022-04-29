import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a11y-p1';
  public form: FormGroup = null;

  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>
  public firstName = 'Flávio'
  public modalRef: ModalRef;

  constructor(
    public formBuilder: FormBuilder,
    private modalService: ModalService
  ){
    this.form = formBuilder.group({
      yesNoAnswer: [null]
    })
  }

  public submit(): void{
    console.log(this.form.value);
  }

  public show(): void{
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    })
  }
}
