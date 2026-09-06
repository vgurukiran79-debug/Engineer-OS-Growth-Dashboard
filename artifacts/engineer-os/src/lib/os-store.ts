export const STORAGE_KEY = 'engineer-os:v3';
export const STORAGE_VERSION = 3;

export type AttendanceStatus = 'present' | 'absent' | 'cancelled' | 'holiday';
export type GoalPeriod = 'Daily' | 'Weekly' | 'Monthly' | 'Semester';
export type Priority = 'Low' | 'Medium' | 'High';
export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type DsaStatus = 'Solved' | 'In progress' | 'To do';
export type AiTopicStatus = 'Not Started' | 'Learning' | 'Practicing' | 'Completed';

export type Subject = {
  id: string;
  code: string;
  name: string;
  short: string;
  target: number;
  color: string;
};

export type AttendanceEntry = {
  id: string;
  subjectId: string;
  timetableId?: string;
  date: string;
  status: AttendanceStatus;
  note?: string;
};

export type TimetableItem = {
  id: string;
  day: string;
  time: string;
  subjectId: string;
  room: string;
  teacher: string;
  batch: 'All' | 'B1' | 'B2';
};

export type Goal = {
  id: string;
  title: string;
  category: string;
  period: GoalPeriod;
  due: string;
  priority: Priority;
  progress: number;
  done: boolean;
};

export type StudySession = {
  id: string;
  date: string;
  subjectId: string;
  topic: string;
  duration: number;
  notes: string;
};

export type DsaProblem = {
  id: string;
  name: string;
  platform: string;
  topic: string;
  difficulty: Difficulty;
  status: DsaStatus;
  date: string;
  url: string;
  notes: string;
};

export type AiTopic = { id: string; name: string; status: AiTopicStatus };

export type Project = {
  id: string;
  name: string;
  description: string;
  technology: string;
  status: 'Idea' | 'Planning' | 'Building' | 'Testing' | 'Completed' | 'Deployed';
  progress: number;
  startDate: string;
  deadline: string;
  githubUrl: string;
  liveDemoUrl: string;
  skills: string;
  notes: string;
};

export type AcademicRecord = {
  id: string;
  semester: number;
  subject: string;
  cie: number;
  see: number;
  assignment: number;
  quiz: number;
  lab: number;
  internal: number;
  other: number;
  credits: number;
};

export type SemesterRecord = { id: string; semester: number; sgpa: number; credits: number };

export type Application = {
  id: string;
  company: string;
  role: string;
  date: string;
  status: 'Saved' | 'Preparing' | 'Applied' | 'Interview' | 'Rejected' | 'Offer';
  link: string;
  notes: string;
};

export type Certificate = { id: string; name: string; issuer: string; date: string; link: string };

export type Store = {
  version: number;
  demo: boolean;
  profile: { name: string; branch: string; college: string; semester: string; avatar: string };
  settings: {
    target: number;
    notifications: boolean;
    theme: 'dark' | 'dim';
    growthWeights: Record<string, number>;
    automations: { morning: boolean; classReminder: boolean; attendanceWarning: boolean; goalReminder: boolean; weeklyReport: boolean };
  };
  subjects: Subject[];
  attendance: AttendanceEntry[];
  timetable: TimetableItem[];
  goals: Goal[];
  studySessions: StudySession[];
  dsaProblems: DsaProblem[];
  aiTopics: AiTopic[];
  skills: { id: string; name: string; score: number; category: string }[];
  projects: Project[];
  marks: AcademicRecord[];
  semesterRecords: SemesterRecord[];
  applications: Application[];
  certificates: Certificate[];
  github: { username: string; contributions: number; repositories: number; pullRequests: number; readmeScore: number };
  habits: { id: string; title: string; streak: number; done: boolean }[];
};

