import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  public services = [
    {
      name: 'Web Apps & Mobile Applications',
      description:
        'Transform your ideas into reality with our top-notch web and mobile app development services. From user-friendly interfaces to seamless functionality, we create digital experiences that stand out in the digital landscape.',
    },
    {
      name: 'CRM Solutions',
      description:
        'Build strong customer relationships and boost your sales with our customized CRM solutions. Manage leads, track interactions, and provide exceptional customer service to drive business success.',
    },
    {
      name: 'ERP Solutions',
      description: `Streamline your business operations with our cutting-edge ERP solutions. From inventory management to financial tracking, we'll optimize your processes for maximum efficiency and growth.`,
    },
    {
      name: 'Portfolio Creation',
      description: `Showcase your unique story and talents with a stunning portfolio tailored to your personality and goals. Let your work speak for itself and leave a lasting impression on potential clients and employers.`,
    },
  ];
}
