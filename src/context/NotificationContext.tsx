import React, { createContext, useState, useContext, ReactNode } from 'react';

// أنواع البيانات الخاصة بالإشعارات
interface Notification {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning'; // نوع الإشعار
}

interface NotificationContextProps {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  removeNotification: (index: number) => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

// مكون الـ NotificationProvider
export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // دالة لإضافة إشعار جديد
  const addNotification = (notification: Notification) => {
    setNotifications((prev) => [...prev, notification]);
  };

  // دالة لإزالة إشعار
  const removeNotification = (index: number) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

// استخدام الـ Context في المكونات الأخرى
export const useNotification = (): NotificationContextProps => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('يجب استخدام useNotification داخل NotificationProvider');
  }
  return context;
};
