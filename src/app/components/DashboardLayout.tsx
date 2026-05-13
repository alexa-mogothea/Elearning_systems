import { Outlet, Link, useLocation } from 'react-router';
import {
  Home,
  BookOpen,
  FileText,
  Trophy,
  Bell,
  Search,
  User,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

export default function DashboardLayout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { path: '/', label: 'Dashboard', icon: Home },
    { path: '/lessons', label: 'Lessons', icon: BookOpen },
    { path: '/quizzes', label: 'Quizzes', icon: FileText },
    { path: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen bg-white shadow-[12px_0_24px_rgba(0,0,0,0.06)] transition-all duration-300 z-50 ${
          isSidebarOpen ? 'w-64' : 'w-0 lg:w-20'
        }`}
      >
        <div className="h-full flex flex-col p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            {isSidebarOpen && (
              <span className="font-semibold whitespace-nowrap">EduLearn</span>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-[6px_6px_16px_rgba(76,111,255,0.2)]'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground shadow-[4px_4px_12px_rgba(0,0,0,0.04),-4px_-4px_12px_rgba(255,255,255,0.9)]'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {isSidebarOpen && <span className="whitespace-nowrap">{item.label}</span>}
                </Link>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className={`mt-auto pt-6 border-t border-border ${!isSidebarOpen && 'lg:flex lg:justify-center'}`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-white" />
              </div>
              {isSidebarOpen && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Juan Dela Cruz</p>
                  <p className="text-xs text-muted-foreground truncate">Student</p>
                </div>
              )}
            </div>
            {isSidebarOpen && (
              <Link
                to="/login"
                className="mt-3 flex items-center gap-2 text-sm text-muted-foreground hover:text-destructive transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Link>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-border">
          <div className="flex items-center gap-4 px-6 py-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="hidden lg:block p-2 rounded-xl hover:bg-muted transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search lessons, quizzes..."
                  className="w-full pl-12 pr-4 py-2.5 rounded-2xl bg-muted/50 border-0 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.04)] focus:shadow-[inset_4px_4px_10px_rgba(0,0,0,0.06)] transition-shadow outline-none"
                />
              </div>
            </div>

            {/* Notifications */}
            <button className="relative p-2.5 rounded-xl bg-white shadow-[4px_4px_12px_rgba(0,0,0,0.06),-4px_-4px_12px_rgba(255,255,255,0.9)] hover:shadow-[6px_6px_16px_rgba(0,0,0,0.08)] transition-shadow">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 lg:p-8">
          <Outlet />
        </main>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
