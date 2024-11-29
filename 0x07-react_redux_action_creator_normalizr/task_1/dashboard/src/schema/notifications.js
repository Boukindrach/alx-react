import notificationData from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';


const userSchema = new schema.Entity('users');
const messageSchema = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notificationSchema = new schema.Entity('notifications', {
  author: userSchema,
  context: messageSchema,
});

/**
 * Normalizes the notification data using Normalizr
 * @type {Object} Normalized data structure
 */

export const normalized = normalize(notificationData, [notificationSchema]);

/**
 * Retrieves all notification contexts for a specific user
 * @param {string} userId - The unique identifier of the user
 * @returns {Array} An array of notification contexts for the given user
 */

export default function getAllNotificationsByUser(userId) {

  if (!userId) {
    console.warn('No user ID provided');
    return [];
  }

  return notificationData
    .filter(notification => notification.author?.id === userId)
    .map(notification => notification.context);
}
