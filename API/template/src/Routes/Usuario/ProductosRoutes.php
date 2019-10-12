<?php
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use \Slim\App;
use Controllers\ProductosController;
return function(App $app)
{
  $app->group('/Productos', function()
  {
    $this->get('/', ProductosController::class . ':traerTodos'); 
    $this->get('/{id}', ProductosController::class . ':traerPorId');
    $this->post('/', ProductosController::class . ':Create');
    $this->post('/{id}', ProductosController::class . ':Update');
    $this->delete('/{id}', ProductosController::class . ':Delete');
  });
};
?>