import { Component } from '@angular/core';

@Component({
  selector: 'app-image-post',
  templateUrl: './image-post.component.html',
  styleUrls: ['./image-post.component.css']
})
export class ImagePostComponent {
  imageUrl = "https://images.unsplash.com/photo-1604932553061-2a746149b3ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
  caption = "I love bike paths!"
  poster = "John" 
}
