import { Trophy, Award, Star, TrendingUp, Crown, Medal } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const topStudents = [
  {
    rank: 1,
    name: 'Maria Santos',
    points: 2850,
    avgScore: 96,
    completedLessons: 48,
    badges: 12,
    trend: '+15%',
    avatar: '👧',
  },
  {
    rank: 2,
    name: 'Juan Dela Cruz',
    points: 2720,
    avgScore: 94,
    completedLessons: 45,
    badges: 10,
    trend: '+12%',
    avatar: '👦',
  },
  {
    rank: 3,
    name: 'Ana Reyes',
    points: 2680,
    avgScore: 93,
    completedLessons: 44,
    badges: 11,
    trend: '+10%',
    avatar: '👧',
  },
  {
    rank: 4,
    name: 'Pedro Garcia',
    points: 2550,
    avgScore: 91,
    completedLessons: 42,
    badges: 9,
    trend: '+8%',
    avatar: '👦',
  },
  {
    rank: 5,
    name: 'Sofia Martinez',
    points: 2480,
    avgScore: 90,
    completedLessons: 41,
    badges: 10,
    trend: '+11%',
    avatar: '👧',
  },
  {
    rank: 6,
    name: 'Carlos Lopez',
    points: 2420,
    avgScore: 89,
    completedLessons: 40,
    badges: 8,
    trend: '+7%',
    avatar: '👦',
  },
  {
    rank: 7,
    name: 'Isabella Cruz',
    points: 2350,
    avgScore: 88,
    completedLessons: 39,
    badges: 9,
    trend: '+9%',
    avatar: '👧',
  },
];

const weeklyPerformance = [
  { week: 'Week 1', score: 82 },
  { week: 'Week 2', score: 85 },
  { week: 'Week 3', score: 88 },
  { week: 'Week 4', score: 91 },
  { week: 'Week 5', score: 94 },
];

const subjectLeaders = [
  { subject: 'Math', leader: 'Maria Santos', score: 98 },
  { subject: 'Science', leader: 'Juan Dela Cruz', score: 97 },
  { subject: 'English', leader: 'Ana Reyes', score: 96 },
  { subject: 'Filipino', leader: 'Sofia Martinez', score: 95 },
];

const achievements = [
  { title: 'Perfect Score', description: '10 consecutive perfect quizzes', icon: '⭐', color: 'from-yellow-500 to-yellow-600' },
  { title: 'Speed Learner', description: 'Complete 50 lessons', icon: '⚡', color: 'from-blue-500 to-blue-600' },
  { title: 'Quiz Master', description: 'Score 90+ in all subjects', icon: '🏆', color: 'from-purple-500 to-purple-600' },
  { title: 'Consistent', description: '30 days active streak', icon: '🔥', color: 'from-orange-500 to-red-600' },
];

