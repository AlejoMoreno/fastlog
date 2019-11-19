<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RutasController extends Controller
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
        $rutas = new rutas();
        //Se asignan valores a cada uno de los atributos del objeto
        $rutas->id_remision = $request->id_remision;
        $rutas->asignador = $request->asignador;
        $rutas->transportador = $request->transportador;
        $rutas->longitud = $request->longitud;
        $rutas->latitud = $request->latitud;
        $rutas->abierta = $request->abierta;
        $rutas->lugar = $request->lugar;
        //se llama a la funcion save para guardar en la base de datos dicho objeto
        //se evalua si fue correcto o incorrecto
        if($rutas->save()){
            //se retorna la informacion que sea necesaria
            return array([
                "respuesta"=>true,
                "body"=>$rutas
            ]);
        }
        else{
            //se retorna la informacion que sea necesaria
            return array([
                "respuesta"=>false,
                "body"=>"Error en guardar"
            ]);
        }
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }


    public function showAll(Request $request)
    {
        //se instancia una lista de clinicas donde en sql buscara todas sin importar condicion
        $rutas = rutas::all();
        //se verifica si la lista esta llena
        if(sizeOf($rutas)>0){
            //se retorna la informacion que sea necesaria
            return array([
                "respuesta"=>true,
                "body"=>$rutas
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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //se instancia una lista de objetos devueltos por la base de datos donde se busca id = $id
        $rutas = rutas::where('id','=',$id)->get();
        //se verifica que la lista este llena
        if(sizeOf($rutas)>0){
            //se retorna la informacion que sea necesaria
            return array([
                "respuesta"=>true,
                "body"=>$rutas
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
        //
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
      $rutas = rutas::where('id','=',$request->id)->fisrt();
      //Se asignan valores a cada uno de los atributos del objeto
      $rutas->id_remision = $request->id_remision;
        $rutas->asignador = $request->asignador;
        $rutas->transportador = $request->transportador;
        $rutas->longitud = $request->longitud;
        $rutas->latitud = $request->latitud;
        $rutas->abierta = $request->abierta;
        $rutas->lugar = $request->lugar;
      //se evalua si fue correcto o incorrecto
      if($rutas->save()){
          //se retorna la informacion que sea necesaria
          return array([
              "respuesta"=>true,
              "body"=>$rutas
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
         $rutas = rutas::where('id','=',$id)->fisrt();
         //se verifica que se elimine correctamente
         if($rutas->delete()){
             return array([
                 "respuesta"=>true,
                 "body"=>$rutas
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
}
