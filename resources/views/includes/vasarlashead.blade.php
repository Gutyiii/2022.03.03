<!DOCTYPE html>
<html lang="hu-HU">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Free Web tutorials">
        <meta name="keywords" content="HTML, CSS, JavaScript">
        <meta name="author" content="John Doe">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
        <!-- jQuery library -->
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
        <!-- Popper JS -->
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <!-- Latest compiled JavaScript -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Piktogramm libary -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- JS Jquery libary -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <!-- Az oldlahoz tartozó css -->
        <style>
            @charset "utf-8";
            main {display: grid;grid-template-areas: "c c c c c c""h h h h h h""n n n n n n""a a a a a a""f f f f f f";font-size: 19px;}
            nav ul{display: grid;grid-template-columns: 250px 220px 350px 300px;margin-left: 400px;}
            article {grid-area: a;display: grid;grid-template-columns: 1fr 1fr 1fr;margin: auto;margin-top: 60px;margin-bottom: 60px;}
            .berlet {position: relative;width: 100%;}
            .image {display: block;width: 100%;height: auto;}
            .rahuzas {position: absolute;bottom: 0;left: 0;right: 0;background-color: gray;overflow: hidden;width: 0;height: 100%;transition: .5s ease;opacity: 80%;}
            .berlet:hover .rahuzas {width: 100%;}
            .szoveg{white-space: nowrap;color: white;font-size: 20px;position: absolute;overflow: hidden;top: 50%;left: 50%;transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);font-size: 80px;font-weight: 600;}
        </style>
        <link rel="stylesheet" href="../css/body.css">
        <!-- Title -->
        <title>Vásárlás</title>
</head>