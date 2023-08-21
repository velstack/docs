<?php



$url = "https://sms.velstack.com/api/contact";

  $data = [
      "group_id" => "62469a27-2a25-4e22-b324-bce482d54a26",
      "first_name" => "sammy",
      "last_name" => "fort",
      "phone_number" => "0205550368",
      "email_address" => "example@example.com"

  ];

  $fields_string = http_build_query($data);

  //open connection
  $ch = curl_init();

  //set the url, number of POST vars, POST data
  curl_setopt($ch,CURLOPT_URL, $url);
  curl_setopt($ch,CURLOPT_POST, true);
  curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
      "Authorization: Bearer API_KEY",
      "Accept: application/json",
  ));

  //So that curl_exec returns the contents of the cURL; rather than echoing it
  curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);

  //execute post
  $result = curl_exec($ch);
  return $result;