export default function TopStudents() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2 flex items-center gap-3">
            <Trophy className="w-8 h-8 text-accent" />
            Top Students Leaderboard
          </h1>
          <p className="text-muted-foreground">Week of May 6 - May 13, 2026</p>
        </div>
        <button className="px-6 py-3 rounded-2xl bg-white shadow-[6px_6px_16px_rgba(0,0,0,0.06),-6px_-6px_16px_rgba(255,255,255,0.9)] hover:shadow-[8px_8px_20px_rgba(0,0,0,0.08)] transition-all">
          Export Results
        </button>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 2nd Place */}
        <div className="order-2 md:order-1 bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)] relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center shadow-lg">
            <span className="text-xl">🥈</span>
          </div>
          <div className="text-center pt-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-4xl shadow-[6px_6px_16px_rgba(0,0,0,0.1)]">
              {topStudents[1].avatar}
            </div>
            <h3 className="mb-1">{topStudents[1].name}</h3>
            <p className="text-sm text-muted-foreground mb-4">2nd Place</p>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Points</span>
                <span className="font-semibold text-gray-600">{topStudents[1].points}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Avg Score</span>
                <span className="font-semibold">{topStudents[1].avgScore}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* 1st Place */}
        <div className="order-1 md:order-2 bg-gradient-to-br from-primary to-secondary rounded-[24px] p-6 shadow-[12px_12px_28px_rgba(76,111,255,0.3),-12px_-12px_28px_rgba(255,255,255,0.9)] relative transform md:scale-105">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-yellow-500 flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '2s' }}>
            <Crown className="w-8 h-8 text-white" />
          </div>
          <div className="text-center pt-10 text-white">
            <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-5xl shadow-[8px_8px_20px_rgba(0,0,0,0.2)]">
              {topStudents[0].avatar}
            </div>
            <h3 className="mb-1">{topStudents[0].name}</h3>
            <p className="text-sm text-white/80 mb-4">Champion 🏆</p>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/80">Points</span>
                <span className="font-semibold">{topStudents[0].points}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/80">Avg Score</span>
                <span className="font-semibold">{topStudents[0].avgScore}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3rd Place */}
        <div className="order-3 bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)] relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-lg">
            <span className="text-xl">🥉</span>
          </div>
          <div className="text-center pt-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center text-4xl shadow-[6px_6px_16px_rgba(0,0,0,0.1)]">
              {topStudents[2].avatar}
            </div>
            <h3 className="mb-1">{topStudents[2].name}</h3>
            <p className="text-sm text-muted-foreground mb-4">3rd Place</p>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Points</span>
                <span className="font-semibold text-orange-600">{topStudents[2].points}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Avg Score</span>
                <span className="font-semibold">{topStudents[2].avgScore}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Leaderboard */}
      <div className="bg-white rounded-[24px] shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)] overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3>Full Rankings</h3>
        </div>
        <div className="divide-y divide-border">
          {topStudents.map((student) => (
            <div
              key={student.rank}
              className="flex items-center gap-4 p-6 hover:bg-muted/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center font-semibold flex-shrink-0">
                {student.rank <= 3 ? (
                  <span className="text-xl">
                    {student.rank === 1 ? '🥇' : student.rank === 2 ? '🥈' : '🥉'}
                  </span>
                ) : (
                  <span className="text-muted-foreground">#{student.rank}</span>
                )}
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl flex-shrink-0">
                {student.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium truncate">{student.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {student.completedLessons} lessons • {student.badges} badges
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 text-green-600 text-sm">
                <TrendingUp className="w-4 h-4" />
                {student.trend}
              </div>
              <div className="text-right">
                <p className="font-semibold text-lg text-primary">{student.points}</p>
                <p className="text-sm text-muted-foreground">{student.avgScore}% avg</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance & Subject Leaders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Performance Trend */}
        <div className="bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)]">
          <h3 className="mb-6">Weekly Performance Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={weeklyPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E8EAF6" />
              <XAxis dataKey="week" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} domain={[75, 100]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#4C6FFF"
                strokeWidth={3}
                dot={{ fill: '#4C6FFF', r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Subject Leaders */}
        <div className="bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)]">
          <h3 className="mb-6 flex items-center gap-2">
            <Star className="w-5 h-5 text-accent" />
            Subject Leaders
          </h3>
          <div className="space-y-4">
            {subjectLeaders.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-yellow-500 flex items-center justify-center flex-shrink-0">
                  <Medal className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm truncate">{item.leader}</h4>
                  <p className="text-xs text-muted-foreground">{item.subject}</p>
                </div>
                <span className="font-semibold text-primary">{item.score}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)]">
        <h3 className="mb-6 flex items-center gap-2">
          <Award className="w-5 h-5 text-secondary" />
          Achievement Badges
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-white shadow-[4px_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[6px_6px_16px_rgba(0,0,0,0.06)] transition-all group cursor-pointer"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                {achievement.icon}
              </div>
              <h4 className="text-center mb-2">{achievement.title}</h4>
              <p className="text-sm text-muted-foreground text-center">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
