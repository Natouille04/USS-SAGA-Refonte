<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    <!-- Styles / Scripts -->
    @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    @endif
</head>

<body class="bg-black p-1">
    <div class="lcars-row">
        <div class="lcars-elbow left-bottom lcars-chestnut-rose-bg"></div>
        <div class="space"></div>
        <div class="lcars-bar horizontal lcars-orange-peel-bg"></div>
        <div class="space"></div>
    </div>

    <div class="lcars-column">
        <div class="lcars-bar lcars-u-1 lcars-vu-15 lcars-chestnut-rose-bg"></div>
    </div>

        <audio id="audDummy"></audio>
</body>

</html>