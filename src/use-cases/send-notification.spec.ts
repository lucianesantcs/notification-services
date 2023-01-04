import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'Nova solicitação de amizade.',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
