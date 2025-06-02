import { EmailClient } from '@amazon-connect/email';
import { FileClient } from '@amazon-connect/file';
import { MessageTemplateClient } from '@amazon-connect/message-template';
import { QuickResponsesClient } from '@amazon-connect/quick-responses';

connect = connect || {};
connect.SDK = connect.SDK || {};
connect.SDK.EmailClient = connect.SDK.EmailClient || EmailClient;
connect.SDK.FileClient = connect.SDK.FileClient || FileClient;
connect.SDK.MessageTemplateClient = connect.SDK.MessageTemplateClient || MessageTemplateClient;
connect.SDK.QuickResponsesClient = connect.SDK.QuickResponsesClient || QuickResponsesClient;