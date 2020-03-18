import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SauveteurToolbarComponent } from './Sauveteur-toolbar/Sauveteur-toolbar.component';
import { SauveteurListingComponent } from './Sauveteur-listing/Sauveteur-listing.component';
import { SauveteurAlertsComponent } from './Sauveteur-alerts/Sauveteur-alerts.component';
import { SauveteurDetailsComponent } from './Sauveteur-details/Sauveteur-details.component';
import { FollowComponent } from './follow/follow.component';
import { InfosComponent } from './infos/infos';

@NgModule({
  declarations: [
    AppComponent,
    SauveteurToolbarComponent,
    SauveteurListingComponent,
    SauveteurAlertsComponent,
    SauveteurDetailsComponent,
    FollowComponent,
    InfosComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTableModule,
    RouterModule.forRoot([
      { path: '', component: SauveteurListingComponent },
      { path: 'Sauveteurs/:SauveteurID', component: SauveteurDetailsComponent },
      { path: 'follow', component: FollowComponent },
      { path: 'infos', component: InfosComponent }
    ]),
    MatTooltipModule,
    MatSnackBarModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
