import notificationData from '../../../../notifications.json';

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
