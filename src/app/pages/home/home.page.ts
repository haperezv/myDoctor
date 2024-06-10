import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfilePage } from './../profile/profile.page';


interface Doctor {
  avatar: string;
  name: string;
  specialty: string;
  status: boolean;
}

interface Login {
  name: string;
  color: string;
  bkColor: string;
  routerLink: string;
}

interface Categories {
  color: string;
  bkColor: string;
  name: string;
  icon: string;
  routerLink: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3.3,
  };

  doctors: Doctor[] = [
    {
      avatar: 'https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true',
      specialty: 'Cardiologist',
      name: 'Dr. Alan C Braverman',
      status: true
    },
    {
      avatar: 'https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true',
      specialty: 'Orthodontist',
      name: 'Dr. Michael Aaron',
      status: false
    },
    {
      avatar: 'https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true',
      specialty: 'Eye Specialist',
      name: 'Dr. Shelley Rahman',
      status: false
    },
    {
      avatar: 'https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true',
      specialty: 'Orthodontist',
      name: 'Dr. Michael Aaron',
      status: false
    },
    {
      avatar: 'https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true',
      specialty: 'Eye Specialist',
      name: 'Dr. Shelley Rahman',
      status: false
    }
  ];

  login: Login[] = [
    {
      name: 'Login',
      bkColor: '#008aff',
      color: 'white',
      routerLink: '/login'
    }
  ]
 

  categories: Categories[] = [
    {
      name: 'Programar Cita',
      bkColor: '#008aff',
      color: 'white',
      icon: 'calendar',
      routerLink: '/schedule-appointment'
    },
    {
      name: 'Citas Programadas',
      bkColor: '#a2c3f7',
      color: 'black',
      icon: 'clipboard',
      routerLink: '/record'
    },
    {
      name: 'Mi Historial',
      bkColor: '#f7be3021',
      color: 'black',
      icon: 'document-text',
      routerLink: ''
    }
  ];

  constructor(
    private modalController: ModalController
  ) { }

  async openProfile() {
    const modal = await this.modalController.create({
      component: ProfilePage,
    });
    await modal.present();
  }
}
