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
    id: '1JpzlCfbXuZIe6rbMaT6BRlxQj0HcXZGk',
    titleHe: 'Agent One',
    titleEn: 'Agent One',
    thumb: 'https://drive.google.com/thumbnail?id=1JpzlCfbXuZIe6rbMaT6BRlxQj0HcXZGk&sz=w400',
  },
  {
    id: '1WNZNQ9lHIeBXDDFegaW3D0zpmt4ZgMDe',
    titleHe: 'VSL יובל',
    titleEn: 'Yuval VSL',
    thumb: 'https://drive.google.com/thumbnail?id=1WNZNQ9lHIeBXDDFegaW3D0zpmt4ZgMDe&sz=w400',
  },
  {
    id: '1yKCabuQCAGUJNzCWkDKyxD2j03MgdNIP',
    titleHe: 'עלית קפה טורקי — שיתוף פעולה',
    titleEn: 'Elite Turkish Coffee — Collaboration',
    thumb: 'https://drive.google.com/thumbnail?id=1yKCabuQCAGUJNzCWkDKyxD2j03MgdNIP&sz=w400',
  },
  {
    id: '1bfLVzbyM0Eof7dxC2xHN-XzJwGzhoNhk',
    titleHe: 'ממדים לריבועים — VSL חברה בע״מ',
    titleEn: 'Dimensions to Squares — Corporate VSL',
    thumb: 'https://drive.google.com/thumbnail?id=1bfLVzbyM0Eof7dxC2xHN-XzJwGzhoNhk&sz=w400',
  },
  {
    id: '1rQSsrLRoZm9DNPaZcQBDEcnEeVQA7FVw',
    titleHe: 'Elephent Exploration',
    titleEn: 'Elephent Exploration',
    thumb: 'https://drive.google.com/thumbnail?id=1rQSsrLRoZm9DNPaZcQBDEcnEeVQA7FVw&sz=w400',
  },
];