const subjectSeed: Subject[] = [
  { id: 'stats', code: '1BCS301', name: 'Probability, Distributions and Statistics', short: 'PDS', target: 85, color: '#53dcff' },
  { id: 'java', code: '1BCS302', name: 'Object Oriented Programming with Java', short: 'JAVA', target: 85, color: '#9a8cff' },
  { id: 'ddco', code: '1BCS303', name: 'Digital Design and Computer Organization', short: 'DDCO', target: 85, color: '#6ed9a8' },
  { id: 'os', code: '1BCS304', name: 'Operating Systems', short: 'OS', target: 85, color: '#f1bd6b' },
  { id: 'dsa', code: '1BCS305', name: 'Data Structures and Applications', short: 'DSA', target: 85, color: '#ff8ebd' },
  { id: 'dslab', code: '1BCSL306', name: 'Data Structures Laboratory', short: 'LAB', target: 85, color: '#c09cff' },
  { id: 'git', code: '1BAIL307A', name: 'Project Management with Git', short: 'GIT', target: 85, color: '#71d7ff' },
  { id: 'pbl', code: '1BCP308', name: 'Project-Based Learning', short: 'PBL', target: 85, color: '#8de3b4' },
  { id: 'nss', code: '1BNSS309', name: 'National Service Scheme', short: 'NSS', target: 85, color: '#ffc477' },
  { id: 'pe', code: '1BPE309', name: 'Physical Education (Sports and Athletics)', short: 'PE', target: 85, color: '#ff9fc9' },
];

const timetableSeed: TimetableItem[] = [
  { id: 't1', day: 'Mon', time: '08:40', subjectId: 'java', room: '', teacher: '', batch: 'All' },
  { id: 't2', day: 'Mon', time: '11:00', subjectId: 'dsa', room: '', teacher: '', batch: 'All' },
  { id: 't3', day: 'Tue', time: '10:00', subjectId: 'os', room: '', teacher: '', batch: 'All' },
  { id: 't4', day: 'Wed', time: '09:00', subjectId: 'stats', room: '', teacher: '', batch: 'All' },
  { id: 't5', day: 'Thu', time: '14:00', subjectId: 'dslab', room: '', teacher: '', batch: 'B1' },
  { id: 't6', day: 'Fri', time: '11:00', subjectId: 'ddco', room: '', teacher: '', batch: 'All' },
  { id: 't7', day: 'Sat', time: '09:00', subjectId: 'git', room: '', teacher: '', batch: 'All' },
];

const aiTopicSeed = [
  'Python', 'Statistics', 'Probability', 'Linear Algebra', 'NumPy', 'Pandas',
  'Visualization', 'Machine Learning', 'Deep Learning', 'Neural Networks',
  'NLP', 'Computer Vision', 'Generative AI', 'LLMs', 'RAG', 'AI Agents', 'MLOps',
].map((name, index) => ({ id: `ai-${index + 1}`, name, status: 'Not Started' as AiTopicStatus }));

function emptyStore(): Store {
  return {
    version: STORAGE_VERSION,
    demo: false,
    profile: { name: '', branch: '', college: '', semester: 'III • VTU 2025', avatar: 'G' },
    settings: {
      target: 85,
      notifications: true,
      theme: 'dark',
      growthWeights: { attendance: 15, academics: 20, dsa: 15, programming: 10, aiMl: 15, projects: 15, github: 5, consistency: 5 },
      automations: { morning: true, classReminder: true, attendanceWarning: true, goalReminder: true, weeklyReport: false },
    },
    subjects: structuredClone(subjectSeed),
    attendance: [],
    timetable: structuredClone(timetableSeed),
    goals: [],
    studySessions: [],
    dsaProblems: [],
    aiTopics: structuredClone(aiTopicSeed),
    skills: [],
    projects: [],
    marks: [],
    semesterRecords: [],
    applications: [],
    certificates: [],
    github: { username: '', contributions: 0, repositories: 0, pullRequests: 0, readmeScore: 0 },
    habits: [],
  };
}

