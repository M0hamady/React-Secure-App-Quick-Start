import React, { useEffect } from "react";
import { useNotification } from "../context/NotificationContext";

const NotificationList: React.FC = () => {
  const { notifications, removeNotification } = useNotification();

  useEffect(() => {
    // Automatically remove notifications after 5 seconds
    const timeoutIds = notifications.map((_, index: number) =>
      setTimeout(() => removeNotification(index), 5000)
    );

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [notifications, removeNotification]);

  return (
    <div className="fixed bottom-0 right-0 m-4 space-y-2">
      {notifications.map((notification, index: number) => (
        <div
          key={index}
          className={`p-4 rounded-lg shadow-lg text-white ${
            notification.type === "error"
              ? "bg-red-500"
              : notification.type === "success"
              ? "bg-green-500"
              : notification.type === "info"
              ? "bg-blue-500"
              : "bg-yellow-500"
          }`}
        >
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
