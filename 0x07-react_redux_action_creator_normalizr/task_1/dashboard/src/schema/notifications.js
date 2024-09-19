import * as notificationData from "../../../../notifications.json";
import { normalize, schema } from "normalizr";

// Define schema
const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

// Normalize data
const normalized = normalize(notificationData.default, [notification]);

// Export function
export default function getAllNotificationsByUser(userId) {
  // Assuming notificationData.default is the array of notifications
  return notificationData.default.filter((notification) => notification.author.id === userId).map((notification) => notification.context);
}

// Export normalized data
export { normalized };
