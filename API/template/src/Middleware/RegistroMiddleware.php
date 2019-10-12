<?php
use Models\TokenValidatorMiddleware;
namespace Middleware;
use Models\RegistroOperacion;

class RegistroMiddleware
{
  public static function guardarOperacion($request, $response, $next)
  {
     $data = TokenValidatorMiddleware::GetTokenData($request);
     if(!is_null($data))
     {
      $operacion=$_SERVER["REQUEST_URI"];
      $registro=new RegistroOperacion();
      $registro->fecha=date("d-m-Y");
      $registro->hora= date("h-i-sa");
      $registro->idUsuario=$data->id;
      $registro->operacion= $operacion;
      $registro->save();
     }
    return $next($request, $response);
  }
}
