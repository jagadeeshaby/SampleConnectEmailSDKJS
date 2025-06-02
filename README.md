# sampleConnectEmailSDK

Sample Example of consuming the SDK.

```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Client</title>

    <style>
        #email-app{
            height: 400px;
        }
    </style>
</head>
<body>
    <div id="email-app"></div>

    <!-- Load the email.js script from dist directory -->
    <script src="email.js"></script>

    <script>
        connect.core.initCCP(document.getElementById("email-app"), {
            ccpUrl: "<<instance URL>>",
            loginPopup: true,
        });

         // Get the client config needed to instantiate clients from the AmazonConnectSDK
        const connectClientConfig = connect.core.getSDKClientConfig();

        // You can now instantiate the clients that you need. Be sure to import them from their respective packages!
        const emailClient = new connect.SDK.EmailClient(connectClientConfig);


        // Sample outbound email creation example 
        const contact = emailClient.createDraftEmail({
             initiationMethod: "OUTBOUND",
        });

    </script>

</body>
</html>


```
