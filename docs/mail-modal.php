<?php
// Multiple recipients
$to = 'foxones80@gmail.com'; // note the comma

$name = $_POST['modal-name'];
$tel = $_POST['modal-tel'];


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
  <p>Имя клиента: <b>' . $name . '</b> </p>
  <p>Телефон: <b>' . $tel . '</b> </p>
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




/* https://api.telegram.org/bot6818426599:AAHB4feOkHZ4zzy1Q_Dr9gQ2yMQI22V02lk/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */


// $token = "6818426599:AAHB4feOkHZ4zzy1Q_Dr9gQ2yMQI22V02lk";
// $chat_id = "-4004191201";


// foreach($arr as $key => $value) {
//   $txt .= "<b>".$key."</b> ".$value."%0A";
// };

// $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$message}","r");

// if ($sendToTelegram) {
//   header('Location: thank-you.html');
// } else {
//   echo "Error";
// }
?>
