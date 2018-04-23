import {Component, ViewChild, ElementRef, OnInit} from '@angular/core'
import {Alert, Modal, NavController, Platform, Slides, ViewController} from 'ionic-angular';
import {waitRendered} from '../../slide-util/util';
import {UserDataService} from '../../services/userData.service';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {ModalsContentPage} from '../contract-modals/section-three/section-three-modal';

@Component({
    templateUrl: 'build/pages/contract-page/contract.html',
    providers: [UserDataService, HTTP_PROVIDERS]
})

export class ContractPage implements OnInit {

  @ViewChild('slider')
    private _slider:Slides;

  public contractNum;
  public date;
  public UWData;
  public GeneralOneTwo;
  public GeneralThree;
  public RiskTransfer;
  public RiskTransferData;
  public riskRadioOpen: boolean;
  public riskExempt: boolean;
  public CedingCompany;
  public DatesStatus;
  public triggerTypes;
  public dropDown;
  public dropDownText = "Show";
  public dropDownToggle: boolean = false;

  constructor(private _userDataService: UserDataService, private nav: NavController, private _elementRef:ElementRef) {
  }

  public ngOnInit() { // functions that are loaded when contract page is created
    this.getData();
    try {
      let swiperContainer = this._elementRef.nativeElement.getElementsByClassName('swiper-container')[0];
      waitRendered(swiperContainer).then(()=>{
      let swiper = this._slider.getSlider();
      // swiper.update(); // Fixes android swiper issue with ionic-beta.10
      // sometimes causes the following error in console: EXCEPTION: Error: Uncaught (in promise): TypeError: Cannot read property 'update' of undefined
      });
    }
    catch(err) {
      console.log("Swiper error hidden...");
    }
  }

  getData() {
    this._userDataService.getData().subscribe(
      data => {
        this.date = data[0];
        this.UWData = data[1];
        this.contractNum = this.UWData[2].value;
        this.GeneralOneTwo = data[2];
        this.GeneralThree = data[3];
        this.RiskTransfer = data[4];
        this.riskExempt = data[4].exempt
        this.CedingCompany = data[5];
        this.DatesStatus = data[6];
        this.triggerTypes = data[7];
        this.dropDown = data[8];
      }
      // No error or completion callbacks here. They are optional, but
      // you will get console errors if the Observable is in an error state.
    );
  }
  
  exempt() {
    this.riskExempt = true;
    console.log("Exempt: " + this.riskExempt);
  }

  notExempt() {
    let alert = Alert.create();
    let riskTransfer = this.RiskTransfer["0"].data;
    alert.setTitle(this.RiskTransfer["0"].title);

    for(let i = 0; i < riskTransfer.length; i++) {
      alert.addInput({
        type: 'radio',
        label: riskTransfer[i].label,
        value: riskTransfer[i].label
      });
    }

    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.riskRadioOpen = false;
        this.riskExempt = false;
        this.RiskTransferData = data;
        console.log("Exempt: " + this.riskExempt);
        console.log('Risk Transfer data:', this.RiskTransferData + " was selected");
      }
    });
    alert.addButton('Cancel');

    this.nav.present(alert).then(() => {
      this.riskRadioOpen = true;
    });
  }

  showDropDown() {
    this.dropDownToggle = !this.dropDownToggle;
  }

  openModal(characterNum) {
    let modal = Modal.create(ModalsContentPage, characterNum);
    this.nav.present(modal);
  }
}