import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name = 'Nairha SaQina Az-Zara';
  age = 22;
  pronouns = 'she/her';
  location = 'Yogyakarta, Indonesia';

  roles = [
    { label: 'Cloud Enginner at kurumi studio', url: 'https://kurumi.dev' },
    { label: 'Angular Enthusiast', url: 'https://angular.dev' },
    { label: 'Founder of NLFTs', url: 'https://nlfts.dev' },
  ];

  socialLinks = [
    { label: 'GitHub', url: 'https://github.com/nairhacan' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/nairha-saqina-az-zara' },
    { label: 'Email', url: 'mailto:nairha@nlfts.dev' },
  ];

  bio = {
    highlight1: 'Passionate frontend developer',
    text1: ' yang berfokus pada pengembangan web modern dengan Angular dan TypeScript.',
    highlight2: 'Penggemar desain UI/UX',
    text2: ', selalu mencari cara untuk membuat antarmuka yang indah dan fungsional.',
    text3:
      'Tertarik pada hal-hal baru. Selalu belajar dan berkembang setiap harinya.',
  };

  experiences = [
    {
      title: 'Founder & CEO at NLFTs',
      company: 'NLFTs',
      period: 'Jun 2024 – Des 2024',
    },
  ];

  educations = [
    {
      degree: 'SMK 1 Yogyakarta',
      institution: 'Teknik Komputer dan Informatika',
      period: '2024 – 2026',
    },
  ];

  activities = [
    {
      title: 'Anggota Aktif',
      org: 'Developer Student Club UNY',
      period: 'Sep 2022 – sekarang',
    },
    {
      title: 'Kontributor',
      org: 'Open Source Angular',
      period: 'Mar 2023 – sekarang',
    },
  ];

  languages = [
    { name: 'Bahasa Indonesia', level: 'penutur asli' },
    { name: 'Chinese', level: 'Mahir' },
  ];

  skills = [
    'Angular',
    'TypeScript',
    'Nuxt.js',
    'Tailwind CSS',
    'Once UI',
  ];

  memberships = [
    { name: 'Google Developer Group Jakarta', period: 'Mar 2023 – sekarang' },
    { name: 'Women in Tech Indonesia', period: 'Jul 2025 – sekarang' },
  ];
}
