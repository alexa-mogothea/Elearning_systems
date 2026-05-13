import { useState } from 'react';
import { Upload, Video, FileText, Plus, Edit, Trash2, Eye, Download } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';

const uploadedVideos = [
  { id: 1, title: 'Introduction to Algebra', subject: 'Math', duration: '15:30', views: 245, uploadDate: 'May 10, 2026' },
  { id: 2, title: 'The Water Cycle', subject: 'Science', duration: '12:45', views: 189, uploadDate: 'May 9, 2026' },
  { id: 3, title: 'Philippine History', subject: 'Araling Panlipunan', duration: '20:15', views: 167, uploadDate: 'May 8, 2026' },
];

const uploadedModules = [
  { id: 1, title: 'Grammar Basics Module', subject: 'English', pages: 24, downloads: 156, uploadDate: 'May 11, 2026' },
  { id: 2, title: 'Fractions Worksheet', subject: 'Math', pages: 8, downloads: 203, uploadDate: 'May 10, 2026' },
  { id: 3, title: 'Values Education Guide', subject: 'GMRC', pages: 16, downloads: 142, uploadDate: 'May 9, 2026' },
];

const assignments = [
  { id: 1, title: 'Essay: My Family', subject: 'Filipino', dueDate: 'May 20, 2026', submissions: 18, total: 25 },
  { id: 2, title: 'Math Problem Set 5', subject: 'Math', dueDate: 'May 18, 2026', submissions: 22, total: 25 },
  { id: 3, title: 'Science Project Proposal', subject: 'Science', dueDate: 'May 22, 2026', submissions: 12, total: 25 },
];

export default function LessonManagement() {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file upload logic here
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Lesson Management</h1>
          <p className="text-muted-foreground">Upload and manage learning materials</p>
        </div>
        <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white shadow-[6px_6px_16px_rgba(76,111,255,0.2)] hover:shadow-[8px_8px_20px_rgba(76,111,255,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Create New
        </button>
      </div>

      {/* Upload Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Video Upload */}
        <div className="bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <Video className="w-5 h-5 text-white" />
            </div>
            <h3>Upload Video Lesson</h3>
          </div>
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all ${
              dragActive
                ? 'border-primary bg-primary/5 shadow-[inset_4px_4px_12px_rgba(76,111,255,0.1)]'
                : 'border-border bg-muted/20 shadow-[inset_2px_2px_8px_rgba(0,0,0,0.03)]'
            }`}
          >
            <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="font-medium mb-2">Drag & drop video files here</p>
            <p className="text-sm text-muted-foreground mb-4">or</p>
            <button className="px-6 py-2.5 rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors">
              Browse Files
            </button>
            <p className="text-xs text-muted-foreground mt-4">Supported: MP4, MOV, AVI (Max 500MB)</p>
          </div>
        </div>

        {/* PDF/Module Upload */}
        <div className="bg-white rounded-[24px] p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h3>Upload PDF Module</h3>
          </div>
          <div
            className="border-2 border-dashed border-border rounded-2xl p-8 text-center bg-muted/20 shadow-[inset_2px_2px_8px_rgba(0,0,0,0.03)] transition-all hover:border-secondary hover:bg-secondary/5"
          >
            <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="font-medium mb-2">Drag & drop PDF files here</p>
            <p className="text-sm text-muted-foreground mb-4">or</p>
            <button className="px-6 py-2.5 rounded-xl bg-secondary text-white hover:bg-secondary/90 transition-colors">
              Browse Files
            </button>
            <p className="text-xs text-muted-foreground mt-4">Supported: PDF, DOCX (Max 50MB)</p>
          </div>
        </div>
      </div>

      {/* Tabs for Different Materials */}
      <Tabs.Root defaultValue="videos" className="bg-white rounded-[24px] shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)]">
        <Tabs.List className="flex gap-2 p-2 border-b border-border">
          <Tabs.Trigger
            value="videos"
            className="flex-1 px-6 py-3 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white data-[state=active]:shadow-[4px_4px_12px_rgba(76,111,255,0.2)] transition-all"
          >
            Video Lessons
          </Tabs.Trigger>
          <Tabs.Trigger
            value="modules"
            className="flex-1 px-6 py-3 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white data-[state=active]:shadow-[4px_4px_12px_rgba(76,111,255,0.2)] transition-all"
          >
            PDF Modules
          </Tabs.Trigger>
          <Tabs.Trigger
            value="assignments"
            className="flex-1 px-6 py-3 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white data-[state=active]:shadow-[4px_4px_12px_rgba(76,111,255,0.2)] transition-all"
          >
            Assignments
          </Tabs.Trigger>
        </Tabs.List>

        {/* Videos Tab */}
        <Tabs.Content value="videos" className="p-6">
          <div className="space-y-4">
            {uploadedVideos.map((video) => (
              <div
                key={video.id}
                className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all group"
              >
                <div className="w-20 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Video className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium truncate">{video.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {video.subject} • {video.duration} • {video.views} views • {video.uploadDate}
                  </p>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-xl bg-accent/50 hover:bg-accent text-foreground transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-xl bg-destructive/10 hover:bg-destructive/20 text-destructive transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Tabs.Content>

        {/* Modules Tab */}
        <Tabs.Content value="modules" className="p-6">
          <div className="space-y-4">
            {uploadedModules.map((module) => (
              <div
                key={module.id}
                className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all group"
              >
                <div className="w-20 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium truncate">{module.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {module.subject} • {module.pages} pages • {module.downloads} downloads • {module.uploadDate}
                  </p>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-xl bg-secondary/10 hover:bg-secondary/20 text-secondary transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-xl bg-accent/50 hover:bg-accent text-foreground transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-xl bg-destructive/10 hover:bg-destructive/20 text-destructive transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Tabs.Content>

        {/* Assignments Tab */}
        <Tabs.Content value="assignments" className="p-6">
          <div className="space-y-4">
            {assignments.map((assignment) => (
              <div
                key={assignment.id}
                className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all group"
              >
                <div className="w-20 h-14 rounded-xl bg-gradient-to-br from-accent/40 to-accent/60 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium truncate">{assignment.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {assignment.subject} • Due: {assignment.dueDate}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{assignment.submissions}/{assignment.total}</p>
                  <p className="text-sm text-muted-foreground">Submissions</p>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-xl bg-accent/50 hover:bg-accent text-foreground transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-xl bg-destructive/10 hover:bg-destructive/20 text-destructive transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
