import { BookOpen, GraduationCap, Microscope, Globe, Heart, Flag, BarChart3, Clock, Calendar, TrendingUp } from 'lucide-react';
import * as Progress from '@radix-ui/react-progress';

const subjects = [
  {
    name: 'Filipino',
    icon: BookOpen,
    progress: 75,
    currentLesson: 'Lesson 8: Panghalip',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    name: 'English',
    icon: GraduationCap,
    progress: 85,
    currentLesson: 'Lesson 12: Verb Tenses',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    name: 'Math',
    icon: BarChart3,
    progress: 60,
    currentLesson: 'Lesson 5: Algebra Basics',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    name: 'Science',
    icon: Microscope,
    progress: 70,
    currentLesson: 'Lesson 9: Ecosystem',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    name: 'Araling Panlipunan',
    icon: Globe,
    progress: 55,
    currentLesson: 'Lesson 6: Philippine History',
    color: 'from-yellow-500 to-yellow-600',
    bgColor: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
  {
    name: 'GMRC',
    icon: Heart,
    progress: 90,
    currentLesson: 'Lesson 10: Respect & Values',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600',
  },
  {
    name: 'Makabansa',
    icon: Flag,
    progress: 65,
    currentLesson: 'Lesson 7: National Symbols',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600',
  },
];

const recentActivities = [
  { subject: 'Math', activity: 'Completed Quiz: Fractions', time: '2 hours ago', score: 95 },
  { subject: 'Science', activity: 'Watched Video: Water Cycle', time: '5 hours ago' },
  { subject: 'English', activity: 'Submitted Assignment', time: '1 day ago', score: 88 },
];

const upcomingTasks = [
  { subject: 'Filipino', task: 'Quiz: Panghalip', dueDate: 'May 15, 2026' },
  { subject: 'Math', task: 'Assignment: Equations', dueDate: 'May 17, 2026' },
  { subject: 'Science', task: 'Project: Plants', dueDate: 'May 20, 2026' },
];

export default function StudentDashboard() {
  const totalProgress = Math.round(subjects.reduce((acc, subj) => acc + subj.progress, 0) / subjects.length);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2">Welcome back, Juan! 👋</h1>
        <p className="text-muted-foreground">Continue your learning journey</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)]">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center`}>
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-semibold text-primary">{totalProgress}%</span>
          </div>
          <p className="text-sm text-muted-foreground">Overall Progress</p>
        </div>

        <div className="bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)]">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center`}>
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-semibold text-secondary">7</span>
          </div>
          <p className="text-sm text-muted-foreground">Active Subjects</p>
        </div>

        <div className="bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)]">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center`}>
              <Clock className="w-6 h-6 text-foreground" />
            </div>
            <span className="text-2xl font-semibold text-foreground">12h</span>
          </div>
          <p className="text-sm text-muted-foreground">Study Time This Week</p>
        </div>

        <div className="bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)]">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center`}>
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-semibold text-green-600">92%</span>
          </div>
          <p className="text-sm text-muted-foreground">Average Score</p>
        </div>
      </div>

      {/* Subjects Grid */}
      <div>
        <h2 className="mb-6">My Subjects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {subjects.map((subject) => {
            const Icon = subject.icon;
            return (
              <div
                key={subject.name}
                className="bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)] hover:shadow-[10px_10px_24px_rgba(0,0,0,0.08),-10px_-10px_24px_rgba(255,255,255,0.9)] transition-all cursor-pointer group"
              >
                <div className={`w-14 h-14 rounded-2xl ${subject.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${subject.iconColor}`} />
                </div>
                <h3 className="mb-2">{subject.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{subject.currentLesson}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{subject.progress}%</span>
                  </div>
                  <Progress.Root
                    value={subject.progress}
                    className="relative h-2 w-full overflow-hidden rounded-full bg-muted"
                  >
                    <Progress.Indicator
                      className={`h-full bg-gradient-to-r ${subject.color} transition-all`}
                      style={{ width: `${subject.progress}%` }}
                    />
                  </Progress.Root>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Activities and Upcoming Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)]">
          <h3 className="mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Recent Activities
          </h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{activity.activity}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.subject} • {activity.time}</p>
                </div>
                {activity.score && (
                  <span className="text-sm font-medium text-green-600">{activity.score}%</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)]">
          <h3 className="mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-secondary" />
            Upcoming Tasks
          </h3>
          <div className="space-y-4">
            {upcomingTasks.map((task, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">{task.subject.charAt(0)}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{task.task}</p>
                  <p className="text-xs text-muted-foreground mt-1">{task.subject}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{task.dueDate}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
