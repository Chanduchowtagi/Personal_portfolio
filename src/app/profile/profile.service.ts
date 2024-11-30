import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Weather App',
      desc: 'This is a weather application that provides current weather information.Typically, a weather app will display data such as temperature, humidity, wind speed, precipitation, and atmospheric pressure.',
      // livedemo: 'https://mehulk05.github.io/MyShop/#/',
      
      livedemo: 'https://weather-g9hgz17ri-chanduchowtagis-projects.vercel.app/',


      githurl: 'https://github.com/Chanduchowtagi/WeatherApp',
      // mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',

      imgUrl: 'assets/images/w1.png',
      tech: 'JavaScript, SCSS, HTML'

    },

    // {
    //   id: 2,
    //   title: 'Personal Portfolio',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/Blog-using-mean/#/',
    //   githurl: 'https://github.com/mehulk05/Blog-using-mean',
    //   mediumlink: 'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
    //   imgUrl: 'assets/images/Portfolio.png',
    //   tech: 'Angular ,Bootstrap'
    // },

    {
      id: 3,
      title: 'Calculator App',
      desc: 'Calculator-App : This is a simple Calculator App with a dark and light theme toggle. The application provides basic arithmetic operations and a clean, responsive UI.',
      livedemo: 'https://calculator-afz2lifj9-chanduchowtagis-projects.vercel.app',

      githurl: 'https://github.com/Chanduchowtagi/Calculator-App',
      // mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',

      imgUrl: 'assets/images/cal-dark-light.png',
      tech: 'JavaScript, SCSS, HTML'

    },

    {
      id: 4,
      title: 'ATM Reporting System', 
      desc: 'The design of an Automated Teller Machine(ATM) system, a device which used by bank customers to process account transaction.By using PIN of ATM card at an ATM individual can withdrawal cash,make a deposited.',
      // livedemo: 'https://mehulk05.github.io/Blogapp-using-MERN/#/',
      // githurl: 'https://github.com/mehulk05/Blogapp-using-MERN',
      // mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
      imgUrl: 'assets/images/atm-img.webp',
      tech: 'Front End : PHP,HTML,CSS and Back End : MYSQL Database'
    },


  ]
  about2 = `Web Developer with 1 years of experience .
  Worked with Software Implementation and Application Testing  .
  Expertise in Angular 1 All versions, Started Learning React, Javascript, and UI with Responsive Designs .
  Have good understanding of Bootstrap and MYSQL`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://drive.google.com/file/d/1D7mcDsuouJvpobE4jQ7IpUAwdp0YDJ_J/view?usp=drive_link"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 1',
      'progress': '88%'
    },
    {
      'id': '2',
      'skill': 'ANGULAR MATERIAL',
      'progress': '85%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT',
      'progress': '75%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL',
      'progress': '70%'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '65%'
    },
    {
      'id': '6',
      'skill': 'BOOTSTRAP',
      'progress': '70%'
    },
    {
      'id': '7',
      'skill': 'TESTING',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College.
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'AXCEND AUTOMATION AND SOFTWARE SOLUTIONS PRIVATE LIMITED',
      location: 'Bengaluru',
      timeline: 'March 2022 to Feb 2023',
      role: 'Trainee Engineer',
      work: 'Designed and implimentation Software Application.Understanding the software Application Shadowed analysis and debugging report activitie .Web Developer with 1 years of experience .Worked with Software Implementation and Application Testing .Expertise in Angular versions, Started Learning React, Javascript, and UI with Responsive Designs'

    },
  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Blogger',
      description: '',
      img: 'assets/images/Mehul Kothari – Medium1.png',
      url: 'https://mehulkothari05.medium.com/'
    },
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/Mehulkothari_github.png',
      url: 'https://github.com/mehulk05/'
    },
    {
      id:1,
      title: 'Freelancing',
      description: '',
      img: 'assets/images/mehul_freelancing.png',
      url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
    },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
