import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import * as $ from 'jquery';

// Importar a classe dos campos do formulário
import { GameForms } from '../classes/game-forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // Declara campos do formulário
  GameForms: GameForms = new GameForms();

  // Armazena os nomes das plataformas
  platforms: Observable<any[]>;

  constructor(private db: AngularFirestore) {

    this.platforms = this.db.collection('platforms', (ref) => ref.orderBy('name')).valueChanges();

  }

  ngOnInit(): void {

    $(document).ready(() => { // JQuery
      $(window).resize(() => {
        if (window.innerWidth > 539) {
          $('aside').show(0);
        } else {
          $('aside').hide(0);
        }
      });
    });
  }

// Método que processa o formulário
onSubmit() {
  console.log(this.GameForms);

}







  // Oculta / exibe ajuda
  helpToggle() {
    $(document).ready(() => {

      if ($('aside').is(':visible')) {
        this.helpHide();
      } else {
        this.helpShow();
      }

    });
    return false;
  }

  // Oculta ajuda
  helpHide() {
    $('aside').slideUp('fast');
  }

  // Mostra ajuda
  helpShow() {
    $('aside').slideDown('fast');
  }

  hideAside() {
    if (window.innerWidth > 539) {
      return false;
    } else {
      this.helpHide();
    }
  }

}
