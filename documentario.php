<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./src/assets/css/main.css" />
    <link rel="stylesheet" href="./src/assets/css/pages/homepage.css" />

    <link rel="preload" href="https://preprod.containermedia.com.br/passaporte-prime/src/assets/images/bg-passaporte-prime-01.webp" as="image/webp" />
    <link rel="preload" href="https://preprod.containermedia.com.br/passaporte-prime/src/assets/images/bg-passaporte-prime-02.webp" as="image/webp" />

    <title>Festival Passaporte Prime</title>
</head>

<body>
    <? include("./src/components/header/header.php") ?>

    <main>
        <? include("./src/components/carousel-fullwidth/fullwidth.php") ?>
        <? include("./src/components/sinopse/sinopse-documentario.php") ?>
        <? include("./src/components/xtra/xtra-documentario.php") ?>
        <? include("./src/components/gallery/gallery-documentario.php") ?>
        <? include("./src/components/channels/channels.php") ?>
        <? include("./src/components/cmg/cmg-documentario.php") ?>
    </main>

    <? include("./src/components/footer/footer.php") ?>

    <script src="./src/assets/js/app.js"></script>
</body>

</html>