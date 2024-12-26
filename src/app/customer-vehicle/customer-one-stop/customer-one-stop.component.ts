import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-one-stop',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './customer-one-stop.component.html',
  styleUrl: './customer-one-stop.component.scss'
})

//getProductsを利用して、一覧に表示するProducts取り出す。=>product.service.ts
export class CustomerOneStopComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

