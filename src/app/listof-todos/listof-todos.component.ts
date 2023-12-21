import { Component, OnInit } from '@angular/core';

export class Todos{
  constructor(
    public id: number,
    public desc: String,
    public targetDate: Date,
    public isCompleted: boolean,
    public status: String
  ){

  }
}

@Component({
  selector: 'app-listof-todos',
  templateUrl: './listof-todos.component.html',
  styleUrls: ['./listof-todos.component.css']
})
export class ListofTodosComponent implements OnInit {

  todos = [
    new Todos(1,"Weekly house chores",new Date(), false, "Active"),
    new Todos(2,"Singing Training",new Date(), true, "Completed"),
    new Todos(3,"Prepare for exams",new Date(), false, "Active"),
    new Todos(4,"Order groceries",new Date(), true, "Completed"),
    new Todos(5,"Vacation Plan",new Date(), false, "Active")

  ]

  constructor() { }

  ngOnInit() {
  }

}
