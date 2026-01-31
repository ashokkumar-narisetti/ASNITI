import { createBrowserRouter } from 'react-router';

import Login from '@/app/pages/Login';
import ChangePassword from '@/app/pages/ChangePassword';

// Super Admin
import SuperAdminDashboard from '@/app/pages/super-admin/Dashboard';
import SchoolsManagement from '@/app/pages/super-admin/SchoolsManagement';
import SchoolUsers from '@/app/pages/super-admin/SchoolUsers';
import AuditLogs from '@/app/pages/super-admin/AuditLogs';

// School Admin
import SchoolAdminDashboard from '@/app/pages/school-admin/Dashboard';
import SchoolProfile from '@/app/pages/school-admin/SchoolProfile';
import TeachersManagement from '@/app/pages/school-admin/TeachersManagement';
import ClassesManagement from '@/app/pages/school-admin/ClassesManagement';
import StudentsManagement from '@/app/pages/school-admin/StudentsManagement';

// Teacher
import TeacherDashboard from '@/app/pages/teacher/Dashboard';
import MyClasses from '@/app/pages/teacher/MyClasses';
import Attendance from '@/app/pages/teacher/Attendance';
import Homework from '@/app/pages/teacher/Homework';
import MarksEntry from '@/app/pages/teacher/MarksEntry';

// Parent
import ParentDashboard from '@/app/pages/parent/Dashboard';
import MyChildren from '@/app/pages/parent/MyChildren';
import AttendanceView from '@/app/pages/parent/AttendanceView';
import HomeworkView from '@/app/pages/parent/HomeworkView';
import MarksView from '@/app/pages/parent/MarksView';

export const router = createBrowserRouter([
  /* ---------- AUTH ---------- */
  {
    path: '/',
    Component: Login,
  },
  {
    path: '/login', // ✅ alias for login
    Component: Login,
  },
  {
    path: '/change-password',
    Component: ChangePassword,
  },

  /* ---------- SUPER ADMIN ---------- */
  {
    path: '/super-admin',
    children: [
      { index: true, Component: SuperAdminDashboard },
      { path: 'schools', Component: SchoolsManagement },
      { path: 'schools/:schoolId/users', Component: SchoolUsers },
      { path: 'audit-logs', Component: AuditLogs },
    ],
  },

  /* ---------- SCHOOL ADMIN ---------- */
  {
    path: '/school-admin',
    children: [
      { index: true, Component: SchoolAdminDashboard },
      { path: 'profile', Component: SchoolProfile },
      { path: 'teachers', Component: TeachersManagement },
      { path: 'classes', Component: ClassesManagement },
      { path: 'students', Component: StudentsManagement },
    ],
  },

  /* ---------- TEACHER ---------- */
  {
    path: '/teacher',
    children: [
      { index: true, Component: TeacherDashboard },
      { path: 'classes', Component: MyClasses },
      { path: 'attendance', Component: Attendance },
      { path: 'homework', Component: Homework },
      { path: 'marks', Component: MarksEntry },
    ],
  },

  /* ---------- PARENT ---------- */
  {
    path: '/parent',
    children: [
      { index: true, Component: ParentDashboard },
      { path: 'children', Component: MyChildren },
      { path: 'attendance/:childId', Component: AttendanceView },
      { path: 'homework/:childId', Component: HomeworkView },
      { path: 'marks/:childId', Component: MarksView },
    ],
  },
]);
