import { Component, OnInit, Input } from '@angular/core';
import { FaqItem } from '@app/shared/interfaces/faqitem.model';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  @Input() resources: FaqItem[];

  faqs: { id: number, category: string, question: string, answer: string }[] = [
    {
      id: 1,
      category: 'Sentido de la vida',
      question: 'Porqué estamos aqui?',
      answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, \
        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a \
        bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson \
        cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim \
        aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.'
    },
    {
      id: 2,
      category: 'Sentido de la vida',
      question: 'Que es lo más importante?',
      answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, \
        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a \
        bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson \
        cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim \
        aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.'
    },
    {
      id: 3,
      category: 'Sentido de la vida',
      question: 'Que es lo menos importante?',
      answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, \
        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a \
        bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson \
        cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim \
        aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.'
    },
    {
      id: 4,
      category: 'Modelo de negocio',
      question: 'A que nos dedicamos?',
      answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, \
        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a \
        bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson \
        cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim \
        aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.'
    },
    {
      id: 5,
      category: 'Modelo de negocio',
      question: 'Quienes somos?',
      answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, \
        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a \
        bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson \
        cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim \
        aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.'
    },
    {
      id: 6,
      category: 'Preguntas de usuarios',
      question: 'Quienes son?',
      answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, \
        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a \
        bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson \
        cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim \
        aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.'
    },
    {
      id: 7,
      category: 'Preguntas del usuario',
      question: 'Que son los estudios?',
      answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, \
        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a \
        bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson \
        cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim \
        aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.'
    },
    {
      id: 8,
      category: 'Preguntas de los estudios',
      question: 'Que son proyectos?',
      answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, \
        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a \
        bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson \
        cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim \
        aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.'
    }
  ];
  categories: {cat: string, faqs: any[]}[] = [];

  constructor() { }

  ngOnInit(): void {
    for (const preg of this.resources) {
      const aux = this.categories.find(c => c.cat === preg.category);
      if (aux) {
        aux.faqs.push(preg);
      } else {
        this.categories.push({cat: preg.category, faqs: [preg]});
      }
    }
  }

}
