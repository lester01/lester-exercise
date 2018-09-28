import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { PostService } from './post.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';

import { AppRoutingModule } from './app-routing.module';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ViewPostComponent } from './view-post/view-post.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, HomeComponent, NavbarComponent, PostComponent, PostFormComponent, AddPostComponent, EditPostComponent, ViewPostComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PostService],

})
export class AppModule { }
