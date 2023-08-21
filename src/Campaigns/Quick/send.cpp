  CURL *hnd = curl_easy_init();

  curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "POST");
  curl_easy_setopt(hnd, CURLOPT_URL, "https://sms.velstack.com/api/quick/sms");

  struct curl_slist *headers = NULL;
  headers = curl_slist_append(headers, "accept: application/json");
  headers = curl_slist_append(headers, "Authorization: Bearer API_KEY")
  curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);

  curl_easy_setopt(hnd, CURLOPT_POSTFIELDS,
      "title=string&information&sender_id=string&velstack&message=string&message_content&recipient=string&0205550368");

  CURLcode ret = curl_easy_perform(hnd);