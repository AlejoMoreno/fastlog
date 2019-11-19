<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GpsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
       //Se crea la instancia del objeto clinicas
       $gps = new gps();
       //Se asignan valores a cada uno de los atributos del objeto
       $gps->codigo_barras = $request->codigo_barras;
       $gps->proveedor = $request->proveedor;
       $gps->identificador = $request->identificador;
       $gps->celular_proveedor = $request->celular_proveedor;
       //se llama a la funcion save para guardar en la base de datos dicho objeto
       //se evalua si fue correcto o incorrecto
       if($gps->save()){
           //se retorna la informacion que sea necesaria
           return array([
               "respuesta"=>true,
               "body"=>$gps
           ]);
       }
       else{
           //se retorna la informacion que sea necesaria
           return array([
               "respuesta"=>false,
               "body"=>"Error en guardar"
           ]);
       }        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showAll($id)
    {
          //se instancia una lista de clinicas donde en sql buscara todas sin importar condicion
        $gps = gps::all();
        //se verifica si la lista esta llena
        if(sizeOf($gps)>0){
            //se retorna la informacion que sea necesaria
            return array([
                "respuesta"=>true,
                "body"=>$gps
            ]);
        }
        else{
            //se retorna la informacion que sea necesaria
            return array([
                "respuesta"=>false,
                "body"=>"No existen resultados para la busqueda"
            ]);
        }
    }


    public function show($id)
    {
        //se instancia una lista de objetos devueltos por la base de datos donde se busca id = $id
        $gps = gps::where('id','=',$id)->get();
        //se verifica que la lista este llena
        if(sizeOf($gps)>0){
            //se retorna la informacion que sea necesaria
            return array([
                "respuesta"=>true,
                "body"=>$gps
            ]);
        }
        else{
            //se retorna la informacion que sea necesaria
            return array([
                "respuesta"=>false,
                "body"=>"No existen resultados para la busqueda"
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
      
        

       }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
           //se instancia un objeto devuelto por la base de datos donde se busca id = $id
           $gps = gps::where('id','=',$request->id)->fisrt();
           //Se asignan valores a cada uno de los atributos del objeto
           $gps->codigo_barras = $request->codigo_barras;
           $gps->proveedor = $request->proveedor;
           $gps->identificador = $request->identificador;
           $gps->celular_proveedor = $request->celular_proveedor;
           //se evalua si fue correcto o incorrecto
           if($gps->save()){
               //se retorna la informacion que sea necesaria
               return array([
                   "respuesta"=>true,
                   "body"=>$clinica
               ]);
           }
           else{
               //se retorna la informacion que sea necesaria
               return array([
                   "respuesta"=>false,
                   "body"=>"Error en actualizar"
               ]);
           } 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      //se instancia un objeto devuelto por la base de datos donde se busca id = $id
      $gps = gps::where('id','=',$id)->fisrt();
      //se verifica que se elimine correctamente
      if($gps->delete()){
          return array([
              "respuesta"=>true,
              "body"=>$gps
          ]);
      }
      else{
          //se retorna la informacion que sea necesaria
          return array([
              "respuesta"=>false,
              "body"=>"Error no se pudo realizar la eliminación"
          ]);
      }

    }

    public function registergps(Request $request)
    {
       
    
    }


    
}
