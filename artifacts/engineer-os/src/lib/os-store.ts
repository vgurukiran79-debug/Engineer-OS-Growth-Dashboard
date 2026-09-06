export const STORAGE_KEY = 'engineer-os:v2';

export type Subject = { id: string; code: string; name: string; short: string; present: number; total: number; target: number; color: string };
export type Goal = { id: string; title: string; period: 'Today' | 'This week' | 'This month' | 'Semester'; done: boolean; progress: number; due: string };
export type Store = {
  version: number;
  demo: boolean;
  profile: { name: string; branch: string; college: string; semester: string; avatar: string };
  settings: { target: number; notifications: boolean; theme: 'dark' | 'dim' };
  subjects: Subject[];
  goals: Goal[];
  skills: { name: string; score: number; category: string }[];
  dsa: { solved: number; streak: number; easy: number; medium: number; hard: number; weekly: number[] };
  projects: { id: string; name: string; status: string; stack: string; progress: number; updated: string }[];
  applications: { id: string; company: string; role: string; status: string; date: string }[];
  timetable: { id: string; day: string; time: string; subject: string; room: string }[];
  marks: { subject: string; cie: number; see: number; assignment: number; credits: number }[];
  habits: { id: string; title: string; streak: number; done: boolean }[];
};

const demo: Store = {
  version: 2, demo: true,
  profile: { name: 'Aarav Kulkarni', branch: 'AI & Machine Learning', college: 'KNS Institute of Technology', semester: 'III • VTU 2025', avatar: 'AK' },
  settings: { target: 85, notifications: true, theme: 'dark' },
  subjects: [
    { id: 'stats', code: '1BCS301', name: 'Probability, Distributions and Statistics', short: 'PDS', present: 31, total: 36, target: 85, color: '#53dcff' },
    { id: 'java', code: '1BCS302', name: 'Object Oriented Programming with Java', short: 'JAVA', present: 34, total: 39, target: 85, color: '#9a8cff' },
    { id: 'ddco', code: '1BCS303', name: 'Digital Design and Computer Organization', short: 'DDCO', present: 28, total: 35, target: 85, color: '#6ed9a8' },
    { id: 'os', code: '1BCS304', name: 'Operating Systems', short: 'OS', present: 30, total: 34, target: 85, color: '#f1bd6b' },
    { id: 'dsa', code: '1BCS305', name: 'Data Structures and Applications', short: 'DSA', present: 38, total: 43, target: 85, color: '#ff8ebd' },
    { id: 'dslab', code: '1BCSL306', name: 'Data Structures Laboratory', short: 'LAB', present: 21, total: 23, target: 85, color: '#c09cff' },
    { id: 'git', code: '1BAIL307A', name: 'Project Management with Git', short: 'GIT', present: 17, total: 19, target: 85, color: '#71d7ff' },
    { id: 'pbl', code: '1BCP308', name: 'Project-Based Learning', short: 'PBL', present: 14, total: 16, target: 85, color: '#8de3b4' },
    { id: 'nss', code: '1BNSS309', name: 'National Service Scheme', short: 'NSS', present: 10, total: 12, target: 85, color: '#ffc477' },
    { id: 'pe', code: '1BPE309', name: 'Physical Education (Sports and Athletics)', short: 'PE', present: 11, total: 12, target: 85, color: '#ff9fc9' },
  ],
  goals: [
    { id: 'g1', title: 'Solve 2 medium DSA problems', period: 'Today', done: false, progress: 50, due: 'Today' },
    { id: 'g2', title: 'Ship AI Engineering Copilot README', period: 'This week', done: false, progress: 72, due: 'Fri, 14 Jun' },
    { id: 'g3', title: 'Complete ML foundations sprint', period: 'This month', done: false, progress: 41, due: '30 Jun' },
    { id: 'g4', title: 'Reach 8.5 SGPA this semester', period: 'Semester', done: false, progress: 64, due: 'End of Sem' },
  ],
  skills: [{ name: 'Python', score: 78, category: 'Core' }, { name: 'DSA', score: 64, category: 'Core' }, { name: 'Machine Learning', score: 48, category: 'AI/ML' }, { name: 'Git & GitHub', score: 72, category: 'Engineering' }, { name: 'SQL', score: 56, category: 'Engineering' }, { name: 'Communication', score: 61, category: 'Career' }],
  dsa: { solved: 67, streak: 12, easy: 34, medium: 27, hard: 6, weekly: [4, 7, 3, 8, 5, 9, 6] },
  projects: [{ id: 'p1', name: 'AI Engineering Copilot', status: 'Building', stack: 'React · Express · Gemini', progress: 68, updated: '2h ago' }, { id: 'p2', name: 'Campus Bus ETA', status: 'Deployed', stack: 'Python · Maps API', progress: 100, updated: '3d ago' }, { id: 'p3', name: 'Study Signal', status: 'Idea', stack: 'React · Local-first', progress: 18, updated: '1w ago' }],
  applications: [{ id: 'a1', company: 'Zepto', role: 'SDE Intern', status: 'Applied', date: '12 Jun' }, { id: 'a2', company: 'Microsoft', role: 'Explore program', status: 'Saved', date: '09 Jun' }, { id: 'a3', company: 'Razorpay', role: 'ML Intern', status: 'Preparing', date: '02 Jun' }],
  timetable: [{ id: 't1', day: 'Mon', time: '08:40', subject: 'OOP with Java', room: 'A-204' }, { id: 't2', day: 'Mon', time: '11:00', subject: 'DSA', room: 'A-204' }, { id: 't3', day: 'Tue', time: '10:00', subject: 'Operating Systems', room: 'B-110' }, { id: 't4', day: 'Wed', time: '09:00', subject: 'Probability & Statistics', room: 'A-204' }, { id: 't5', day: 'Thu', time: '14:00', subject: 'DSA Lab', room: 'Lab 3' }, { id: 't6', day: 'Fri', time: '11:00', subject: 'Digital Design & CO', room: 'A-204' }],
  marks: [{ subject: 'Probability, Distributions and Statistics', cie: 36, see: 72, assignment: 18, credits: 4 }, { subject: 'Object Oriented Programming with Java', cie: 42, see: 78, assignment: 19, credits: 4 }, { subject: 'Data Structures and Applications', cie: 33, see: 69, assignment: 17, credits: 4 }, { subject: 'Operating Systems', cie: 39, see: 74, assignment: 16, credits: 4 }],
  habits: [{ id: 'h1', title: 'Read engineering notes', streak: 8, done: true }, { id: 'h2', title: 'Deep work block', streak: 12, done: false }, { id: 'h3', title: 'Push a commit', streak: 5, done: false }],
};

export function loadStore(): Store {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Store;
      if (parsed.version === 2) return parsed;
    }
  } catch { /* use seed */ }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(demo));
  return structuredClone(demo);
}
export function saveStore(data: Store) { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
export function freshDemo() { return structuredClone(demo); }
export function attendance(s: Subject) { return s.total ? (s.present / s.total) * 100 : 0; }
export function neededForTarget(s: Subject) {
  if (s.total <= 0 || s.present >= s.total * s.target / 100) return 0;
  if (s.target >= 100) return Infinity;
  return Math.max(0, Math.ceil((s.target * s.total - 100 * s.present) / (100 - s.target)));
}
export function canMiss(s: Subject) {
  if (s.target <= 0 || s.total <= 0) return 0;
  return Math.max(0, Math.floor((100 * s.present / s.target) - s.total));
}
export function overallAttendance(subjects: Subject[]) {
  const conducted = subjects.reduce((sum, subject) => sum + subject.total, 0);
  const present = subjects.reduce((sum, subject) => sum + subject.present, 0);
  return conducted ? (present / conducted) * 100 : 0;
}