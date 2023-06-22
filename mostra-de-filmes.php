<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./src/assets/css/main.css" />
    <link rel="stylesheet" href="./src/assets/css/pages/homepage-institucional.css" />
    <link rel="stylesheet" href="./src/assets/css/pages/mostra-filmes.css" />

    <title>Mostra de Filmes do Japão</title>
</head>

<body>

    <? include("./src/components/header/header.php") ?>

    <main>
        <? include("./src/components/carousel-fullitem/full-item-mostra.php") ?>
        <? include("./src/components/about-custom/about-custom.php") ?>
        <? include("./src/components/acervo/acervo-mostra.php") ?>
        <? include("./src/components/carousel-fullwidth/fullwidth-mostra.php") ?>
        <? include("./src/components/description/description.php") ?>
        <? include("./src/components/channels/channels.php") ?>
        <? include("./src/components/cmg/cmg-mostra.php") ?>
    </main>

    <? include("./src/components/footer/footer.php") ?>

    <script src="./src/assets/js/app.js"></script>
</body>

</html>