const demoStore: Store = {
  ...emptyStore(),
  demo: true,
  profile: { name: 'Aarav Kulkarni', branch: 'AI & Machine Learning', college: 'KNS Institute of Technology', semester: 'III • VTU 2025', avatar: 'AK' },
  attendance: [
    { id: 'att-1', subjectId: 'java', date: '2026-09-01', status: 'present' },
    { id: 'att-2', subjectId: 'java', date: '2026-09-02', status: 'present' },
    { id: 'att-3', subjectId: 'java', date: '2026-09-03', status: 'absent' },
    { id: 'att-4', subjectId: 'dsa', date: '2026-09-01', status: 'present' },
    { id: 'att-5', subjectId: 'dsa', date: '2026-09-02', status: 'present' },
    { id: 'att-6', subjectId: 'dsa', date: '2026-09-03', status: 'present' },
  ],
  goals: [
    { id: 'goal-demo-1', title: 'Solve 2 medium DSA problems', category: 'Problem solving', period: 'Daily', due: '2026-09-06', priority: 'High', progress: 50, done: false },
    { id: 'goal-demo-2', title: 'Ship project README', category: 'Building', period: 'Weekly', due: '2026-09-11', priority: 'Medium', progress: 72, done: false },
  ],
  studySessions: [{ id: 'study-demo-1', date: '2026-09-05', subjectId: 'dsa', topic: 'Trees practice', duration: 55, notes: '' }],
  dsaProblems: [
    { id: 'dsa-demo-1', name: 'Two Sum', platform: 'LeetCode', topic: 'Arrays', difficulty: 'Easy', status: 'Solved', date: '2026-09-02', url: '', notes: '' },
    { id: 'dsa-demo-2', name: 'Binary Tree Level Order', platform: 'LeetCode', topic: 'Trees', difficulty: 'Medium', status: 'Solved', date: '2026-09-05', url: '', notes: '' },
  ],
  aiTopics: aiTopicSeed.map((topic, index) => ({ ...topic, status: index < 3 ? 'Completed' : index < 5 ? 'Learning' : 'Not Started' })),
  skills: [{ id: 'skill-demo-1', name: 'Python', score: 78, category: 'Programming' }],
  projects: [{ id: 'project-demo-1', name: 'AI Engineering Copilot', description: 'A demo workspace project.', technology: 'React, TypeScript', status: 'Building', progress: 68, startDate: '2026-08-01', deadline: '2026-09-30', githubUrl: '', liveDemoUrl: '', skills: 'React, TypeScript', notes: '' }],
  marks: [{ id: 'mark-demo-1', semester: 3, subject: 'Data Structures and Applications', cie: 36, see: 72, assignment: 18, quiz: 0, lab: 0, internal: 0, other: 0, credits: 4 }],
  semesterRecords: [],
  applications: [],
  certificates: [],
  github: { username: 'demo-user', contributions: 47, repositories: 3, pullRequests: 8, readmeScore: 72 },
  habits: [{ id: 'habit-demo-1', title: 'Push a commit', streak: 5, done: false }],
};

function clone<T>(value: T): T {
  return structuredClone(value);
}

export function freshStore() {
  return clone(emptyStore());
}

export function freshDemo() {
  return clone(demoStore);
}

export function loadStore(): Store {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Store;
      if (parsed.version === STORAGE_VERSION && Array.isArray(parsed.subjects) && Array.isArray(parsed.attendance)) return parsed;
    }
    const initial = emptyStore();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return clone(initial);
  } catch {
    return clone(emptyStore());
  }
}

export function saveStore(data: Store) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch {
    return false;
  }
}

