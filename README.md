# sampleConnectEmailSDK

Sample Example of consuming the SDK.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Client</title>

    <style>
        #email-app {
            height: 400px;
        }
    </style>
</head>

<body>
    <div id="email-app"></div>

   
    <!-- Load the connect-streams.js script, below for reference we loading it from npm link -->
    <script src="https://unpkg.com/amazon-connect-streams@2.18.4/release/connect-streams.js"></script>
     <!-- Load the email.js script from dist directory -->
    <script src="email.js"></script>

    <script>

        let emailClient;
        function getEmailClient() {
            // Get the client config needed to instantiate clients from the AmazonConnectSDK
            const connectClientConfig = connect.core.getSDKClientConfig();

            if (!emailClient) {
                emailClient = new connect.SDK.EmailClient(connectClientConfig);
            }

            return emailClient;
        }

        function createOutboundEmail() {
            const contact = getEmailClient().createDraftEmail({
                initiationMethod: "OUTBOUND",
            });
        }

    </script>

    <script>
        connect.core.initCCP(document.getElementById("email-app"), {
            ccpUrl: "https://jagadeey-yul-lima.my.connect.aws/ccp-v2",
            loginPopup: true,
        });


        createOutboundEmail();

    </script>

</body>

</html>

```
