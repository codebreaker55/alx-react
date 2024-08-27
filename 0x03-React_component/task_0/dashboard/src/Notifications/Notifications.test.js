import React from 'react';
import { shallow } from 'enzyme';
import { getLatestNotification } from '../utils/utils';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: getLatestNotification() },
];

describe('Notification tests', () => {
  it('renders Notification component without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toBeDefined();
  });

  it('renders correct list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    
    expect(wrapper.find('ul').children()).toHaveLength(listNotifications.length);

    listNotifications.forEach((notification, index) => {
      expect(wrapper.find('ul').childAt(index).containsMatchingElement(
        <NotificationItem
          key={notification.id}
          type={notification.type}
          value={notification.value}
          html={notification.html}
        />
      )).toBe(true);
    });
  });

  it('renders an unordered list', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find('ul')).toHaveLength(1);
  });

  it('renders correct text when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBe(true);
    expect(wrapper.containsMatchingElement(<NotificationItem value="No new notification for now" />)).toBe(true);
  });

  it('displays menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.menuItem').exists()).toBe(true);
    expect(wrapper.find('div.menuItem').html()).toContain('<p>Your notifications</p>');
  });

  it('does not display Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications').exists()).toBe(false);
  });

  it('displays Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.Notifications').exists()).toBe(true);
  });
});
