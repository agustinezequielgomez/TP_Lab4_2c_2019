<?php

namespace Middleware;

class RoleMiddleware extends TokenValidatorMiddleware
{
  public static function IsAdminOrHigher($request, $response, $next)
  {
    $data = parent::GetTokenData($request);

    if(is_null($data))
      return $response->withJson("no tiene los permisos necesarios para acceder aqui, isadminorhigher", 403);

    if(strtolower($data->role != "admin") && strtolower($data->role != "socio"))
    {
      return $response->withJson("no tiene los permisos necesarios para acceder aqui, isadminorhigher", 403);
    }

    return $next($request, $response);
  }
  public static function esMozo($request, $response, $next)
  {
     $data = parent::GetTokenData($request);
     if(is_null($data))
      return $response->withJson("Disculpe, solo los Mozos y Administradores tienen acceso a esta funcion", 403);

      if(strtolower($data->role) != "mozo" && strtolower($data->role) != "admin")
      {
        return $response->withJson("Disculpe, solo los Mozos y Administradores tienen acceso a esta funcion", 403);
      }
    return $next($request, $response);
  }
  public static function esCocinero($request, $response, $next)
  {
     $data = parent::GetTokenData($request);
     if(is_null($data))
      return $response->withJson("Disculpe, solo los Cocineros y Administradores tienen acceso a esta funcion", 403);

      if(strtolower($data->role) != "cocinero" && strtolower($data->role) != "admin")
      {
        return $response->withJson("Disculpe, solo los Cocineros y Administradores tienen acceso a esta funcion", 403);
      }
    return $next($request, $response);
  }
  public static function esCervecero($request, $response, $next)
  {
     $data = parent::GetTokenData($request);
     if(is_null($data))
      return $response->withJson("Disculpe, solo los Cerveceros y Administradores tienen acceso a esta funcion", 403);

      if(strtolower($data->role) != "cervecero" && strtolower($data->role) != "admin")
      {
        return $response->withJson("Disculpe, solo los Cerveceros y Administradores tienen acceso a esta funcion", 403);
      }
    return $next($request, $response);
  }
  public static function esBartender($request, $response, $next)
  {
     $data = parent::GetTokenData($request);
     if(is_null($data))
      return $response->withJson("Disculpe, solo los Bartender y Administradores tienen acceso a esta funcion", 403);

      if(strtolower($data->role) != "bartender" && strtolower($data->role) != "admin")
      {
        return $response->withJson("Disculpe, solo los Bartender y Administradores tienen acceso a esta funcion", 403);
      }
    return $next($request, $response);
  }
  public static function IsAdmin($request, $response, $next)
  {
    $data = parent::GetTokenData($request);

     if(is_null($data))
        return $response->withJson("no tiene los permisos necesarios para acceder aqui, solo Socios", 403);

      if(strtolower($data->role) != "admin")
      {
        return $response->withJson("no tiene los permisos necesarios para acceder aqui, solo Socios", 403);
      }
    return $next($request, $response);
  }

}
