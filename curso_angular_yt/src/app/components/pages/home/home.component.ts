import { Component, OnInit ,Input} from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allMoments: Moment[] = []
  moments: Moment[]= []
  baseApi = environment.baseApiUrl

  faSearch = faSearch
  seachTerm: string = '';


  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items)=> {
      const data = items.data

      data.map((items) => {
        items.created_at = new Date(items.created_at!).toLocaleDateString('pt-Br');
      })

      this.allMoments = data;
      this.moments = data;

    })
  }


  search(e: Event):void {
    const target = e.target as HTMLInputElement; //da alow nos input
    const value = target.value; //pega o valor do input

    this.moments = this.allMoments.filter((moment) =>{ return moment.title?.toLowerCase().includes(value)})
  }
}
