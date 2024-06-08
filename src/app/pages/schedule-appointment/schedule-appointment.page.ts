import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.page.html',
  styleUrls: ['./schedule-appointment.page.scss'],
})
export class ScheduleAppointmentPage implements OnInit {

  doctors = [
    { name: 'Dr. John Doe' },
    { name: 'Dr. Jane Smith' },
    { name: 'Dr. Alan C. Braverman' }
  ];

  selectedDoctor: any;
  selectedDate: string;
  selectedTime: string;

  availableTimes = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM'];

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() { }

  close() {
    this.modalController.dismiss();
  }

  confirmAppointment() {
    if (this.selectedDoctor && this.selectedDate && this.selectedTime) {
      // Lógica para confirmar la cita
      console.log('Cita confirmada con', this.selectedDoctor.name, 'el', this.selectedDate, 'a las', this.selectedTime);
      // Aquí puedes añadir la lógica para enviar esta información al servidor o almacenarla según tus necesidades.
      this.modalController.dismiss({
        doctor: this.selectedDoctor,
        date: this.selectedDate,
        time: this.selectedTime
      });
    } else {
      // Mostrar mensaje de error o notificación
      console.log('Por favor, complete todos los campos.');
      // Aquí podrías añadir un mensaje de alerta o notificación para el usuario.
    }
  }
}