

AsyncHttpClient client = new DefaultAsyncHttpClient();
 client.prepare("POST", "https://sms.velstack.com/api/messaging/quick/sms")
  .setHeader("accept", "application/json")
  .setHeader("Authorization", "Bearer API_KEY")
  .setBody("title", "Information")
    .setBody("sender", "velstack")
    .setBody("recipient", "0205550368")
    .setBody("message", "The message content")
  .execute()
  .toCompletableFuture()
  .thenAccept(System.out::println)
  .join();

 client.close();