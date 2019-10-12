<?php
namespace Models;
use Illuminate\Database\Eloquent\Model;
use Helpers\AppConfig as Config;
use Illuminate\Database\Capsule\Manager as Capsule;
class Productos extends Model
{
  protected $table = "productos";
  public $timestamps = false;
  
  public static function LastInsertId()
  {
      return Productos::select("id")->orderBy("id", "desc")->first()->id;
  }
  public static function FindByDescription($description)
  {
     return Productos::where("descripcion", $description)->first();
  }
}
?>