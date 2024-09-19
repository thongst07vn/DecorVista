import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SliderComponent } from '../slider/slider.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Conect } from '../../conect';

@Component({
  standalone: true,
  imports: [RouterOutlet,RouterLink,SliderComponent,HeaderComponent,FooterComponent],
  templateUrl: './layouts.component.html'
})
export class LayoutsComponent implements OnInit {
  constructor(
    private contect : Conect
  ){}
  ngOnInit(){
    this.contect.removeScript("assets/lib/jquery/dist/jquery.js")
    this.contect.removeScript("assets/lib/bootstrap/dist/js/bootstrap.min.js")
    this.contect.removeScript("assets/lib/wow/dist/wow.js")
    this.contect.removeScript("assets/lib/jquery.mb.ytplayer/dist/jquery.mb.YTPlayer.js")
    this.contect.removeScript("assets/lib/isotope/dist/isotope.pkgd.js")
    this.contect.removeScript("assets/lib/imagesloaded/imagesloaded.pkgd.js")
    this.contect.removeScript("assets/lib/flexslider/jquery.flexslider.js")
    this.contect.removeScript("assets/lib/owl.carousel/dist/owl.carousel.min.js")
    this.contect.removeScript("assets/lib/smoothscroll.js")
    this.contect.removeScript("assets/lib/magnific-popup/dist/jquery.magnific-popup.js")
    this.contect.removeScript("assets/lib/simple-text-rotator/jquery.simple-text-rotator.min.js")
    this.contect.removeScript("assets/js/plugins.js")
    this.contect.removeScript("assets/js/main.js")

    
    this.contect.addScript("assets/lib/jquery/dist/jquery.js")
    this.contect.addScript("assets/lib/bootstrap/dist/js/bootstrap.min.js")
    this.contect.addScript("assets/lib/wow/dist/wow.js")
    this.contect.addScript("assets/lib/jquery.mb.ytplayer/dist/jquery.mb.YTPlayer.js")
    this.contect.addScript("assets/lib/isotope/dist/isotope.pkgd.js")
    this.contect.addScript("assets/lib/imagesloaded/imagesloaded.pkgd.js")
    this.contect.addScript("assets/lib/flexslider/jquery.flexslider.js")
    this.contect.addScript("assets/lib/owl.carousel/dist/owl.carousel.min.js")
    this.contect.addScript("assets/lib/smoothscroll.js")
    this.contect.addScript("assets/lib/magnific-popup/dist/jquery.magnific-popup.js")
    this.contect.addScript("assets/lib/simple-text-rotator/jquery.simple-text-rotator.min.js")
    this.contect.addScript("assets/js/plugins.js")
    this.contect.addScript("assets/js/main.js")

  } 
}
