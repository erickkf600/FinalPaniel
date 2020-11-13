import { Router } from '@angular/router';
import { Injectable}  from "@angular/core";

import Swal from "sweetalert2";
//import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AlertUtilitys {
  constructor(
    protected router: Router, 
    //private toastr: ToastrService
    ) {}

  showMsg(type, title, text, confirmButtonText) {
    //Types: 'warning', 'error', 'success', 'info', 'question'

    Swal.fire({
      title: title,
      text: text,
      type: type,
      confirmButtonText: confirmButtonText,
      confirmButtonClass: "primary-button",
      customClass: {
        container: 'app-swal',
      }
    });
  }



  // comfirmMsg(title, confirmButtonText, cancelButtonText, thenFunc){
  //   swal.fire({
  //     showCancelButton: true,
  //     buttonsStyling: false,
  //     animation: false,
  //     customClass: "app-swal animated zoomIn faster",
  //     confirmButtonClass: "primary-button",
  //     cancelButtonClass: "secundary-button",

  //     title: title,
  //     type: 'warning',
  //     confirmButtonText: confirmButtonText,
  //     cancelButtonText: cancelButtonText

  //   }).then(result =>{thenFunc});
  // }

  showSuccess(msg) {
    Swal.fire({
      showCancelButton: false,
      buttonsStyling: false,
      animation: false,
      padding: "1em 1em 2em 1em",
      customClass: "app-swal animated zoomIn faster",
      confirmButtonClass: "primary-button",
      cancelButtonClass: "secundary-button",

      title: "Sucesso",
      text: msg,
      type: "success",
      confirmButtonText: "OK"
    }).then(result =>{
      // if(result){
      //   location.reload()
      // }
      //location.reload(true);
    })
  }

  //LOADING
  loading(texto){
    Swal.fire({
      title: texto,  
    });
    Swal.showLoading();
  }

  //TOAST MESSAGE
  // toastSuccess() {
  //   this.toastr.success('Imagem Atualizada');
  // }
  // toastError(err) {
  //   this.toastr.error('ERRO', err);
  // }

}
