import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { FileText, CheckCircle, Clock, TrendingUp, Calendar } from 'lucide-react';

const performanceData = [
  { subject: 'Filipino', score: 85 },
  { subject: 'English', score: 92 },
  { subject: 'Math', score: 78 },
  { subject: 'Science', score: 88 },
  { subject: 'A.P.', score: 81 },
  { subject: 'GMRC', score: 95 },
  { subject: 'Makabansa', score: 87 },
];

const completionData = [
  { name: 'Completed', value: 45, color: '#4C6FFF' },
  { name: 'Pending', value: 12, color: '#FF8A5B' },
  { name: 'Upcoming', value: 8, color: '#FFD56B' },
];

const recentQuizzes = [
  { title: 'Algebra Basics', subject: 'Math', score: 95, total: 100, date: 'May 12, 2026', status: 'completed' },
  { title: 'Verb Tenses', subject: 'English', score: 88, total: 100, date: 'May 11, 2026', status: 'completed' },
  { title: 'Ecosystem', subject: 'Science', score: 92, total: 100, date: 'May 10, 2026', status: 'completed' },
  { title: 'Panghalip', subject: 'Filipino', score: null, total: 100, date: 'May 15, 2026', status: 'upcoming' },
  { title: 'Philippine History', subject: 'A.P.', score: null, total: 100, date: 'May 16, 2026', status: 'upcoming' },
];

const upcomingQuizzes = [
  { title: 'Values Education', subject: 'GMRC', date: 'May 15, 2026', questions: 20, duration: '30 min' },
  { title: 'National Symbols', subject: 'Makabansa', date: 'May 17, 2026', questions: 15, duration: '25 min' },
  { title: 'Fractions Advanced', subject: 'Math', date: 'May 18, 2026', questions: 25, duration: '40 min' },
];

export default function QuizDashboard() {
  const avgScore = Math.round(performanceData.reduce((acc, item) => acc + item.score, 0) / performanceData.length);
  const totalQuizzes = completionData.reduce((acc, item) => acc + item.value, 0);
  const completionRate = Math.round((completionData[0].value / totalQuizzes) * 100);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2">Quiz Dashboard</h1>
        <p className="text-muted-foreground">Track your quiz performance and progress</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)]">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-semibold text-primary">{avgScore}%</span>
          </div>
          <p className="text-sm text-muted-foreground">Average Score</p>
        </div>

        <div className="bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)]">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-semibold text-secondary">{completionData[0].value}</span>
          </div>
          <p className="text-sm text-muted-foreground">Completed Quizzes</p>
        </div>

        <div className="bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)]">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
              <Clock className="w-6 h-6 text-foreground" />
            </div>
            <span className="text-2xl font-semibold text-foreground">{completionData[1].value}</span>
          </div>
          <p className="text-sm text-muted-foreground">Pending Quizzes</p>
        </div>

        <div className="bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)]">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-semibold text-green-600">{completionRate}%</span>
          </div>
          <p className="text-sm text-muted-foreground">Completion Rate</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance by Subject */}
        <div className="lg:col-span-2 bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)]">
          <h3 className="mb-6">Performance by Subject</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E8EAF6" />
              <XAxis dataKey="subject" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              />
              <Bar dataKey="score" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4C6FFF" />
                  <stop offset="100%" stopColor="#FF8A5B" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Quiz Completion */}
        <div className="bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)]">
          <h3 className="mb-6">Quiz Status</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={completionData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {completionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {completionData.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span>{item.name}</span>
                </div>
                <span className="font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent and Upcoming Quizzes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Quizzes */}
        <div className="bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)]">
          <h3 className="mb-4">Recent Quizzes</h3>
          <div className="space-y-3">
            {recentQuizzes.map((quiz, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm truncate">{quiz.title}</h4>
                  <p className="text-xs text-muted-foreground">{quiz.subject} • {quiz.date}</p>
                </div>
                {quiz.status === 'completed' ? (
                  <div className="text-right">
                    <p className="font-medium text-green-600">{quiz.score}%</p>
                    <p className="text-xs text-muted-foreground">Passed</p>
                  </div>
                ) : (
                  <span className="px-3 py-1 rounded-lg bg-accent/50 text-xs font-medium">Upcoming</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Quizzes */}
        <div className="bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)]">
          <h3 className="mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-secondary" />
            Upcoming Quizzes
          </h3>
          <div className="space-y-3">
            {upcomingQuizzes.map((quiz, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-sm">{quiz.title}</h4>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{quiz.date}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{quiz.subject}</p>
                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1">
                    <FileText className="w-3 h-3" />
                    {quiz.questions} questions
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {quiz.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
