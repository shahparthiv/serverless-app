# serverless-app

Serverless architectures refer to applications that significantly depend on third-party services (knows as Backend as a Service or "BaaS") or on custom code that's run in ephemeral containers (Function as a Service or "FaaS").

 
Depending on the circumstances, such systems can significantly reduce operational cost and complexity at a cost of vendor dependencies and (at the moment) immaturity of supporting services.



So manily in serverless application we are not deploying our application on any server.
We can use any thirdparty things to make our application.

So for example today I am making the birthday whisher application.
In this tutorial I will use Google sheet and Google app script.

Google Sheet :  for making the sheet to add friend's email address and his birthday.
Google App script  : to send them beautiful messages on their birthday automatically.

And then schedule this sheet for every day . So it will get the data from sheet check if there is any one whose birthday is today ?
If yes then send them email.

Please check the committed excel sheet copy it in your google sheet.
You can also make yours.

In google excel sheet select tools > script editor
It will open the new screen. Here you can write given script.

After writing the script click on the clock button and scheduled this script to run every day.