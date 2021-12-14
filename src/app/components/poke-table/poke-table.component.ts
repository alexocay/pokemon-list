import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss'],
})
export class PokeTableComponent implements OnInit {
  //Table columns
  displayedColumns: string[] = ['id', 'name', 'weight'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data); //Fill the array empty
  items = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator; //Paginator manage
  @ViewChild(MatSort) sort: MatSort; //Sort manage

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.getItem();
  }

  getItem() {
    let itemData;
    for (let i = 1; i <= 300; i++) {
      this.itemService.getItem(i).subscribe(
        (res) => {
          itemData = {
            id: i,
            name: res.name,
            weight: res.weight,
          };
          this.data.push(itemData); //Put Data in Array
          this.dataSource = new MatTableDataSource<any>(this.data); //refresh dataSource
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  applyFilter(event: Event) {
    //Paginator filter
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
