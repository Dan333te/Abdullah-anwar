<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["formName"];
    $email = $_POST["formEmail"];
    $message = $_POST["formMessage"];
    $errors = array();

    // Validate name
    if (empty($name)) {
        $errors[] = "Name is required.";
    }

    // Validate email
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email address.";
    }

    // Validate message
    if (empty($message)) {
        $errors[] = "Message is required.";
    }

    if (empty($errors)) {
        // If there are no validation errors, you can process the form data here
        // For example, send an email, save data to a database, or perform other actions
        echo "Form submitted successfully!";
    } else {
        // If there are validation errors, display them to the user
        foreach ($errors as $error) {
            echo $error . "<br>";
        }
    }
}
?>




