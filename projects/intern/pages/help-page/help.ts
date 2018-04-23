import {Component, ViewChild, ElementRef, OnInit} from '@angular/core'
import {Slides} from 'ionic-angular';
import {waitRendered} from '../../slide-util/util';

@Component({
    templateUrl: 'build/pages/help-page/help.html',
})

export class HelpPage implements OnInit {

    @ViewChild('mySlider')
    private _slider:Slides;

    constructor(private _elementRef:ElementRef) {
    }

    slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "http://ionicframework.com/dist/preview-app/www/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "http://ionicframework.com/dist/preview-app/www/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Platform?",
      description: "The <b>Ionic Platform</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "http://ionicframework.com/dist/preview-app/www/img/ica-slidebox-img-3.png",
    }
  ];

    public ngOnInit() {
      let swiperContainer = this._elementRef.nativeElement.getElementsByClassName('swiper-container')[0];
      waitRendered(swiperContainer).then(()=>{
      let swiper = this._slider.getSlider();
      swiper.update();
    });
  }
}