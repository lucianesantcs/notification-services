import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  findById(notificationId: string): Promise<Notification> {
    throw new Error('Method not implemented.');
  }
  save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
