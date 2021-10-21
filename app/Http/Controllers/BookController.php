<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index(){
    	return Book::all();
    }
    public function store(Request $request){
    	$data = Book::create([
    		'judul'=>$request->judul,
    		'jumlah'=>$request->jumlah
    	]);
    	return $data;
    }
    public function Update(Request $request, $id){
    	$data = Book::findOrFail($id)->update([
    		'judul'=>$request->judul,
    		'jumlah'=>$request->jumlah
    	]);
    	return $data;
    }
    public function destroy($id){
    	Book::findOrFail($id)->delete();
    }
}
