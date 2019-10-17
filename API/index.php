<?php

use Illuminate\Database\Capsule\Manager as Capsule;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Helpers\AppConfig;

require __DIR__.'/vendor/autoload.php';

$config = ['settings' => ['displayErrorDetails' => true]];

$app = new \Slim\App($config);


$capsule = new Capsule;
$capsule->addConnection(AppConfig::$illuminateDb);
$capsule->setAsGlobal();
$capsule->bootEloquent();

$alimentosRoutes = require __DIR__.'/src/Routes/AlimentoRoutes.php';
$alimentosRoutes($app);

$consultasRoutes = require __DIR__.'/src/Routes/ConsultasRoutes.php';
$consultasRoutes($app);

$empleadosRoutes = require __DIR__.'/src/Routes/EmpleadosRoutes.php';
$empleadosRoutes($app);

$loginRoute = require __DIR__.'/src/Routes/LoginRoutes.php';
$loginRoute($app);

$logueosRoutes = require __DIR__.'/src/Routes/LogueoRoutes.php';
$logueosRoutes($app);

$menuroutes = require __DIR__.'/src/Routes/MenuRoutes.php';
$menuroutes($app);

$mesaRoutes = require __DIR__.'/src/Routes/MesaRoutes.php';
$mesaRoutes($app);

$pedidoRoutes = require __DIR__.'/src/Routes/PedidoRoutes.php';
$pedidoRoutes($app);

$rateRoutes = require __DIR__.'/src/Routes/RateRoutes.php';
$rateRoutes($app);


$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
             ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
             ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

$app->run();