export function storageAvailable() {
  try {
    const key = '__engineer_os_test__';
    localStorage.setItem(key, '1');
    localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}

export function subjectStats(store: Store, subjectId: string) {
  const records = store.attendance.filter(entry => entry.subjectId === subjectId);
  const present = records.filter(entry => entry.status === 'present').length;
  const conducted = records.filter(entry => entry.status === 'present' || entry.status === 'absent').length;
  const cancelled = records.filter(entry => entry.status === 'cancelled').length;
  const holidays = records.filter(entry => entry.status === 'holiday').length;
  const subject = store.subjects.find(item => item.id === subjectId);
  const target = subject?.target ?? store.settings.target;
  const percentage = conducted ? (present / conducted) * 100 : null;
  const needed = percentage !== null && percentage >= target
    ? 0
    : target >= 100
      ? Infinity
      : Math.max(0, Math.ceil((target * conducted - 100 * present) / (100 - target)));
  const canMiss = conducted && target > 0 ? Math.max(0, Math.floor((100 * present / target) - conducted)) : 0;
  return { present, conducted, cancelled, holidays, target, percentage, needed, canMiss, records };
}

export function overallStats(store: Store) {
  const present = store.subjects.reduce((sum, subject) => sum + subjectStats(store, subject.id).present, 0);
  const conducted = store.subjects.reduce((sum, subject) => sum + subjectStats(store, subject.id).conducted, 0);
  return { present, conducted, percentage: conducted ? (present / conducted) * 100 : null };
}

export function gradePoint(record: AcademicRecord) {
  const total = record.cie + record.see + record.assignment + record.quiz + record.lab + record.internal + record.other;
  const maximum = 50 + 100 + 20 + 10 + 20 + 50 + 20;
  return Math.min(10, Math.max(0, (total / maximum) * 10));
}

export function semesterSgpa(store: Store, semester: number) {
  const records = store.marks.filter(mark => mark.semester === semester);
  const credits = records.reduce((sum, mark) => sum + mark.credits, 0);
  return credits ? records.reduce((sum, mark) => sum + gradePoint(mark) * mark.credits, 0) / credits : null;
}

export function cgpa(store: Store) {
  const calculated = Array.from(new Set(store.marks.map(mark => mark.semester))).map(semester => ({
    sgpa: semesterSgpa(store, semester),
    credits: store.marks.filter(mark => mark.semester === semester).reduce((sum, mark) => sum + mark.credits, 0),
  }));
  const manual = store.semesterRecords.map(record => ({ sgpa: record.sgpa, credits: record.credits }));
  const records = [...calculated, ...manual].filter(record => record.sgpa !== null && record.credits > 0) as { sgpa: number; credits: number }[];
  const credits = records.reduce((sum, record) => sum + record.credits, 0);
  return credits ? records.reduce((sum, record) => sum + record.sgpa * record.credits, 0) / credits : null;
}

export function growthMetrics(store: Store) {
  const overall = overallStats(store);
  const attendance = overall.percentage === null ? null : Math.min(100, overall.percentage);
  const academics = store.marks.length ? Math.min(100, Math.round((store.marks.reduce((sum, mark) => sum + gradePoint(mark), 0) / store.marks.length) * 10)) : null;
  const dsa = store.dsaProblems.length ? Math.min(100, store.dsaProblems.filter(problem => problem.status === 'Solved').length * 10) : null;
  const programming = store.skills.length ? Math.round(store.skills.filter(skill => skill.category.toLowerCase().includes('program')).reduce((sum, skill) => sum + skill.score, 0) / Math.max(1, store.skills.filter(skill => skill.category.toLowerCase().includes('program')).length)) : null;
  const trackedAiTopics = store.aiTopics.filter(topic => topic.status !== 'Not Started');
  const aiMl = trackedAiTopics.length ? Math.round((trackedAiTopics.filter(topic => topic.status === 'Completed').length / trackedAiTopics.length) * 100) : null;
  const projects = store.projects.length ? Math.round(store.projects.reduce((sum, project) => sum + project.progress, 0) / store.projects.length) : null;
  const github = store.github.username ? Math.min(100, Math.round(store.github.contributions / 2 + store.github.repositories * 5 + store.github.pullRequests * 3 + store.github.readmeScore * 0.2)) : null;
  const consistency = store.goals.length || store.studySessions.length ? Math.min(100, store.goals.length ? Math.round((store.goals.filter(goal => goal.done).length / store.goals.length) * 100) : Math.min(100, store.studySessions.length * 10)) : null;
  const categories = { attendance, academics, dsa, programming, aiMl, projects, github, consistency };
  const available = Object.entries(categories).filter(([, value]) => value !== null) as [string, number][];
  const totalWeight = available.reduce((sum, [key]) => sum + (store.settings.growthWeights[key] ?? 0), 0);
  const score = available.length && totalWeight ? Math.round(available.reduce((sum, [key, value]) => sum + value * (store.settings.growthWeights[key] ?? 0), 0) / totalWeight) : null;
  return { categories, score, available: available.length };
}

export function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

export function id(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}