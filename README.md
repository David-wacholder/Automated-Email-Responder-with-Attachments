# 📧 Automated Email Responder with Attachments 🚀

Welcome to **Automated Email Responder**, the ultimate tool for anyone tired of manually responding to emails with attachments! This Google Apps Script automatically replies to emails labeled with a specific tag and sends them a personalized response with all the necessary files attached. 🎉

## 🌟 Features
- Automatically replies to emails with a custom message 🤖
- Sends files from Google Drive as attachments 📎
- Removes the label after sending the email ✨
- Customizable label name, email body, and file list 🔧

## 🚀 How to Get Started

1. **Create a New Google Apps Script Project** 🛠️  
   Simply copy the code into a new project.  
   ([How to create an Apps Script project](https://developers.google.com/apps-script/guides/projects))

2. **Set Up a Gmail Label** 🏷️  
   Create a Gmail label named `Automatic reply will be sent shortly`.  
   Or change the label name in the code to whatever you like! 🔄

3. **Customize the Code** ✏️  
   - Update the `fileIds` array to include the IDs of the files you want to attach from Google Drive. 📂
   - Change the `htmlBody` to send your own custom message. 📝
   - Modify the label name if needed. 🏷️

4. **Set Up a Time-Based Trigger** ⏰  
   Go to **Triggers** in Apps Script and create a time-based trigger to run the `sendFormattedEmail` function.  
   We recommend setting it to run every 1 minute for real-time responses! ⚡

## 🛠️ Customization Options
- **Attachments:** Add as many Google Drive file IDs as you'd like in the `fileIds` array. 📂
- **Email Body:** Modify the `htmlBody` with your own text, style, and format. Feel free to get creative! 🎨
- **Label Name:** Change the `labelName` variable to match your preferred Gmail label name. 🏷️

## 📦 Installation

1. Create a new Google Apps Script project and paste in the code.
2. Create a Gmail label named `Automatic reply will be sent shortly` (or update the name in the script).
3. Set up a time-based trigger to run every minute for the `sendFormattedEmail` function.
4. **Set Up a Gmail Filter** 🎯  
   To make sure only the emails you want are labeled, create a Gmail filter that automatically applies the label to specific emails.  

   For example, you can filter emails with the subject line "Booking Request" and apply the label `Automatic reply will be sent shortly`.  

   **How to create a filter:**  
   - In Gmail, click on the search bar dropdown. 🔍  
   - Enter your filter criteria, like "Subject: Booking Request". 📝  
   - Click "Create filter" and choose "Apply the label" → `Automatic reply will be sent shortly`. 🏷️  
   - Save it! 💾

   Now, only the emails that match your filter will be handled by the script! 🎯


## ⚡ Pro Tip
The script automatically removes the Gmail label after replying, so you can let it run continuously without worrying about sending multiple replies to the same email! 🏆

---

Happy automating! 🎉

<sub><sup>⚙️ This content was generated with the assistance of Gen AI.</sup></sub>
