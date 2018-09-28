import { NgModule } from'@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ViewPostComponent } from './view-post/view-post.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post', component: PostComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'edit-post/posts/:id', component: EditPostComponent },
  { path: 'view-post/posts/:id', component: ViewPostComponent },
  { path: 'posts/:id', component: PostComponent }
]


@NgModule({
    exports: [RouterModule],
    imports: [
      RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }