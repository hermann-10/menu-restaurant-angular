import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-menudetails',
  standalone: true,
  imports: [],
  templateUrl: './menudetails.component.html',
  styleUrl: './menudetails.component.css'
})
export class MenudetailsComponent implements OnInit {
  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      console.log(id);
      const foodType = this.route.queryParams
        .pipe(
          tap((data) => {
            console.log({ dataType: data['type'], id: id! });
        }),
         switchMap((data: Params) => { //To switch from one type of observable to another -> I use switchMap
          return this.menuService.getMenuItem(data['type'], id!)
         })
        )
        .subscribe({
          next: res => {
            console.log({ insideNext: res });
          }
        });
  }

  route = inject(ActivatedRoute);
  menuService = inject(MenuService)
}
