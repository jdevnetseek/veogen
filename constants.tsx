
import React from 'react';

// SVG Icons as React Components
export const VideoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.55a1 1 0 011.45.89v2.22a1 1 0 01-1.45.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);
export const UserGroupIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);
export const ChartBarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);
export const UserCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
export const CogIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6.343 6.343l1.414 1.414M17.657 17.657l1.414 1.414M16 3h4M19 5v4M16.343 6.343l-1.414 1.414M12 11c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
    </svg>
);
export const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 13.382 14.976 12 12.001 12h-6z"></path>
    </svg>
);
export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);
export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);
export const BellIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
);
export const LogoutIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
);
export const ImageIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);
export const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);
export const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
    </svg>
);
export const InfoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
export const KeyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a6 6 0 017.743-5.743z" />
    </svg>
);
export const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
export const OpenAIIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.2819 10.3331C22.2819 9.53839 21.6443 8.90088 20.8496 8.90088C20.0549 8.90088 19.4174 9.53839 19.4174 10.3331V10.8245C19.4174 11.3932 19.047 11.8906 18.4988 12.067C18.1539 12.1757 17.8485 12.352 17.5431 12.5284C16.9744 12.8422 16.4057 13.1561 15.837 13.5094C15.1995 13.9022 14.562 14.2949 13.7773 14.2949C12.9926 14.2949 12.3551 13.9022 11.7176 13.5094C11.1489 13.1561 10.5802 12.8422 10.0115 12.5284C9.70605 12.352 9.40063 12.1757 9.05579 12.067C8.50757 11.8906 8.13721 11.3932 8.13721 10.8245V6.021C8.13721 5.22632 7.53906 4.58887 6.74438 4.58887C5.94971 4.58887 5.31226 5.22632 5.31226 6.021V10.2936C4.65332 10.6074 4.16284 11.1443 4.16284 11.82C4.16284 12.4957 4.65332 13.0326 5.31226 13.3464V14.8901C5.31226 15.6848 5.94971 16.3223 6.74438 16.3223C7.53906 16.3223 8.13721 15.6848 8.13721 14.8901V14.1558C8.58081 14.4301 9.12903 14.744 9.69775 15.0579C10.4502 15.4902 11.2422 15.9621 12.2698 15.9621C13.2974 15.9621 14.0894 15.4902 14.8418 15.0579C15.4105 14.744 15.9587 14.4301 16.4053 14.1558V14.8901C16.4053 15.6848 17.0034 16.3223 17.7981 16.3223C18.5928 16.3223 19.2302 15.6848 19.2302 14.8901V13.3464C19.8892 13.0326 20.3796 12.4957 20.3796 11.82C20.3796 11.1443 19.8892 10.6074 19.2302 10.2936V4.76611C19.2302 3.97144 18.5928 3.33398 17.7981 3.33398C17.0034 3.33398 16.4053 3.97144 16.4053 4.76611V8.29346C15.9587 7.97974 15.4105 7.66577 14.8418 7.35193C14.0894 6.91968 13.2974 6.44775 12.2698 6.44775C11.2422 6.44775 10.4502 6.91968 9.69775 7.35193C9.12903 7.66577 8.58081 7.97974 8.13721 8.29346V6.021C8.13721 4.38281 6.74438 3 5.31226 3C3.88013 3 2.44775 4.38281 2.44775 6.021V10.2936C1.40039 10.8306 0.718262 11.8152 0.718262 12.9187C0.718262 14.0222 1.40039 15.0068 2.44775 15.5439V17.0876C2.44775 18.7258 3.88013 20.1086 5.31226 20.1086C6.74438 20.1086 8.13721 18.7258 8.13721 17.0876V16.3137C8.62769 16.6274 9.1759 16.9414 9.74463 17.2552C10.7495 17.8093 11.7544 18.3635 12.9099 18.3635C14.0654 18.3635 15.0703 17.8093 16.0752 17.2552C16.6439 16.9414 17.1921 16.6274 17.6826 16.3137V17.0876C17.6826 18.7258 19.0754 20.1086 20.5076 20.1086C21.9397 20.1086 23.3325 18.7258 23.3325 17.0876V12.9187C23.3325 11.8152 22.6504 10.8306 21.603 10.2936V4.76611C21.603 4.38281 21.2725 3.93188 20.8496 3.7937C20.5049 3.69482 20.1602 3.7937 19.9365 3.97144C19.6733 4.14917 19.5483 4.46313 19.5483 4.76611V10.3331C19.5483 10.5107 19.6372 10.6885 19.7656 10.8267C19.9336 10.9648 20.1572 11.0244 20.3796 10.9648C20.6033 10.9253 20.8269 10.7671 20.8269 10.5312C20.8269 10.4128 20.8269 10.3733 20.8269 10.3331C20.8269 10.0974 21.0112 8.90088 20.8496 8.90088C20.688 8.90088 20.5049 10.0974 20.5049 10.3331C20.5049 10.5688 20.3218 10.7671 20.0781 10.8066C19.874 10.8462 19.6702 10.7671 19.5483 10.6091C19.3804 10.4907 19.2717 10.2925 19.2717 10.0942V4.76611C19.2717 4.01099 18.6343 3.37354 17.8396 3.37354C17.0449 3.37354 16.4075 4.01099 16.4075 4.76611V8.33203C15.999 8.01831 15.4902 7.70435 14.8813 7.3905C14.1289 6.95825 13.3369 6.48633 12.3093 6.48633C11.2817 6.48633 10.4897 6.95825 9.7373 7.3905C9.12842 7.70435 8.61963 8.01831 8.21118 8.33203V6.021C8.21118 4.42236 6.81836 3.03955 5.27271 3.03955C3.72705 3.03955 2.33423 4.42236 2.33423 6.021V10.2936C1.32935 10.8293 0.678711 11.814 0.678711 12.9175C0.678711 14.0209 1.32935 15.0056 2.33423 15.5413V17.085C2.33423 18.6836 3.72705 20.0664 5.27271 20.0664C6.81836 20.0664 8.21118 18.6836 8.21118 17.085V16.3111C8.65918 16.6248 9.2074 16.9387 9.77612 17.2526C10.781 17.8066 11.7859 18.3608 12.9414 18.3608C14.0969 18.3608 15.1018 17.8066 16.1067 17.2526C16.6754 16.9387 17.2236 16.6248 17.6716 16.3111V17.085C17.6716 18.6836 19.0645 20.0664 20.5103 20.0664C22.0559 20.0664 23.4487 18.6836 23.4487 17.085V12.9175C23.4487 11.814 22.7981 10.8293 21.7932 10.2936V4.76611C21.7932 4.38281 21.4626 3.93188 21.0398 3.7937C20.6951 3.69482 20.3503 3.7937 20.1267 3.97144C19.8635 4.14917 19.7385 4.46313 19.7385 4.76611V10.3331Z" />
    </svg>
);


// Navigation Links
export const NAV_LINKS = [
    { name: 'Generate', path: '/generate', icon: <SparklesIcon className="h-6 w-6" /> },
    { name: 'Videos', path: '/videos', icon: <VideoIcon className="h-6 w-6" /> },
    { name: 'Users', path: '/users', icon: <UserGroupIcon className="h-6 w-6" /> },
    { name: 'Reports', path: '/reports', icon: <ChartBarIcon className="h-6 w-6" /> },
    { name: 'Profile', path: '/profile', icon: <UserCircleIcon className="h-6 w-6" /> },
    { name: 'Settings', path: '/settings', icon: <CogIcon className="h-6 w-6" /> },
];
