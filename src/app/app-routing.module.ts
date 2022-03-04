import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Homepage/home/home.component';
import { InstrumentComponent } from './Components/Instruments/instrument/instrument.component';
import { StudioComponent } from './Components/Studio/studio/studio.component';
import { VocalComponent } from './Components/Vocals/vocal/vocal.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'instruments' , component: InstrumentComponent},
  {path: 'vocals' , component: VocalComponent},
  {path: 'studio' , component: StudioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
