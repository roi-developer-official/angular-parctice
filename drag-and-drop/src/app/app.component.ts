import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lists = [
    {
      title:'list - One',
      items: ["just taking a shower", "take a shower"]
    },
    {
      title:'list - Two',
      items: ["just sleeping", "sleep"]
    },
    {
      title:'list - Three',
      items: ["just eating", "eat"]
    }
  ]

  drop(e){
    const dropped = e.container.data;
    const dragged = e.previousContainer.data;
    const {previousIndex, currentIndex } = e;
    
    dragged.items.splice(previousIndex, 1)
    dropped.items.splice(currentIndex,0, e.item.data )

  }
}
