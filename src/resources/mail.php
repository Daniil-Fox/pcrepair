<?php
// Multiple recipients
$to = 'foxones80@gmail.com'; // note the comma

$typeDevice = $_POST['radio-type'];
$problem = $_POST['radio-prob'];
$brand = $_POST['input-brand-pc'];
$time = $_POST['input-time-pc'];
$contact = $_POST['radio-contact'];
$tel = $_POST['input-contact-tel'];

// Subject
$subject = 'Заявка для звонка';
// Message
$message = '
<html>
<head>
  <title>Заявка</title>
</head>
<body>
  <h2>Данные от клиента</h2>
  <p>Тип устройства: <b>' . $typeDevice . '</b> </p>
  <p>Проблема: <b>' . $problem . '</b> </p>
  <p>Бренд: <b>' . $brand . '</b> </p>
  <p>Срок эксплуатации: <b>' . $time . '</b> </p>
  <p>Способ связи: <b>' . $contact . '</b> </p>
  <p>Номер телефона: <b>' . $tel . '</b> </p>
</body>
</html>
';

// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';

// Additional headers
$headers[] = 'To: vertuvirzi@gufum.com';
$headers[] = 'From: ';

// Mail it
mail($to, $subject, $message, implode("\r\n", $headers));




/* https://api.telegram.org/bot6805662095:AAHMAInEy9lVRTo6gOf6bBT60lN1lRYDZho/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */


// $token = "";
// $chat_id = "";
// $arr = array(
//   'Имя пользователя: ' => $name,
//   'Телефон: ' => $phone,
//   'Email' => $email
// );

// foreach($arr as $key => $value) {
//   $txt .= "<b>".$key."</b> ".$value."%0A";
// };

// $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//   header('Location: thank-you.html');
// } else {
//   echo "Error";
// }
?>
