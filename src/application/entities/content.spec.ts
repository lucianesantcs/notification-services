import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content(
      'Você recebeu uma nova solicitação de amizade.',
    );

    expect(content).toBeTruthy();
  });

  it('should not be able to create a content with less than 5 characters', () => {
    expect(() => new Content('três')).toThrow();
  });

  it('should not be able to create a content with more than 240 characters', () => {
    expect(() => new Content('241'.repeat(241))).toThrow();
  });
});
