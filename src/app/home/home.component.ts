import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  whatsappLink: string;
  sessionDate!: string;
  userTimezone!: string;

  constructor() {
    // Base64 encoded phone number
    const base64Phone = "OTE5NTM1MzAwMjQ1";
    const phoneNumber = atob(base64Phone);
    this.whatsappLink = `https://wa.me/${phoneNumber}`;

    // Get user's local timezone
    this.userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Set the session date and time (in UTC)
    const sessionStart = new Date('2024-09-28T15:00:00Z'); // 3:00 PM UTC
    const sessionEnd = new Date('2024-09-28T15:30:00Z'); // 3:30 PM UTC

    // Extract the month name
    const optionsMonth: Intl.DateTimeFormatOptions = { month: 'long' };
    const monthName = sessionStart.toLocaleString('en-US', optionsMonth);
        const day = sessionStart.getDate();
        const year = sessionStart.getFullYear();

    // Format the date and time according to user's timezone
    const options: Intl.DateTimeFormatOptions = {
      timeZone: this.userTimezone,
      timeZoneName: 'short',
      hour: 'numeric',
      minute: 'numeric'
    };
   const startTime = sessionStart.toLocaleString('en-US', options);
   const endTime = sessionEnd.toLocaleString('en-US', options);

    // Construct session date string
    this.sessionDate = `${monthName} ${day}, ${year} from ${startTime} to ${endTime} (${this.userTimezone})`;
  }
}
