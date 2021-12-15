<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }
    public function userList()
    {

      
        return response()->json(User::orderby('id','desc')->get());
    }
    public function addUser(Request $request)
    {

        $id= User::insertGetId([
           'name'=>$request->name,
           'email'=>$request->email,
           'password'=>$request->password,
       ]);
       
    return   response()->json(User::where('id',$id)->first());
    }
    public function deleteUser($id)
    {

     User::where('id',$id)->delete();
       
    
    }
}
