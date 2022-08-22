import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { ActivatedRoute, Router } from '@angular/router';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';
import { MessagesService } from 'src/app/services/messages.service';



@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {

  moment?: Moment;
  baseApi = environment.baseApiUrl;

  faTimes = faTimes
  faEdit =  faEdit


  constructor( private momentService: MomentService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router, )  { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.momentService.getMoment(id).subscribe((item) => (this.moment = item.data))


  }

  async removeHandler(id: number){
    await this.momentService.removeMoment(id).subscribe()

    this.messagesService.add("Momento excluir com sucesso!!!")

    this.router.navigate(['/'])

  }

}
