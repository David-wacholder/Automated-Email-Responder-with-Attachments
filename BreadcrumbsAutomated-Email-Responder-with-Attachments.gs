function sendFormattedEmail() {
  // Define label and file IDs
  var labelName = 'Automatic reply will be sent shortly';
  var fileIds = ['1WcmJi1gPhwKjfs_AeIV3TP3aADoYyZmx', '1MJsgiOO_RADyi5ymY4lR4ezxszrioIAu', '1MMMWnin5eIHNRtj6IUYz5cH0KW8bh1zR'];

  // Get all emails marked with the label
  var label = GmailApp.getUserLabelByName(labelName);
  var threads = label.getThreads();

  // Iterate over all threads
  for (var i = 0; i < threads.length; i++) {
    var thread = threads[i];
    var message = thread.getMessages()[0]; // Assume reply will be to the first message in the thread

    // Prepare email body (HTML)
    var htmlBody = '<p style="text-align: right; font-size: 16px;">Hello!<br />Here are details and pictures.<br />(: We would be happy to host you!<br />Example name</p>';

    // Prepare attachments
    var attachments = [];

    // Add all files in the correct order
    for (var j = 0; j < fileIds.length; j++) {
      var file = DriveApp.getFileById(fileIds[j]);
      attachments.push(file);
    }

    // Send the reply with sender name
    try {
      message.reply(htmlBody, {
        name: 'Village Hosting',
        htmlBody: htmlBody,
        attachments: attachments
      });
      thread.removeLabel(label);  // Remove the label from the thread after sending the email
      Logger.log("Label removed successfully.");
    } catch (error) {
      Logger.log("Error removing the label: " + error);
    }
  }
}
