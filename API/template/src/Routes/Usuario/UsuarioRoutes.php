<?php

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use \Slim\App;
use Controllers\UsuariosController;
return function(App $app)
{
  $app->group('/Usuario', function()
  {
    $this->get('/', UsuariosController::class . ':traerTodos'); 
    $this->get('/{id}', UsuariosController::class . ':traerPorId');
    $this->post('/', UsuariosController::class . ':Create');
    $this->post('/{id}', UsuariosController::class . ':Update');
    $this->delete('/{id}', UsuariosController::class . ':Delete');
  });//->add(AuthMiddleware::class.':IsLoggedIn')
    //-/>add(RoleMiddleware::class.':IsAdmin');
    // ->add(RegistroMiddleware::class . ':guardarOperacion'); 
  
};
