import * as notificationData from "../../../../notifications.json";

export default function getAllNotificationsByUser(userId) {
  const notifications = notificationData.default || notificationData;

  return notifications
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}
