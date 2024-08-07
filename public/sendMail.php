<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $direction = htmlspecialchars(trim($_POST['direction']));
    $message = htmlspecialchars(trim($_POST['message']));
    $preferredContact = htmlspecialchars(trim($_POST['preferredContact']));

    if (empty($name) || empty($phone) || empty($direction)) {
        echo json_encode(['status' => 'error', 'message' => 'Все поля обязательны для заполнения.']);
        exit;
    } else {
        $to = "s1digital@ya.ru";
        $subject = "Новая заявка";
        $body = "Имя: $name\nТелефон: $phone\nИнтересующие услуги: $direction\nСообщение: $message\nПредпочтительный способ связи: $preferredContact";
        $headers = "From: s1digital@ya.ru\r\n";
        $headers .= "Reply-To: s1digital@ya.ru\r\n";
        $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

        if (mail($to, $subject, $body, $headers)) {
            echo json_encode(['status' => 'success', 'message' => 'Сообщение успешно отправлено.']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Ошибка при отправке сообщения.']);
        }
        exit;
    }
}
?>
