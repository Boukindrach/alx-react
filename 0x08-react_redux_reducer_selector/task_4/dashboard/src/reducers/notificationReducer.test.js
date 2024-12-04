import {
  markAsRead,
  setNotificationFilter,
  fetchNotificationsSuccess,
} from '../actions/notificationActionCreators';
import { notificationReducer } from './notificationReducer';

describe('notificationReducer', () => {
  const defaultState = {
    notifications: [],
    filter: 'DEFAULT',
  };

  const sampleNotifications = [
    {
      id: 1,
      isRead: false,
      type: 'default',
      value: 'New course available',
    },
    {
      id: 2,
      isRead: false,
      type: 'urgent',
      value: 'New resume available',
    },
    {
      id: 3,
      isRead: false,
      type: 'urgent',
      value: 'New data available',
    },
  ];

  describe('default behavior', () => {
    it('should return default state for unknown action', () => {
      expect(notificationReducer(defaultState, { type: 'UNKNOWN_ACTION' })).toEqual(defaultState);
    });
  });

  describe('MARK_AS_READ', () => {
    it('should mark a specific notification as read', () => {
      const initialState = {
        filter: 'DEFAULT',
        notifications: sampleNotifications,
      };

      const expectedState = {
        filter: 'DEFAULT',
        notifications: sampleNotifications.map(notification => 
          notification.id === 2 
            ? { ...notification, isRead: true } 
            : notification
        ),
      };

      expect(notificationReducer(initialState, markAsRead(2))).toEqual(expectedState);
    });
  });

  describe('SET_TYPE_FILTER', () => {
    it('should change the filter type', () => {
      const initialState = {
        filter: 'DEFAULT',
        notifications: sampleNotifications,
      };

      const expectedState = {
        filter: 'URGENT',
        notifications: sampleNotifications,
      };

      expect(notificationReducer(initialState, setNotificationFilter('URGENT'))).toEqual(expectedState);
    });
  });

  describe('FETCH_NOTIFICATIONS_SUCCESS', () => {
    it('should add notifications with isRead: false', () => {
      const expectedState = {
        filter: 'DEFAULT',
        notifications: sampleNotifications.map(notification => ({
          ...notification,
          isRead: false,
        })),
      };

      expect(notificationReducer(defaultState, fetchNotificationsSuccess(sampleNotifications))).toEqual(expectedState);
    });
  });
});
