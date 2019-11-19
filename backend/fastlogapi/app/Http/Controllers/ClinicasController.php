<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

//importar el Modelo de Clinicas (este es el que permite tener el control con la base de datos)
use App\Clinicas;

class ClinicasController extends Controller
{

    /**
     * Crear las clinicas
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //Se crea la instancia del objeto clinicas
        $clinica = new Clinicas();
        //Se asignan valores a cada uno de los atributos del objeto
        $clinica->nombre = $request->nombre;
        $clinica->cedula = $request->cedula;
        $clinica->direccion = $request->direccion;
        $clinica->administrador = $request->administrador;
        //se llama a la funcion save para guardar en la base de datos dicho objeto
        //se evalua si fue correcto o incorrecto
        if($clinica->save()){
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
    public function showAll(Request $request)
    {
        //se instancia una lista de clinicas donde en sql buscara todas sin importar condicion
        $clinicas = Clinicas::all();
        //se verifica si la lista esta llena
        if(sizeOf($clinicas)>0){
            //se retorna la informacion que sea necesaria
            return array([
                "respuesta"=>true,
                "body"=>$clinicas
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
        $clinicas = Clinicas::where('id','=',$id)->get();
        //se verifica que la lista este llena
        if(sizeOf($clinicas)>0){
            //se retorna la informacion que sea necesaria
            return array([
                "respuesta"=>true,
                "body"=>$clinicas
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //se instancia un objeto devuelto por la base de datos donde se busca id = $id
        $clinica = Clinicas::where('id','=',$request->id)->fisrt();
        //Se asignan valores a cada uno de los atributos del objeto
        $clinica->nombre = $request->nombre;
        $clinica->cedula = $request->cedula;
        $clinica->direccion = $request->direccion;
        $clinica->administrador = $request->administrador;
        //se evalua si fue correcto o incorrecto
        if($clinica->save()){
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
        $clinica = Clinicas::where('id','=',$id)->fisrt();
        //se verifica que se elimine correctamente
        if($clinica->delete()){
            return array([
                "respuesta"=>true,
                "body"=>$clinicas
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

    public function registerclinicas(Request $request)
    {
        return array([
            "resultado"=>"true",
            "body" => $request->dato
        ]);
    }

}
