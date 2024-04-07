import { Component } from '@angular/core';
import { buyers } from './buyers.mock';

@Component({
  selector: 'app-social-proof-section',
  templateUrl: './social-proof-section.component.html',
  styleUrls: ['./social-proof-section.component.css']
})
export class SocialProofSectionComponent {
  imageURL = '../../../assets/img/'
  protected fiveIconStars: number[] = [1, 2, 3, 4, 5]
  readonly ratings: string[] = ['Rated 5 stars in Reviews', 'Rated 5 stars in Report Guru', 'Rated 5 stars in BestTech'];
  buyers = buyers;
}
