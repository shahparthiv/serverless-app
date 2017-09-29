function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2;  // First row of data to process
  var numRows = 1;   // Number of rows to process
  // Fetch the range of cells A2:B3
  var dataRange = sheet.getRange(startRow, 1, numRows, 2)
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (i in data) {
    var row = data[i];
    var emailAddress = row[0];  // First column
    var message = row[1];       // Second column
    var subject = "Sending emails from a Spreadsheet";
    var dob = row[3];
    // Now write the logic to check birthday and today's date is same.
    // if it is same send the email.
    
    // Also schedule this script to run every day.
    // for that go to current project's trigger.
    MailApp.sendEmail(emailAddress, subject, message);
  }
}