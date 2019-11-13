<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class remisionesproductos extends Model
{
    protected $fillable = ['id_remision','id_producto','id_estado'];
}
