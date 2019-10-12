<?php

namespace Controllers;

use Models\User;
use Helpers\JWTAuth;
use Helpers\AppConfig as Config;
use Helpers\FilesHelper as Files;
use Helpers\ImagesHelper as Images;

use Controllers\MozosController;
use Illuminate\Database\Capsule\Manager as Capsule;

class UsuariosController
{
  public static function traerTodos($request, $response, $args)
  {
    return json_encode(User::all());  
  }
  public static function traerPorId($request, $response, $args)
  {
    $id = $request->getAttributes()["id"];
    $usuario = User::find($id);
    if($usuario)
    {
      $responseObj = ["message" => "usuario encontrado", "usuario" => $usuario];
      //return $response->withJson(json_encode($responseObj), 200);
      return json_encode($usuario);  
    }
    else
    {
      $responseObj = ["message" => "usuario no encontrada"];
      return $response->withJson(json_encode($responseObj), 401);
    }
  }

  public static function Create($request, $response, $args)
  {
    $data = $request->getParsedBody(); 

    $usuario = new User;
    $usuario->name = $data["name"];
    $usuario->lastName = $data["lastName"];
    $usuario->email = $data["email"];
    $usuario->password = $data["password"];
    $usuario->age = $data["age"];
    $usuario->image = $data["image"];
    $usuario->save();

    $responseObj = ["message" => "usuario creado", "usuario" => $usuario];
    return $response->withJson(json_encode($usuario), 200);
  }

  public static function Update($request, $response, $args)
  {
    $data = $request->getParsedBody();
    $usuario = User::find($args["id"]);
    if(!$usuario)
    {
      return $response->withJson("usuario inexistente", 200);
    }
    $usuario->name = $data["name"];
    $usuario->lastName = $data["lastName"];
    $usuario->email = $data["email"];
    $usuario->password = $data["password"];
    $usuario->age = $data["age"];
    $usuario->image = $data["image"];
    $usuario->save();

    return $response->withJson("usuario actualizado", 200);
  }

  public static function Delete($request, $response, $args)
  {
    if(!isset($args["id"]))
    {
      return $response->withJson("debe especificar id", 400);
    }
    $usuario = User::find($args["id"]);
    if(!$usuario)
    {
      return $response->withJson("usuario inexistente", 200);
    }
    $usuario->delete();
    return $response->withJson("usuario eliminado");
  }
}