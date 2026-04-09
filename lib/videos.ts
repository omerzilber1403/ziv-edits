/**
 * Portfolio video data
 * Replace Google Drive IDs with your actual file IDs
 * To get Drive ID: Share video → "Anyone with the link" → Copy the ID from URL
 * Format: https://drive.google.com/file/d/<THIS_IS_THE_ID>/view
 */

export interface Video {
  id: string; // Google Drive file ID
  titleHe: string;
  titleEn: string;
  thumb: string; // Path to thumbnail in /public
}

export const videos: Video[] = [
  {
    id: '1jCFxxPNr8BO9jEeCvebRQ6Mb5-Jdfs1g',
    titleHe: 'VSL Smart Leads',
    titleEn: 'VSL Smart Leads',
    thumb: 'https://drive.google.com/thumbnail?id=1jCFxxPNr8BO9jEeCvebRQ6Mb5-Jdfs1g&sz=w400',
  },
  {
    id: '1yKCabuQCAGUJNzCWkDKyxD2j03MgdNIP',
    titleHe: 'עלית קפה טורקי — שיתוף פעולה',
    titleEn: 'Elite Turkish Coffee — Collaboration',
    thumb: 'https://drive.google.com/thumbnail?id=1yKCabuQCAGUJNzCWkDKyxD2j03MgdNIP&sz=w400',
  },
  {
    id: '1NgI_KaOM5O_jKlSEdgvFMZNajjY9tAxJ',
    titleHe: 'אופק זרמטי פודקאסט',
    titleEn: 'Ofek Zarmati Podcast',
    thumb: 'https://drive.google.com/thumbnail?id=1NgI_KaOM5O_jKlSEdgvFMZNajjY9tAxJ&sz=w400',
  },
  {
    id: '18-q_DcGXNRlOyYjLSCCrnfnhaw74kSxk',
    titleHe: 'אפליקציית נדל״ן',
    titleEn: 'Real Estate App',
    thumb: 'https://drive.google.com/thumbnail?id=18-q_DcGXNRlOyYjLSCCrnfnhaw74kSxk&sz=w400',
  },
  {
    id: '1rQSsrLRoZm9DNPaZcQBDEcnEeVQA7FVw',
    titleHe: 'Elephent Exploration',
    titleEn: 'Elephent Exploration',
    thumb: 'https://drive.google.com/thumbnail?id=1rQSsrLRoZm9DNPaZcQBDEcnEeVQA7FVw&sz=w400',
  },
  {
    id: '1bn5RI_J6eGwbvf3O14jSLXHzOxTay3kI',
    titleHe: 'סופר פארם 1',
    titleEn: 'Super-Pharm 1',
    thumb: 'https://drive.google.com/thumbnail?id=1bn5RI_J6eGwbvf3O14jSLXHzOxTay3kI&sz=w400',
  },
  {
    id: '1XlOcXWDkK1lSubMzbv4tIJa1Iw93vwet',
    titleHe: 'סופר פארם 2',
    titleEn: 'Super-Pharm 2',
    thumb: 'https://drive.google.com/thumbnail?id=1XlOcXWDkK1lSubMzbv4tIJa1Iw93vwet&sz=w400',
  },
];

