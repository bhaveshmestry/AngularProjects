import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Homepage/home/home.component';
import { HometableComponent } from './Components/Homepage/hometable/hometable.component';
import { InstrumentComponent } from './Components/Instruments/instrument/instrument.component';
import { VocalComponent } from './Components/Vocals/vocal/vocal.component';
import { StudioComponent } from './Components/Studio/studio/studio.component';
import { SlidersComponent } from './Components/Studio/sliders/sliders.component';
import { CtrlbuttonsComponent } from './Components/Studio/ctrlbuttons/ctrlbuttons.component';
import { KeyboardComponent } from './Components/Studio/keyboard/keyboard.component';
import { DrumpadComponent } from './Components/Studio/drumpad/drumpad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HometableComponent,
    InstrumentComponent,
    VocalComponent,
    StudioComponent,
    SlidersComponent,
    CtrlbuttonsComponent,
    KeyboardComponent,
    DrumpadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
