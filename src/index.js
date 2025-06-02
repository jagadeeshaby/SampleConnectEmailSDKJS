import { EmailClient } from '@amazon-connect/email';
import { FileClient } from '@amazon-connect/file';
import { MessageTemplateClient } from '@amazon-connect/message-template';
import { QuickResponsesClient } from '@amazon-connect/quick-responses';

connect = connect || {};
connect.SDK = connect.SDK || {};
connect.SDK.EmailClient = EmailClient;
connect.SDK.FileClient = FileClient;
connect.SDK.TemplateClient = MessageTemplateClient;
connect.SDK.QuickResponsesClient = QuickResponsesClient;